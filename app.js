const express = require("express");
const AWS = require("aws-sdk");
const app = express();
const port = 3000;
const s3 = new AWS.S3();
const BUCKET_NAME = "validationimages";

const params2 = {
	Bucket: BUCKET_NAME,
	Key: "LOC_synset_mapping.txt",
};

const dogParams = {
	Bucket: BUCKET_NAME,
	Key: "dogs.txt",
};

const birdParams = {
	Bucket: BUCKET_NAME,
	Key: "birds.txt",
};

const audioParams = {
	Bucket: BUCKET_NAME,
	Key: "correct_answer_sound.mp3",
};
let dogsList = null;
let locSynsetList = null;
let birdsList = null;
async function preloadFiles() {
	dogsList = await getDogObject();
	locSynsetList = await getObject();
	birdsList = await getBirdObject();
}
preloadFiles();

async function getObject(params) {
	console.log("get object has been called");
	const data = await s3.getObject(params2).promise();
	const result = data.Body.toString("utf-8");
	return result;
}

async function getDogObject() {
	console.log("get dog object has been called");
	const data = await s3.getObject(dogParams).promise();
	const result = data.Body.toString("utf-8");
	return result;
}

async function getBirdObject() {
	console.log("get bird object has been called");
	const data = await s3.getObject(birdParams).promise();
	const result = data.Body.toString("utf-8");
	return result;
}

async function getIdentifierFromCategory(categoryName) {
	//const data1 = await getObject();
	//const fileContent = data1;

	const lines = locSynsetList.split("\n").filter((line) => line.trim() !== "");
	const categoryMap = {};

	lines.forEach((line) => {
		const firstSpaceIndex = line.indexOf(" ");
		if (firstSpaceIndex === -1) return;

		const id = line.substring(0, firstSpaceIndex); // Extract identifier
		const fullCategoryName = line.substring(firstSpaceIndex + 1).trim(); // Keep the full category name

		// Map the full category name to its identifier
		categoryMap[fullCategoryName] = id;
	});

	// Return the identifier for the given category name
	console.log(categoryMap);
	return categoryMap[categoryName] || null;
}

async function imageToCategory(img_path) {
	console.log(img_path);
	console.log("image to category has been calleds");
	//const data = await getObject();
	console.log("Data gotten from getObject");
	const lines = locSynsetList.split(/\r?\n|\r|\n/g);
	const synset_map = lines.reduce((map, line) => {
		map[line.slice(0, 9)] = line.slice(10);
		return map;
	}, {});

	if (img_path.includes("split_10")) {
		const out = synset_map[img_path.slice(75, 84)];
		console.log("synset identifier: " + img_path.slice(75, 84));
		console.log("split 10 image. Out: " + out);
		return [out, img_path.slice(75, 84)];
	} else {
		const out = synset_map[img_path.slice(74, 83)];
		console.log("synset identifier: " + img_path.slice(74, 83));
		console.log("Out:", out);
		return [out, img_path.slice(74, 83)];
	}
}

// async function getRandomFileFromAllFolders(bucketName, searchString, prefixes) {
// 	const matchingFiles = [];

// 	// Function to fetch all objects from a given prefix
// 	async function fetchObjectsFromPrefix(prefix) {
// 		const params = {
// 			Bucket: bucketName,
// 			Prefix: prefix, // Specify the current folder (prefix)
// 		};

// 		const prefixMatchingFiles = [];

// 		let continuationToken = null;
// 		do {
// 			if (continuationToken) {
// 				params.ContinuationToken = continuationToken;
// 			}

// 			const data = await s3.listObjectsV2(params).promise();

// 			// Filter objects whose Key includes the search string
// 			const filteredFiles = data.Contents.filter((item) =>
// 				item.Key.includes(searchString)
// 			);
// 			prefixMatchingFiles.push(...filteredFiles);

// 			continuationToken = data.IsTruncated ? data.NextContinuationToken : null;
// 		} while (continuationToken);

// 		return prefixMatchingFiles;
// 	}

// 	// Fetch all prefixes in parallel
// 	const folderPromises = prefixes.map(fetchObjectsFromPrefix);

// 	// Wait for all folders to be processed
// 	const results = await Promise.all(folderPromises);

// 	// Combine results from all folders
// 	results.forEach((result) => matchingFiles.push(...result));

// 	// Pick a random file if any matches were found
// 	if (matchingFiles.length === 0) {
// 		throw new Error(
// 			`No files found containing "${searchString}" in any folder.`
// 		);
// 	}

// 	const randomFile =
// 		matchingFiles[Math.floor(Math.random() * matchingFiles.length)];
// 	return randomFile.Key;
// }
const fileCache = new Map(); // key: awsImageKey, value: [file1, file2, file3...]

async function getRandomFileFromAllFolders(bucketName, searchString, prefixes) {
	// Check if we’ve already cached matching files
	if (fileCache.has(searchString)) {
		const matchingFiles = fileCache.get(searchString);
		return matchingFiles[Math.floor(Math.random() * matchingFiles.length)];
	}

	// Else, do the S3 lookup and cache it
	const matchingFiles = [];

	for (const prefix of prefixes) {
		const params = { Bucket: bucketName, Prefix: prefix };
		const data = await s3.listObjectsV2(params).promise();
		const filtered = data.Contents.filter(item =>
			item.Key.includes(searchString)
		);
		if (filtered.length > 0) {
			matchingFiles.push(...filtered.map(item => item.Key));
		}
	}

	if (matchingFiles.length === 0) {
		throw new Error(`No files found for "${searchString}"`);
	}

	fileCache.set(searchString, matchingFiles); // ✅ Cache full list
	return matchingFiles[Math.floor(Math.random() * matchingFiles.length)]; // ✅ Still random
}
app.get(`/get-random-image-url`, async (req, res) => {
	try {
		const params = {
			Bucket: BUCKET_NAME,
			Delimiter: "/",
		};

		const excludedFolder = "grids/"; // Folder to exclude

		const objects = await s3.listObjectsV2(params).promise();

		// Filter out the unwanted folder
		let validFolders = objects.CommonPrefixes.map(
			(prefix) => prefix.Prefix
		).filter((folder) => folder !== excludedFolder);

		if (validFolders.length === 0) {
			return res
				.status(404)
				.json({ error: "No valid folders found in the bucket" });
		}

		// Pick a random folder from the valid list
		const randomFolder =
			validFolders[Math.floor(Math.random() * validFolders.length)];

		// List images inside the chosen folder
		const objectParams = {
			Bucket: BUCKET_NAME,
			Prefix: randomFolder,
		};

		const objectList = await s3.listObjectsV2(objectParams).promise();

		if (!objectList.Contents || objectList.Contents.length === 0) {
			return res
				.status(404)
				.json({ error: "No images found in the selected folder" });
		}

		// Pick a random image from the folder
		const randomIndex = Math.floor(Math.random() * objectList.Contents.length);
		const randomImage = objectList.Contents[randomIndex].Key;

		// Generate a pre-signed URL for the image
		const signedUrlParams = {
			Bucket: BUCKET_NAME,
			Key: randomImage,
			Expires: 60,
		};

		const signedUrl = s3.getSignedUrl("getObject", signedUrlParams);

		res.json({ imageUrl: signedUrl });
		console.log(signedUrl);
	} catch (err) {
		console.error("Error fetching random image from S3:", err);
		res.status(500).json({ error: "Error fetching random image from S3" });
	}
});

app.get("/get-image-category", async (req, res) => {
	try {
		path = req.query.imageUrl;
		console.log("path: " + path);
		const category = await imageToCategory(path);
		res.json({ imageCategory: category[0], synsetIdentifier: category[1] });
	} catch (err) {
		console.error("Error: 88 " + err);
	}
});

app.get("/get-categories", async (req, res) => {
	try {
		//const data = await getObject();
		const categories = locSynsetList
			.split("\n")
			.map((line) => line.split(/\s/).slice(1).join(" ").trim())
			.filter((category) => category);

		res.json(categories);
	} catch (err) {
		console.error("error getting categories: " + err);
	}
});

app.get("/get-random-dog-url", async (req, res) => {
	try {
		//const data = await getDogObject();
		let categories = dogsList.split("\n");
		let randomDog = categories[Math.floor(Math.random() * categories.length)];
		randomDog = randomDog.substring(0, randomDog.length - 1);
		//const data2 = await getObject();
		const locSynsetArray = locSynsetList.split(/\r?\n|\r|\n/g);
		let awsImageKey = "";
		for (let i = 0; i < locSynsetArray.length; i++) {
			if (locSynsetArray[i].toLowerCase().includes(randomDog.toLowerCase())) {
				console.log("MATCH FOUND IN LOC SYNSET ARRAY: " + locSynsetArray[i]);
				awsImageKey = locSynsetArray[i].substring(0, 9);
				break;
			}
		}
		console.log("awsImageKey: " + awsImageKey);
		const prefixes = [
			"split_1/",
			"split_2/",
			"split_3/",
			"split_4/",
			"split_5/",
			"split_6/",
			"split_7/",
			"split_8/",
			"split_9/",
			"split_10/",
		];
		const randomFile = await getRandomFileFromAllFolders(
			BUCKET_NAME,
			awsImageKey,
			prefixes
		);
		signedUrlParams = {
			Bucket: BUCKET_NAME,
			Key: randomFile,
			Expires: 60,
		};

		const signedUrl = s3.getSignedUrl("getObject", signedUrlParams);
		res.json({ imageUrl: signedUrl });
	} catch (err) {
		console.error("Error: " + err);
	}
});

app.get("/get-random-bird-url", async (req, res) => {
	try {
		//const data = await getBirdObject();
		let categories = birdsList.split("\n");
		let randomBird = categories[Math.floor(Math.random() * categories.length)];
		randomBird = randomBird.substring(0, randomBird.length - 1);

		//const data2 = await getObject();
		const locSynsetArray = locSynsetList.split(/\r?\n|\r|\n/g);
		let awsImageKey = "";
		for (let i = 0; i < locSynsetArray.length; i++) {
			if (locSynsetArray[i].toLowerCase().includes(randomBird.toLowerCase())) {
				console.log("MATCH FOUND IN LOC SYNSET ARRAY: " + locSynsetArray[i]);
				awsImageKey = locSynsetArray[i].substring(0, 9);
				break;
			}
		}
		console.log("awsImageKey: " + awsImageKey);
		const prefixes = [
			"split_1/",
			"split_2/",
			"split_3/",
			"split_4/",
			"split_5/",
			"split_6/",
			"split_7/",
			"split_8/",
			"split_9/",
			"split_10/",
		];
		const randomFile = await getRandomFileFromAllFolders(
			BUCKET_NAME,
			awsImageKey,
			prefixes
		);
		signedUrlParams = {
			Bucket: BUCKET_NAME,
			Key: randomFile,
			Expires: 60,
		};

		const signedUrl = s3.getSignedUrl("getObject", signedUrlParams);
		res.json({ imageUrl: signedUrl });
	} catch (err) {
		console.error("Error: " + err);
	}
});

app.get("/get-image-grid", async (req, res) => {
	try {
		sId = req.query.synsetIdentifier;
		const gridParams1 = {
			Bucket: BUCKET_NAME,
			Prefix: "grids/",
		};
		const data = await s3.listObjectsV2(gridParams1).promise();
		if (!data.Contents || data.Contents.length === 0) {
			console.log("No images found inside grids folder");
		}

		const matching = data.Contents.filter((obj) => obj.Key.includes(sId));
		if (matching.length === 0) {
			console.log("No images found with that synset identifier");
		}
		const image = matching[0].Key;
		const signedUrl = s3.getSignedUrl("getObject", {
			Bucket: BUCKET_NAME,
			Key: image,
			Expires: 60,
		});
		res.json({ gridImageUrl: signedUrl });
	} catch (err) {
		console.error("Error in get image grid in server.js: " + err);
	}
});

app.get("/get-image-grid-from-category", async (req, res) => {
	try {
		const categoryName = req.query.categoryName;
		console.log("category name: " + categoryName);
		if (!categoryName) {
			return res.status(400).json({ error: "categoryName is required" });
		}
		sId = await getIdentifierFromCategory(categoryName);
		console.log("id in get image grid from category: " + sId);
		if (!sId) {
			return res.status(404).json({ error: "Category not found" });
		}
		const gridParams1 = {
			Bucket: BUCKET_NAME,
			Prefix: "grids/",
		};
		const data = await s3.listObjectsV2(gridParams1).promise();
		if (!data.Contents || data.Contents.length === 0) {
			console.log("No images found inside grids folder");
		}
		const matching = data.Contents.filter((obj) => obj.Key.includes(sId));
		if (matching.length === 0) {
			console.log("No images found with that synset identifier");
		}
		const image = matching[0].Key;
		const signedUrl = s3.getSignedUrl("getObject", {
			Bucket: BUCKET_NAME,
			Key: image,
			Expires: 60,
		});
		res.json({ gridImageUrl: signedUrl });
	} catch (err) {
		console.error("error in /get-image-grid-from-category", err);
	}
});

app.get("/get-Correct-Answer-Audio", async (req, res) => {
	try {
		const audioData = await s3.getObject(audioParams).promise();
		res.setHeader("Content-Type", "audio/mpeg");
		res.setHeader("Content-Disposition", "inline");
		res.send(audioData.Body);
	} catch (error) {
		console.error("Error fetching audio:", error);
		res.status(500).json({ message: "Failed to fetch audio" });
	}
});

app.use(express.static("public"));
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

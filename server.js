const express = require('express');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;
const s3 = new AWS.S3();
const BUCKET_NAME = 'validationimages';

const params2 = {
    Bucket: BUCKET_NAME,
    Key: "LOC_synset_mapping.txt"
};

const dogParams = {
    Bucket: BUCKET_NAME,
    Key: "dogs.txt"
}

const birdParams = {
    Bucket: BUCKET_NAME,
    Key: "birds.txt"
}

async function getObject(params) {
    console.log("get object has been called");
    const data = await s3.getObject(params2).promise();
    const result = data.Body.toString('utf-8');
    return result;
}

async function getDogObject() {
    console.log("get dog object has been called");
    const data = await s3.getObject(dogParams).promise();
    const result = data.Body.toString('utf-8');
    return result;
}

async function getBirdObject() {
    console.log("get bird object has been called");
    const data = await s3.getObject(birdParams).promise();
    const result = data.Body.toString('utf-8');
    return result;
}

async function imageToCategory(img_path) {
    console.log(img_path);
    console.log("image to category has been calleds")
    const data = await getObject();
    console.log("Data gotten from getObject");
    const lines = data.split(/\r?\n|\r|\n/g);
        const synset_map = lines.reduce((map, line) => {
            map[line.slice(0, 9)] = line.slice(10);
            return map;
        }, {});
        console.log(img_path.slice(74,83))
        if (img_path.includes("split_10")) {
            const out = synset_map[img_path.slice(75,84)]
            console.log("split 10 image. Out: " + out)
            return out;
        }
        else {
            const out = synset_map[img_path.slice(74, 83)];
            console.log("Out:", out); 
            return out;
        }
}

async function getRandomFileFromAllFolders(bucketName, searchString, prefixes) {
    const matchingFiles = [];
  
    // Function to fetch all objects from a given prefix
    async function fetchObjectsFromPrefix(prefix) {
      const params = {
        Bucket: bucketName,
        Prefix: prefix, // Specify the current folder (prefix)
      };
  
      const prefixMatchingFiles = [];
  
      let continuationToken = null;
      do {
        if (continuationToken) {
          params.ContinuationToken = continuationToken;
        }
  
        const data = await s3.listObjectsV2(params).promise();
  
        // Filter objects whose Key includes the search string
        const filteredFiles = data.Contents.filter((item) => item.Key.includes(searchString));
        prefixMatchingFiles.push(...filteredFiles);
  
        continuationToken = data.IsTruncated ? data.NextContinuationToken : null;
      } while (continuationToken);
  
      return prefixMatchingFiles;
    }
  
    // Fetch all prefixes in parallel
    const folderPromises = prefixes.map(fetchObjectsFromPrefix);
  
    // Wait for all folders to be processed
    const results = await Promise.all(folderPromises);
  
    // Combine results from all folders
    results.forEach((result) => matchingFiles.push(...result));
  
    // Pick a random file if any matches were found
    if (matchingFiles.length === 0) {
      throw new Error(`No files found containing "${searchString}" in any folder.`);
    }
  
    const randomFile = matchingFiles[Math.floor(Math.random() * matchingFiles.length)];
    return randomFile.Key;
  }


app.get(`/get-random-image-url`, async (req, res) => {
    try {
        const params = {
            Bucket: BUCKET_NAME,
            Delimiter: '/',
        };
        randomNum = Math.floor(Math.random() * 10);
        const objects = await s3.listObjectsV2(params).promise();
        randomFolder = objects.CommonPrefixes[randomNum]['Prefix']
        if (!objects.Contents || objects.Contents.length === 0) {
            console.log("error: No images found in the bucket" );
        }
        const objectParams = {
            Bucket: BUCKET_NAME,
            Prefix: randomFolder,
        }
        const objectList = await s3.listObjectsV2(objectParams).promise()
        const randomIndex = Math.floor(Math.random() * objectList.Contents.length);
        const randomImage = objectList.Contents[randomIndex].Key;

        const signedUrlParams = {
            Bucket: BUCKET_NAME,
            Key: randomImage,
            Expires: 60, 
        };

        const signedUrl = s3.getSignedUrl('getObject', signedUrlParams);

        res.json({imageUrl: signedUrl});
        console.log(signedUrl);
    } catch (err) {
        console.error('Error fetching random image from S3:', err);
        res.status(500).json({ error: 'Error fetching random image from S3' });
    }
});


app.get('/get-image-category', async (req, res) => {
    try {
        path = req.query.imageUrl;
        console.log("path: " + path);
        const category = await imageToCategory(path);
        res.json({imageCategory: category})
    } catch (err) {
        console.error("Error: 88 " + err);
    }
})


app.get('/get-categories', async (req, res) => {
 
    try {
        const data = await getObject();
        const categories = data.split('\n')
            //.map(line => line.split(/\s+|,/).slice(1).join(' ').trim())
            .map(line => line.split(/\s/).slice(1).join(' ').trim())
            .filter(category => category);

        res.json(categories);
    } catch (err) {
        console.error("error getting categories: "+ err)
    }
})


app.get('/get-random-dog-url', async (req, res) => {
    try {
        const data = await getDogObject();
        let categories = data.split('\n')
        let randomDog = categories[Math.floor(Math.random() * categories.length)]
        randomDog = randomDog.substring(0, randomDog.length - 1)
        const data2 = await getObject();
        const locSynsetArray = data2.split(/\r?\n|\r|\n/g);
        let awsImageKey = "";
        for (let i = 0; i < locSynsetArray.length; i++) {
            if (locSynsetArray[i].toLowerCase().includes(randomDog.toLowerCase())) {
                console.log("MATCH FOUND IN LOC SYNSET ARRAY: " + locSynsetArray[i])
                awsImageKey = locSynsetArray[i].substring(0,9)
            }
        }
        console.log("awsImageKey: " + awsImageKey)
        const prefixes = [
            'split_1/', 'split_2/', 'split_3/',
            'split_4/', 'split_5/', 'split_6/',
            'split_7/', 'split_8/', 'split_9/', 'split_10/'
          ];        
        const randomFile = await getRandomFileFromAllFolders(BUCKET_NAME, awsImageKey, prefixes);
        signedUrlParams = {
            Bucket: BUCKET_NAME,
            Key: randomFile,
            Expires: 60,
        };

        const signedUrl = s3.getSignedUrl('getObject', signedUrlParams);
        res.json({imageUrl: signedUrl});
    } catch (err) {
        console.error("Error: " + err);
    }
})


app.get('/get-random-bird-url', async (req, res) => {
    try {
        const data = await getBirdObject();
        let categories = data.split('\n')
        let randomBird = categories[Math.floor(Math.random() * categories.length)]
        randomBird = randomBird.substring(0, randomBird.length - 1)
        const data2 = await getObject();
        const locSynsetArray = data2.split(/\r?\n|\r|\n/g);
        let awsImageKey = "";
        for (let i = 0; i < locSynsetArray.length; i++) {
            if (locSynsetArray[i].toLowerCase().includes(randomBird.toLowerCase())) {
                console.log("MATCH FOUND IN LOC SYNSET ARRAY: " + locSynsetArray[i])
                awsImageKey = locSynsetArray[i].substring(0,9)
            }
        }
        console.log("awsImageKey: " + awsImageKey)
        const prefixes = [
            'split_1/', 'split_2/', 'split_3/',
            'split_4/', 'split_5/', 'split_6/',
            'split_7/', 'split_8/', 'split_9/', 'split_10/'
          ];        
        const randomFile = await getRandomFileFromAllFolders(BUCKET_NAME, awsImageKey, prefixes);
        signedUrlParams = {
            Bucket: BUCKET_NAME,
            Key: randomFile,
            Expires: 60,
        };

        const signedUrl = s3.getSignedUrl('getObject', signedUrlParams);
        res.json({imageUrl: signedUrl});
    } catch (err) {
        console.error("Error: " + err);
    }
})


app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
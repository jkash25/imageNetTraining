let currentCategory = null;
let numCorrect = 0;
let numGuesses = 0;
let numWrong = 0;
const BUCKET_NAME = "validationimages";

document.getElementById("clickMe").addEventListener("click", async () => {
	try {
		const response = await fetch(`/get-random-bird-url`);
		const data = await response.json();

		if (data.imageUrl) {
			const imageUrl = data.imageUrl;
			console.log(
				"This is the image URL passed into get category: " + data.imageUrl
			);

			const categoryData = await fetch(
				`/get-image-category?imageUrl=${imageUrl}`
			);
			const category = await categoryData.json();
			currentCategory = category.imageCategory; // Update the current category
			let currentSynsetId;
			console.log("Category data: " + category.imageCategory);
			currentSynsetId = category.synsetIdentifier;
			console.log("Synset id: " + currentSynsetId);

			const imageContainer = document.getElementById("imageContainer");
			imageContainer.innerHTML = "";
			const imgBox1 = document.createElement("div");
			imgBox1.classList.add("image-box");

			const imgElement = document.createElement("img");
			imgElement.src = data.imageUrl;
			imgElement.alt = "Random Image";
			imgElement.classList.add("image-item");
			imgElement.style.maxWidth = "100%";
			imgElement.style.height = "auto";

			imgBox1.appendChild(imgElement);
			imageContainer.appendChild(imgBox1);

			try {
				const response2 = await fetch(
					`/get-image-grid?synsetIdentifier=${currentSynsetId}`
				);
				const data2 = await response2.json();
				if (data2.gridImageUrl) {
					const imgBox2 = document.createElement("div");
					imgBox2.classList.add("image-box", "hidden");

					const imgElement2 = document.createElement("img");
					imgElement2.src = data2.gridImageUrl;
					imgElement2.alt = "Grid Image";
					imgElement2.classList.add("image-item"); // Add class for styling

					imgBox2.appendChild(imgElement2);
					imageContainer.appendChild(imgBox2);

					const showButton = document.createElement("button");
					showButton.textContent = "Show Grid Image and Correct Answer";
					showButton.classList.add("show-button");
					imageContainer.appendChild(showButton);

					const imageText = document.createElement("p");
					imageText.textContent = category.imageCategory;
					imageText.classList.add("image-text", "hidden");
					imageContainer.appendChild(imageText);

					// Button click event to show image
					showButton.addEventListener("click", () => {
						imgBox2.classList.toggle("hidden");
						imgBox2.classList.toggle("fade-in");
						imageText.classList.toggle("hidden");
						imageText.classList.toggle("fade-in-text");
						showButton.textContent = imgBox2.classList.contains("hidden")
							? "Show Grid Image and Correct Answer"
							: "Hide";
					});
				}
			} catch (err) {
				console.error("Error in get image grid in app.js: ", err);
			}
		} else {
			console.error("No image URL returned");
		}
	} catch (error) {
		console.error("Error fetching random image: " + error);
	}
});

(async () => {
	// Fetch categories only once
	const c = await fetch(`/get-categories`);
	const categories = await c.json();

	const searchInput = document.getElementById("category-search");
	console.log("Search input: " + searchInput);
	const categoryList = document.getElementById("category-list");
	const searchButton = document.getElementById("search-button");
	const currentGuessContainer = document.getElementById(
		"current-guess-container"
	);
	const currentGuessImage = document.getElementById("current-guess-image");
	const currentGuessText = document.getElementById("current-guess-text");

	searchInput.addEventListener("input", function () {
		const query = searchInput.value.toLowerCase();
		categoryList.innerHTML = ""; // Clear previous results

		if (query) {
			const filteredCategories = categories.filter((category) =>
				category.toLowerCase().includes(query)
			);

			if (filteredCategories.length > 0) {
				categoryList.classList.remove("hidden");
				filteredCategories.forEach((category) => {
					const li = document.createElement("li");
					li.textContent = category;
					li.addEventListener("click", () => {
						searchInput.value = category;
						getCurrentGuessImage(searchInput.value);
						categoryList.classList.add("hidden");
					});
					categoryList.appendChild(li);
				});
			} else {
				categoryList.classList.add("hidden");
			}
		} else {
			categoryList.classList.add("hidden");
		}
	});

	async function getCurrentGuessImage(category) {
		try {
			const response = await fetch(
				`/get-image-grid-from-category?categoryName=${category}`
			);
			const data = await response.json();
			if (data.gridImageUrl) {
				currentGuessImage.src = data.gridImageUrl;
				currentGuessImage.alt = category;
				currentGuessText.textContent = `Your current guess: ${category}`;
				currentGuessContainer.classList.remove("hidden");
			}
		} catch (err) {
			console.error("error in getCurrentGuessImage: " + err);
		}
	}

	document.addEventListener("click", (e) => {
		if (!searchInput.contains(e.target) && !categoryList.contains(e.target)) {
			categoryList.classList.add("hidden");
		}
	});

	searchButton.addEventListener("click", async () => {
		const selectedCategory = searchInput.value.trim();
		if (!currentCategory) {
			alert("No image loaded. Please click the button to load an image.");
			return;
		}
		if (selectedCategory === currentCategory) {
			console.log("got here!");
			const audioData = await fetch(`/get-Correct-Answer-Audio`);
			if (audioData.ok) {
				const blob = await audioData.blob();
				const audioURL = URL.createObjectURL(blob);
				console.log("Audio URL:", audioURL);
				const audio = new Audio(audioURL);
				audio.play();
			} else {
				console.error("failed to fetch audio data");
			}
			console.log("You selected correctly!: " + selectedCategory);
			numCorrect++;
			numGuesses++;
			console.log("Number of correct: " + numCorrect);
		} else {
			numWrong++;
			numGuesses++;
			console.log(
				`You selected ${selectedCategory} but the answer was ${currentCategory}!`
			);
		}
		updateStats();
	});
})();

function updateStats() {
	document.getElementById("correctCount").textContent = numCorrect;
	document.getElementById("totalGuesses").textContent = numGuesses;
	document.getElementById("wrongCount").textContent = numWrong;
}

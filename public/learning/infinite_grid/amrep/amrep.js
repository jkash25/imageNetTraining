const categories = [
	{
		name: "loggerhead, loggerhead turtle, Caretta caretta",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01664065.jpg",
	},
	{
		name: "leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01665541.jpg",
	},
	{
		name: "mud turtle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01667114.jpg",
	},
	{
		name: "terrapin",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01667778.jpg",
	},
	{
		name: "box turtle, box tortoise",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01669191.jpg",
	},
	{
		name: "banded gecko",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01675722.jpg",
	},
	{
		name: "common iguana, iguana, Iguana iguana",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01677366.jpg",
	},
	{
		name: "American chameleon, anole, Anolis carolinensis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01682714.jpg",
	},
	{
		name: "whiptail, whiptail lizard",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01685808.jpg",
	},
	{
		name: "agama",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01687978.jpg",
	},
	{
		name: "frilled lizard, Chlamydosaurus kingi",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01688243.jpg",
	},
	{
		name: "alligator lizard",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01689811.jpg",
	},
	{
		name: "Gila monster, Heloderma suspectum",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01692333.jpg",
	},
	{
		name: "green lizard, Lacerta viridis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01693334.jpg",
	},
	{
		name: "African chameleon, Chamaeleo chamaeleon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01694178.jpg",
	},
	{
		name: "Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01695060.jpg",
	},
	{
		name: "African crocodile, Nile crocodile, Crocodylus niloticus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01697457.jpg",
	},
	{
		name: "American alligator, Alligator mississipiensis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01698640.jpg",
	},
	{
		name: "thunder snake, worm snake, Carphophis amoenus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01728572.jpg",
	},
	{
		name: "ringneck snake, ring-necked snake, ring snake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01728920.jpg",
	},
	{
		name: "hognose snake, puff adder, sand viper",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01729322.jpg",
	},
	{
		name: "green snake, grass snake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01729977.jpg",
	},
	{
		name: "king snake, kingsnake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01734418.jpg",
	},
	{
		name: "garter snake, grass snake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01735189.jpg",
	},
	{
		name: "water snake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01737021.jpg",
	},
	{
		name: "vine snake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01739381.jpg",
	},
	{
		name: "night snake, Hypsiglena torquata",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01740131.jpg",
	},
	{
		name: "boa constrictor, Constrictor constrictor",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01742172.jpg",
	},
	{
		name: "rock python, rock snake, Python sebae",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01744401.jpg",
	},
	{
		name: "Indian cobra, Naja naja",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01748264.jpg",
	},
	{
		name: "green mamba",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01749939.jpg",
	},
	{
		name: "sea snake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01751748.jpg",
	},
	{
		name: "horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01753488.jpg",
	},
	{
		name: "diamondback, diamondback rattlesnake, Crotalus adamanteus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01755581.jpg",
	},
	{
		name: "sidewinder, horned rattlesnake, Crotalus cerastes",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01756291.jpg",
	},
	{
		name: "European fire salamander, Salamandra salamandra",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01629819.jpg",
	},
	{
		name: "common newt, Triturus vulgaris",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01630670.jpg",
	},
	{
		name: "eft",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01631663.jpg",
	},
	{
		name: "spotted salamander, Ambystoma maculatum",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01632458.jpg",
	},
	{
		name: "axolotl, mud puppy, Ambystoma mexicanum",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01632777.jpg",
	},
	{
		name: "bullfrog, Rana catesbeiana",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01641577.jpg",
	},
	{
		name: "tree frog, tree-frog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01644373.jpg",
	},
	{
		name: "tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01644900.jpg",
	},
];

const itemsPerLoad = 20; // Number of items to load per batch
let loadedItems = 0; // Tracks how many items we've loaded
let isThrottled = false; // For scroll throttling
let searchTimeout; // For search debouncing

// DOM Elements
const grid = document.getElementById("categoryGrid");
const searchInput = document.getElementById("search");
const popup = document.getElementById("popup");

// Filters categories based on search input
let isSearchActive = false; // Track if we're in "search mode"

function filterCategories() {
	const searchTerm = searchInput.value.toLowerCase().trim();
	isSearchActive = searchTerm.length > 0;

	// Case 1: Empty search → Reset to lazy loading
	if (!isSearchActive) {
		grid.innerHTML = ""; // Clear existing results
		loadedItems = 0; // Reset counter
		loadMore(); // Load first batch
		return;
	}

	// Case 2: Non-empty search → Filter ALL items
	const matchingItems = categories.filter((category) =>
		category.name.toLowerCase().includes(searchTerm)
	);

	// Clear current grid
	grid.innerHTML = "";

	// Show "No results" or matching items
	if (matchingItems.length === 0) {
		grid.innerHTML = `<p class="no-results">No images found for "${searchTerm}"</p>`;
	} else {
		matchingItems.forEach((category) => {
			const card = document.createElement("div");
			card.className = "card";
			card.innerHTML = `
                <img src="${category.image}" alt="${category.name}" loading="lazy">
                <p>${category.name}</p>
            `;
			card.addEventListener("mouseenter", () =>
				showPopup(category.image, category.name)
			);
			card.addEventListener("mouseleave", hidePopup);
			grid.appendChild(card);
		});
	}
}

// ======================
// Main Functions
// ======================

// Loads more items into the grid
function loadMore() {
	if (isSearchActive || loadedItems >= categories.length) {
		// All items loaded - remove scroll listener if desired
		return;
	}

	// Create a document fragment for better performance
	const fragment = document.createDocumentFragment();

	// Get next batch of items
	const nextItems = categories.slice(loadedItems, loadedItems + itemsPerLoad);

	nextItems.forEach((category) => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
            <img src="${category.image}" alt="${category.name}" loading="lazy">
            <p>${category.name}</p>
        `;

		// Event listeners for popup
		card.addEventListener("click", () =>
			showPopup(category.image, category.name)
		);
		document.getElementById("closePopup").addEventListener("click", hidePopup);
		fragment.appendChild(card);
	});

	grid.appendChild(fragment);
	loadedItems += itemsPerLoad;

	// Preload next batch in background
	preloadNextBatch();
}

// Preloads the next batch of images silently
function preloadNextBatch() {
	const nextBatchStart = loadedItems;
	const nextBatchEnd = Math.min(loadedItems + itemsPerLoad, categories.length);

	for (let i = nextBatchStart; i < nextBatchEnd; i++) {
		const img = new Image();
		img.src = categories[i].image;
	}
}
// UI Functions

function showPopup(image, name) {
	document.getElementById("popupImage").src = image;
	document.getElementById("popupText").textContent = name;
	popup.classList.remove("hidden");
}

function hidePopup() {
	popup.classList.add("hidden");
}

// Event Listeners

// Modern Intersection Observer approach
const observer = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) {
			loadMore();
		}
	},
	{ threshold: 0.1 }
);

// Observe a sentinel element at the bottom of the page
const sentinel = document.createElement("div");
sentinel.className = "sentinel";
document.body.appendChild(sentinel);
observer.observe(sentinel);

// Debounced search input
searchInput.addEventListener("input", () => {
	clearTimeout(searchTimeout);
	searchTimeout = setTimeout(filterCategories, 300);
});

// Initial Load, load first batch immediately
loadMore();

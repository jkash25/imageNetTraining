const categories = [
	{
		name: "guacamole",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07583066.jpg",
	},
	{
		name: "consomme",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07584110.jpg",
	},
	{
		name: "hot pot, hotpot",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07590611.jpg",
	},
	{
		name: "trifle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07613480.jpg",
	},
	{
		name: "ice cream, icecream",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07614500.jpg",
	},
	{
		name: "ice lolly, lolly, lollipop, popsicle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07615774.jpg",
	},
	{
		name: "French loaf",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07684084.jpg",
	},
	{
		name: "bagel, beigel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07693725.jpg",
	},
	{
		name: "pretzel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07695742.jpg",
	},
	{
		name: "cheeseburger",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07697313.jpg",
	},
	{
		name: "hotdog, hot dog, red hot",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07697537.jpg",
	},
	{
		name: "mashed potato",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07711569.jpg",
	},
	{
		name: "head cabbage",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07714571.jpg",
	},
	{
		name: "broccoli",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07714990.jpg",
	},
	{
		name: "cauliflower",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07715103.jpg",
	},
	{
		name: "zucchini, courgette",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07716358.jpg",
	},
	{
		name: "spaghetti squash",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07716906.jpg",
	},
	{
		name: "acorn squash",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07717410.jpg",
	},
	{
		name: "butternut squash",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07717556.jpg",
	},
	{
		name: "cucumber, cuke",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07718472.jpg",
	},
	{
		name: "artichoke, globe artichoke",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07718747.jpg",
	},
	{
		name: "bell pepper",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07720875.jpg",
	},
	{
		name: "cardoon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07730033.jpg",
	},
	{
		name: "mushroom",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07734744.jpg",
	},
	{
		name: "Granny Smith",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07742313.jpg",
	},
	{
		name: "strawberry",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07745940.jpg",
	},
	{
		name: "orange",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07747607.jpg",
	},
	{
		name: "lemon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07749582.jpg",
	},
	{
		name: "fig",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07753113.jpg",
	},
	{
		name: "pineapple, ananas",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07753275.jpg",
	},
	{
		name: "banana",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07753592.jpg",
	},
	{
		name: "jackfruit, jak, jack",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07754684.jpg",
	},
	{
		name: "custard apple",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07760859.jpg",
	},
	{
		name: "pomegranate",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07768694.jpg",
	},
	{
		name: "hay",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07802026.jpg",
	},
	{
		name: "carbonara",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07831146.jpg",
	},
	{
		name: "chocolate sauce, chocolate syrup",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07836838.jpg",
	},
	{
		name: "dough",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07860988.jpg",
	},
	{
		name: "meat loaf, meatloaf",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07871810.jpg",
	},
	{
		name: "pizza, pizza pie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07873807.jpg",
	},
	{
		name: "potpie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07875152.jpg",
	},
	{
		name: "burrito",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07880968.jpg",
	},
	{
		name: "red wine",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07892512.jpg",
	},
	{
		name: "espresso",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07920052.jpg",
	},
	{
		name: "eggnog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n07932039.jpg",
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
		card.addEventListener("mouseenter", () =>
			showPopup(category.image, category.name)
		);
		card.addEventListener("mouseleave", hidePopup);

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

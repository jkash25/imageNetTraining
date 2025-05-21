const categories = [
	{
		name: "cock",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01514668.jpg",
	},
	{
		name: "hen",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01514859.jpg",
	},
	{
		name: "ostrich, Struthio camelus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01518878.jpg",
	},
	{
		name: "brambling, Fringilla montifringilla",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01530575.jpg",
	},
	{
		name: "goldfinch, Carduelis carduelis",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01531178.jpg",
	},
	{
		name: "house finch, linnet, Carpodacus mexicanus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01532829.jpg",
	},
	{
		name: "junco, snowbird",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01534433.jpg",
	},
	{
		name: "indigo bunting, indigo finch, indigo bird, Passerina cyanea",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01537544.jpg",
	},
	{
		name: "robin, American robin, Turdus migratorius",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01558993.jpg",
	},
	{
		name: "bulbul",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01560419.jpg",
	},
	{
		name: "jay",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01580077.jpg",
	},
	{
		name: "magpie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01582220.jpg",
	},
	{
		name: "chickadee",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01592084.jpg",
	},
	{
		name: "water ouzel, dipper",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01601694.jpg",
	},
	{
		name: "kite",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01608432.jpg",
	},
	{
		name: "bald eagle, American eagle, Haliaeetus leucocephalus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01614925.jpg",
	},
	{
		name: "vulture",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01616318.jpg",
	},
	{
		name: "great grey owl, great gray owl, Strix nebulosa",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01622779.jpg",
	},
	{
		name: "black grouse",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01795545.jpg",
	},
	{
		name: "ptarmigan",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01796340.jpg",
	},
	{
		name: "ruffed grouse, partridge, Bonasa umbellus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01797886.jpg",
	},
	{
		name: "prairie chicken, prairie grouse, prairie fowl",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01798484.jpg",
	},
	{
		name: "peacock",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01806143.jpg",
	},
	{
		name: "quail",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01806567.jpg",
	},
	{
		name: "partridge",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01807496.jpg",
	},
	{
		name: "African grey, African gray, Psittacus erithacus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01817953.jpg",
	},
	{
		name: "macaw",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01818515.jpg",
	},
	{
		name: "sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01819313.jpg",
	},
	{
		name: "lorikeet",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01820546.jpg",
	},
	{
		name: "coucal",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01824575.jpg",
	},
	{
		name: "bee eater",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01828970.jpg",
	},
	{
		name: "hornbill",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01829413.jpg",
	},
	{
		name: "hummingbird",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01833805.jpg",
	},
	{
		name: "jacamar",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01843065.jpg",
	},
	{
		name: "toucan",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01843383.jpg",
	},
	{
		name: "drake",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01847000.jpg",
	},
	{
		name: "red-breasted merganser, Mergus serrator",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01855032.jpg",
	},
	{
		name: "goose",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01855672.jpg",
	},
	{
		name: "black swan, Cygnus atratus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01860187.jpg",
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

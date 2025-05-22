const categories = [
	{
		name: "alp",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09193705.jpg",
	},
	{
		name: "bubble",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09229709.jpg",
	},
	{
		name: "cliff, drop, drop-off",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09246464.jpg",
	},
	{
		name: "coral reef",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09256479.jpg",
	},
	{
		name: "geyser",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09288635.jpg",
	},
	{
		name: "lakeside, lakeshore",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09332890.jpg",
	},
	{
		name: "promontory, headland, head, foreland",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09399592.jpg",
	},
	{
		name: "sandbar, sand bar",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09421951.jpg",
	},
	{
		name: "seashore, coast, seacoast, sea-coast",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09428293.jpg",
	},
	{
		name: "valley, vale",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09468604.jpg",
	},
	{
		name: "volcano",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09472597.jpg",
	},
	{
		name: "ballplayer, baseball player",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n09835506.jpg",
	},
	{
		name: "groom, bridegroom",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n10148035.jpg",
	},
	{
		name: "scuba diver",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n10565667.jpg",
	},
	{
		name: "rapeseed",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n11879895.jpg",
	},
	{
		name: "daisy",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n11939491.jpg",
	},
	{
		name: "yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n12057211.jpg",
	},
	{
		name: "acorn",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n12267677.jpg",
	},
	{
		name: "hip, rose hip, rosehip",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n12620546.jpg",
	},
	{
		name: "buckeye, horse chestnut, conker",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n12768682.jpg",
	},
	{
		name: "coral fungus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n12985857.jpg",
	},
	{
		name: "agaric",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n12998815.jpg",
	},
	{
		name: "gyromitra",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n13037406.jpg",
	},
	{
		name: "stinkhorn, carrion fungus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n13040303.jpg",
	},
	{
		name: "earthstar",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n13044778.jpg",
	},
	{
		name: "hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n13052670.jpg",
	},
	{
		name: "bolete",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n13054560.jpg",
	},
	{
		name: "ear, spike, capitulum",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n13133613.jpg",
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
	const cardRect = event.currentTarget.getBoundingClientRect();
	const scrollTop = window.scrollY;
	document.getElementById("popupImage").src = image;
	document.getElementById("popupText").textContent = name;
	popup.classList.remove("hidden");
	const popupTop = cardRect.top + scrollTop;
	popup.style.top = `${popupTop}px`;
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

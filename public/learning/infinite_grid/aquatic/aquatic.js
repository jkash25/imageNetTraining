const categories = [
	{
		name: "tench, Tinca tinca",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01440764.jpg",
	},
	{
		name: "goldfish, Carassius auratus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01443537.jpg",
	},
	{
		name: "great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01484850.jpg",
	},
	{
		name: "tiger shark, Galeocerdo cuvieri",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01491361.jpg",
	},
	{
		name: "hammerhead, hammerhead shark",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01494475.jpg",
	},
	{
		name: "electric ray, crampfish, numbfish, torpedo",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01496331.jpg",
	},
	{
		name: "stingray",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01498041.jpg",
	},
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
		name: "jellyfish",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01910747.jpg",
	},
	{
		name: "sea anemone, anemone",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01914609.jpg",
	},
	{
		name: "brain coral",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01917289.jpg",
	},
	{
		name: "conch",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01943899.jpg",
	},
	{
		name: "snail",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01944390.jpg",
	},
	{
		name: "sea slug, nudibranch",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01950731.jpg",
	},
	{
		name: "chiton, coat-of-mail shell, sea cradle, polyplacophore",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01955084.jpg",
	},
	{
		name: "chambered nautilus, pearly nautilus, nautilus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01968897.jpg",
	},
	{
		name: "Dungeness crab, Cancer magister",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01978287.jpg",
	},
	{
		name: "rock crab, Cancer irroratus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01978455.jpg",
	},
	{
		name: "fiddler crab",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01980166.jpg",
	},
	{
		name: "king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01981276.jpg",
	},
	{
		name: "American lobster, Northern lobster, Maine lobster, Homarus americanus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01983481.jpg",
	},
	{
		name: "spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01984695.jpg",
	},
	{
		name: "crayfish, crawfish, crawdad, crawdaddy",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01985128.jpg",
	},
	{
		name: "hermit crab",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01986214.jpg",
	},
	{
		name: "isopod",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n01990800.jpg",
	},
	{
		name: "grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02066245.jpg",
	},
	{
		name: "killer whale, killer, orca, grampus, sea wolf, Orcinus orca",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02071294.jpg",
	},
	{
		name: "dugong, Dugong dugon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02074367.jpg",
	},
	{
		name: "sea lion",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02077923.jpg",
	},
	{
		name: "starfish, sea star",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02317335.jpg",
	},
	{
		name: "sea urchin",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02319095.jpg",
	},
	{
		name: "sea cucumber, holothurian",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02321529.jpg",
	},
	{
		name: "barracouta, snoek",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02514041.jpg",
	},
	{
		name: "eel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02526121.jpg",
	},
	{
		name: "coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02536864.jpg",
	},
	{
		name: "rock beauty, Holocanthus tricolor",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02606052.jpg",
	},
	{
		name: "anemone fish",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02607072.jpg",
	},
	{
		name: "sturgeon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02640242.jpg",
	},
	{
		name: "gar, garfish, garpike, billfish, Lepisosteus osseus",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02641379.jpg",
	},
	{
		name: "lionfish",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02643566.jpg",
	},
	{
		name: "puffer, pufferfish, blowfish, globefish",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02655020.jpg",
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

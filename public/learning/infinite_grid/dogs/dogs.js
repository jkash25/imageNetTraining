const categories = [
	{
		name: "Chihuahua",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02085620.jpg",
	},
	{
		name: "Japanese spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02085782.jpg",
	},
	{
		name: "Maltese dog, Maltese terrier, Maltese",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02085936.jpg",
	},
	{
		name: "Pekinese, Pekingese, Peke",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086079.jpg",
	},
	{
		name: "Shih-Tzu",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086240.jpg",
	},
	{
		name: "Blenheim spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086646.jpg",
	},
	{
		name: "papillon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02086910.jpg",
	},
	{
		name: "toy terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02087046.jpg",
	},
	{
		name: "Rhodesian ridgeback",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02087394.jpg",
	},
	{
		name: "Afghan hound, Afghan",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088094.jpg",
	},
	{
		name: "basset, basset hound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088238.jpg",
	},
	{
		name: "beagle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088364.jpg",
	},
	{
		name: "bloodhound, sleuthhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088466.jpg",
	},
	{
		name: "bluetick",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02088632.jpg",
	},
	{
		name: "black-and-tan coonhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02089078.jpg",
	},
	{
		name: "Walker hound, Walker foxhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02089867.jpg",
	},
	{
		name: "English foxhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02089973.jpg",
	},
	{
		name: "redbone",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02090379.jpg",
	},
	{
		name: "borzoi, Russian wolfhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02090622.jpg",
	},
	{
		name: "Irish wolfhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02090721.jpg",
	},
	{
		name: "Italian greyhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091032.jpg",
	},
	{
		name: "whippet",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091134.jpg",
	},
	{
		name: "Ibizan hound, Ibizan Podenco",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091244.jpg",
	},
	{
		name: "Norwegian elkhound, elkhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091467.jpg",
	},
	{
		name: "otterhound, otter hound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091635.jpg",
	},
	{
		name: "Saluki, gazelle hound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02091831.jpg",
	},
	{
		name: "Scottish deerhound, deerhound",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02092002.jpg",
	},
	{
		name: "Weimaraner",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02092339.jpg",
	},
	{
		name: "Staffordshire bullterrier, Staffordshire bull terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093256.jpg",
	},
	{
		name: "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093428.jpg",
	},
	{
		name: "Bedlington terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093647.jpg",
	},
	{
		name: "Border terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093754.jpg",
	},
	{
		name: "Kerry blue terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093859.jpg",
	},
	{
		name: "Irish terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02093991.jpg",
	},
	{
		name: "Norfolk terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02094114.jpg",
	},
	{
		name: "Norwich terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02094258.jpg",
	},
	{
		name: "Yorkshire terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02094433.jpg",
	},
	{
		name: "wire-haired fox terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02095314.jpg",
	},
	{
		name: "Lakeland terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02095570.jpg",
	},
	{
		name: "Sealyham terrier, Sealyham",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02095889.jpg",
	},
	{
		name: "Airedale, Airedale terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096051.jpg",
	},
	{
		name: "cairn, cairn terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096177.jpg",
	},
	{
		name: "Australian terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096294.jpg",
	},
	{
		name: "Dandie Dinmont, Dandie Dinmont terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096437.jpg",
	},
	{
		name: "Boston bull, Boston terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02096585.jpg",
	},
	{
		name: "miniature schnauzer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097047.jpg",
	},
	{
		name: "giant schnauzer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097130.jpg",
	},
	{
		name: "standard schnauzer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097209.jpg",
	},
	{
		name: "Scotch terrier, Scottish terrier, Scottie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097298.jpg",
	},
	{
		name: "Tibetan terrier, chrysanthemum dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097474.jpg",
	},
	{
		name: "silky terrier, Sydney silky",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02097658.jpg",
	},
	{
		name: "soft-coated wheaten terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02098105.jpg",
	},
	{
		name: "West Highland white terrier",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02098286.jpg",
	},
	{
		name: "Lhasa, Lhasa apso",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02098413.jpg",
	},
	{
		name: "flat-coated retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099267.jpg",
	},
	{
		name: "curly-coated retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099429.jpg",
	},
	{
		name: "golden retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099601.jpg",
	},
	{
		name: "Labrador retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099712.jpg",
	},
	{
		name: "Chesapeake Bay retriever",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02099849.jpg",
	},
	{
		name: "German short-haired pointer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100236.jpg",
	},
	{
		name: "vizsla, Hungarian pointer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100583.jpg",
	},
	{
		name: "English setter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100735.jpg",
	},
	{
		name: "Irish setter, red setter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02100877.jpg",
	},
	{
		name: "Gordon setter",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02101006.jpg",
	},
	{
		name: "Brittany spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02101388.jpg",
	},
	{
		name: "clumber, clumber spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02101556.jpg",
	},
	{
		name: "English springer, English springer spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102040.jpg",
	},
	{
		name: "Welsh springer spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102177.jpg",
	},
	{
		name: "cocker spaniel, English cocker spaniel, cocker",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102318.jpg",
	},
	{
		name: "Sussex spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102480.jpg",
	},
	{
		name: "Irish water spaniel",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02102973.jpg",
	},
	{
		name: "kuvasz",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02104029.jpg",
	},
	{
		name: "schipperke",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02104365.jpg",
	},
	{
		name: "groenendael",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105056.jpg",
	},
	{
		name: "malinois",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105162.jpg",
	},
	{
		name: "briard",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105251.jpg",
	},
	{
		name: "kelpie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105412.jpg",
	},
	{
		name: "komondor",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105505.jpg",
	},
	{
		name: "Old English sheepdog, bobtail",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105641.jpg",
	},
	{
		name: "Shetland sheepdog, Shetland sheep dog, Shetland",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02105855.jpg",
	},
	{
		name: "collie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106030.jpg",
	},
	{
		name: "Border collie",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106166.jpg",
	},
	{
		name: "Bouvier des Flandres, Bouviers des Flandres",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106382.jpg",
	},
	{
		name: "Rottweiler",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106550.jpg",
	},
	{
		name: "German shepherd, German shepherd dog, German police dog, alsatian",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02106662.jpg",
	},
	{
		name: "Doberman, Doberman pinscher",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107142.jpg",
	},
	{
		name: "miniature pinscher",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107312.jpg",
	},
	{
		name: "Greater Swiss Mountain dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107574.jpg",
	},
	{
		name: "Bernese mountain dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107683.jpg",
	},
	{
		name: "Appenzeller",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02107908.jpg",
	},
	{
		name: "EntleBucher",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108000.jpg",
	},
	{
		name: "boxer",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108089.jpg",
	},
	{
		name: "bull mastiff",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108422.jpg",
	},
	{
		name: "Tibetan mastiff",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108551.jpg",
	},
	{
		name: "French bulldog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02108915.jpg",
	},
	{
		name: "Great Dane",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02109047.jpg",
	},
	{
		name: "Saint Bernard, St Bernard",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02109525.jpg",
	},
	{
		name: "Eskimo dog, husky",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02109961.jpg",
	},
	{
		name: "malamute, malemute, Alaskan malamute",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110063.jpg",
	},
	{
		name: "Siberian husky",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110185.jpg",
	},
	{
		name: "dalmatian, coach dog, carriage dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110341.jpg",
	},
	{
		name: "affenpinscher, monkey pinscher, monkey dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110627.jpg",
	},
	{
		name: "basenji",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110806.jpg",
	},
	{
		name: "pug, pug-dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02110958.jpg",
	},
	{
		name: "Leonberg",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111129.jpg",
	},
	{
		name: "Newfoundland, Newfoundland dog",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111277.jpg",
	},
	{
		name: "Great Pyrenees",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111500.jpg",
	},
	{
		name: "Samoyed, Samoyede",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02111889.jpg",
	},
	{
		name: "Pomeranian",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112018.jpg",
	},
	{
		name: "chow, chow chow",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112137.jpg",
	},
	{
		name: "keeshond",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112350.jpg",
	},
	{
		name: "Brabancon griffon",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02112706.jpg",
	},
	{
		name: "Pembroke, Pembroke Welsh corgi",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113023.jpg",
	},
	{
		name: "Cardigan, Cardigan Welsh corgi",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113186.jpg",
	},
	{
		name: "toy poodle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113624.jpg",
	},
	{
		name: "miniature poodle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113712.jpg",
	},
	{
		name: "standard poodle",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113799.jpg",
	},
	{
		name: "Mexican hairless",
		image:
			"https://validationimages.s3.us-east-1.amazonaws.com/grids/n02113978.jpg",
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

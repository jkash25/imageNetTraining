let currentCategory = null; 
let numCorrect = 0;
let numGuesses = 0;
let numWrong = 0;



document.getElementById('clickMe').addEventListener('click', async () => {
    try {
        const response = await fetch(`/get-random-bird-url`);
        const data = await response.json();

        if (data.imageUrl) {
            const imageUrl = data.imageUrl;
            console.log("This is the image URL passed into get category: " + data.imageUrl);

            const categoryData = await fetch(`/get-image-category?imageUrl=${imageUrl}`);
            const category = await categoryData.json();
            currentCategory = category.imageCategory; // Update the current category
            console.log("Category data: " + category.imageCategory);

            const imgElement = document.createElement('img');
            imgElement.src = data.imageUrl;
            imgElement.alt = 'Random Image';
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = 'auto';

            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = ''; 
            imageContainer.appendChild(imgElement);
        } else {
            console.error('No image URL returned');
        }
    } catch (error) {
        console.error('Error fetching random image: ' + error);
    }
});

(async () => {
    // Fetch categories only once
    const c = await fetch(`/get-categories`);
    const categories = await c.json();

    const searchInput = document.getElementById('category-search');
    const categoryList = document.getElementById('category-list');
    const searchButton = document.getElementById('search-button');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        categoryList.innerHTML = ''; // Clear previous results

        if (query) {
            const filteredCategories = categories.filter(category =>
                category.toLowerCase().includes(query)
            );

            if (filteredCategories.length > 0) {
                categoryList.classList.remove('hidden');
                filteredCategories.forEach(category => {
                    const li = document.createElement('li');
                    li.textContent = category;
                    li.addEventListener('click', () => {
                        searchInput.value = category;
                        categoryList.classList.add('hidden');
                    });
                    categoryList.appendChild(li);
                });
            } else {
                categoryList.classList.add('hidden');
            }
        } else {
            categoryList.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !categoryList.contains(e.target)) {
            categoryList.classList.add('hidden');
        }
    });

    searchButton.addEventListener('click', () => {
        const selectedCategory = searchInput.value.trim();
        if (!currentCategory) {
            alert("No image loaded. Please click the button to load an image.");
            return;
        }
        if (selectedCategory === currentCategory) {
            console.log("You selected correctly!: " + selectedCategory);
            numCorrect++;
            numGuesses++;
            console.log("Number of correct: " + numCorrect);
        } else {
            numWrong++;
            numGuesses++;
            console.log(`You selected ${selectedCategory} but the answer was ${currentCategory}!`);
        }
        updateStats();
    });
})();

function updateStats() {
    document.getElementById("correctCount").textContent = numCorrect;
    document.getElementById("totalGuesses").textContent = numGuesses;
    document.getElementById("wrongCount").textContent = numWrong;
}
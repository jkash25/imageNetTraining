let currentCategory = null; 
let numCorrect = 0;
let numGuesses = 0;
let numWrong = 0;







function updateStats() {
    document.getElementById("correctCount").textContent = numCorrect;
    document.getElementById("totalGuesses").textContent = numGuesses;
    document.getElementById("wrongCount").textContent = numWrong;
}
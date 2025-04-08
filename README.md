# 🌐 ImageNet Training

## 🧠 ImageNet Human Training & Testing Tool

### 📋 Overview 
This project is a web-based tool designed to train and test human subjects on the ImageNet dataset, with the goal of improving human object recognition benchmarks. The website provides an interactive way for users to guess the labels of randomly selected images and track their progress.

### 🚀 Live Demo
Check out the deployed site here:  
🔗 **[ImageNet Training Website](https://imagenettraining.onrender.com)** 

### Features 
1. Main Image Labeling Page Displays a random image from the ImageNet dataset. Users input their guess into a search box. Tracks user statistics: correct, incorrect, and total guesses. If incorrect, users can reveal: The correct answer. A "grid image" (5x5 grid of 25 example images) to help with recognition. Displays a "current guess" feature showing a grid image of the guessed category. 
2. Specialized Training Sections Bird Training: Focused practice for bird species, known for their visual similarity. Dog Training: Dedicated training section for differentiating dog breeds. 
3. Learning Pages Users can browse and study all categories in a structured manner. Each category has a "card" displaying its label and a grid image. Hovering over a card zooms in on the image for better detail. Additional learning pages for specific subsections of ImageNet: Mammals Dogs Aquatic Animals Birds Amphibians/Reptiles Food Objects Miscellaneous 
### Technologies Used 
- Frontend: HTML, CSS
- Backend: Node.js with Express
- Dataset: ImageNet 

## How It Works 
Visit the main page to start labeling images. Enter a guess in the search box. Check results, view the correct answer, and study using the grid image. Use specialized training sections for birds and dogs. Explore learning pages to study ImageNet categories.


## Usage
To run the project locally: 
1. Clone the repository
```bash
git clone https://github.com/yourusername/imageNetTraining
```
2. Navigate to the project directory
```bash
cd imageNetTraining
```
3. Install dependencies
```bash
npm install
```
4. Run the server
```bash
node app.js
```
5. Open your browswer and go to http://localhost:3000

## Feel free to contribute, open issues, and suggest improvements!

### Contact: jaitkash@gmail.com or jkashyap3@gatech.edu

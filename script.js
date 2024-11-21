// script.js

const grid = document.getElementById("grid");
const inputPopup = document.getElementById("input-popup");
const inputText = document.getElementById("input-text");

let currentCell = null; // To keep track of the cell being edited

// Predefined categories
const categories = [
  "Joke", "Anime", "Vtuber", "Game", "Business", "Music", "Science", "Math", "Drawing", "???"
];

// Initialize an empty grid with empty strings for each question
const gameGrid = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]
];

// Create the grid with categories and empty question spots
function createGrid() {
  // Create categories in the first row (static categories)
  for (let col = 0; col < 10; col++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerText = categories[col];  // Pre-set category names
    gridItem.onclick = () => handleCategoryClick(col);
    grid.appendChild(gridItem);
  }

  // Create game grid with $100 to $1000 values
  for (let row = 1; row < 11; row++) {
    for (let col = 0; col < 10; col++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      const score = row * 100; // Score increases from 100 to 1000
      gridItem.innerText = `$${score}`;
      gridItem.onclick = () => handleCellClick(row, col, gridItem, score);
      grid.appendChild(gridItem);
    }
  }
}

// Handle clicking a category (optional feature)
function handleCategoryClick(col) {
  alert(`Category: ${categories[col]}`);
}

// Handle clicking a dollar cell to input the question/answer
function handleCellClick(row, col, gridItem, score) {
  if (gridItem.classList.contains("clicked")) {
    return; // Prevent multiple clicks on the same cell
  }
  gridItem.classList.add("clicked");

  // Show the popup to input a question or answer
  currentCell = { row, col, gridItem, score };
  openPopup();
}

// Open the popup for entering a question/answer
function openPopup() {
  inputPopup.style.display = "block";
  inputText.value = gameGrid[currentCell.row][currentCell.col] || ""; // Set default to empty string or previous value
  inputText.focus(); // Focus on the input area
}

// Close the popup
function closePopup() {
  inputPopup.style.display = "none"; // Close the popup
}

// Submit the question/answer
function submitAnswer() {
  const text = inputText.value;
  if (text.trim()) {
    // Store the answer/question in the grid (update the gameGrid array)
    gameGrid[currentCell.row][currentCell.col] = text;
    currentCell.gridItem.innerText = text;  // Update the cell with the input
  }
  closePopup();
}

createGrid();

// script.js

const grid = document.getElementById("grid");
const inputPopup = document.getElementById("input-popup");
const inputText = document.getElementById("input-text");

let currentCell = null; // To keep track of the cell being edited

// Sample data for categories (you can modify this as needed)
const categories = [
  "Joke", "Anime", "Vtuber", "Game", "Business", "Music", "Science", "Math", "Drawing", "???" 
];

function createGrid() {
  // Create categories in the first row
  for (let col = 0; col < 10; col++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerText = categories[col] || "Category " + (col + 1);  // Default category name
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

function handleCategoryClick(col) {
  // Ask the user to input a category for this column
  const category = prompt("Enter a category for this column:");
  if (category) {
    categories[col] = category;
    createGrid(); // Re-create the grid to update the category
  }
}

function handleCellClick(row, col, gridItem, score) {
  if (gridItem.classList.contains("clicked")) {
    return; // Prevent multiple clicks on the same cell
  }
  gridItem.classList.add("clicked");

  // Show the popup to input a question or answer
  currentCell = { row, col, gridItem, score };
  openPopup();
}

function openPopup() {
  inputPopup.style.display = "block";
  inputText.value = ""; // Clear any previous input
  inputText.focus(); // Focus on the input area
}

function closePopup() {
  inputPopup.style.display = "none"; // Close the popup
}

function submitAnswer() {
  const text = inputText.value;
  if (text.trim()) {
    // Store the answer/question (for now, just change the cell text)
    currentCell.gridItem.innerText = text;
  }
  closePopup();
}

createGrid();

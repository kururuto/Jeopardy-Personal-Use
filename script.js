// script.js

const grid = document.getElementById("grid");

// Sample question and answer data for the grid (you can customize this)
const data = [
  ["What is 2+2?", "What is the capital of France?", "Who wrote 'Romeo and Juliet'?", "What is the speed of light?", "What is the tallest mountain?", "What is the square root of 16?", "Who was the first President of the U.S.?", "What is the chemical symbol for water?", "What is the currency of Japan?", "What is the largest planet in our solar system?"],
  ["What is 5+3?", "What is the capital of Japan?", "Who painted the Mona Lisa?", "What is the chemical symbol for gold?", "What is the longest river in the world?", "What is the square of 9?", "Who wrote '1984'?", "What is the largest ocean?", "What is the smallest country in the world?", "What is the distance between Earth and the Sun?"],
  // Add more rows as needed
  // ... up to 10 rows
];

function createGrid() {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.innerText = `$${(row + 1) * (col + 1) * 100}`;  // Displaying dollar values as placeholders for each cell
      gridItem.onclick = () => handleClick(row, col, gridItem);
      grid.appendChild(gridItem);
    }
  }
}

function handleClick(row, col, gridItem) {
  if (gridItem.classList.contains("clicked")) {
    return;  // Prevent multiple clicks
  }
  gridItem.classList.add("clicked");
  gridItem.innerText = data[row][col] || "No question";  // Show the question/answer
}

createGrid();

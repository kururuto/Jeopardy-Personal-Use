// JavaScript code to generate the Jeopardy board
const categories = [
    "Joke", "Anime", "Vtuber", "Game", 
    "Business", "Music", "Science", "Math", 
    "Drawing", "???"
];
const values = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const board = document.getElementById('board');

// Generate categories
categories.forEach(category => {
    const headerCell = document.createElement('div');
    headerCell.className = 'cell header';
    headerCell.innerText = category;
    board.appendChild(headerCell);
});

// Generate value cells in column-wise order
for (let i = 0; i < values.length; i++) {
    categories.forEach(category => {
        const valueCell = document.createElement('div');
        valueCell.className = 'cell';
        valueCell.innerText = `$${values[i]}`;
        valueCell.addEventListener('click', () => {
            alert(`You selected ${category} for $${values[i]}!`);
        });
        board.appendChild(valueCell);
    });
}

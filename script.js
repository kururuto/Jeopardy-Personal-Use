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

// Generate value cells
for (let i = 0; i < categories.length; i++) {
    values.forEach(value => {
        const valueCell = document.createElement('div');
        valueCell.className = 'cell';
        valueCell.innerText = `$${value}`;
        valueCell.addEventListener('click', () => {
            alert(`You selected ${categories[i]} for $${value}!`);
        });
        board.appendChild(valueCell);
    });
}

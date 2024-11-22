// JavaScript code to generate the Jeopardy board
const categories = [
    "Joke", "Anime", "Vtuber", "Game", 
    "Business", "Music", "Science", "Math", 
    "Drawing", "???"
];

const values = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// 2D array mapping categories and values to their respective questions
const questions = [
    [                                
        "Make a cat noise", 
        "Hold your breath for 10 seconds ", 
        "Do An Impressions of Any Character / Person", 
        "Communicate Only By Making Animal Noises for Next 10 Minutes (Fail = No Points)",
        "Speak Like You’re Underwater for Next 10 Minutes (Fail = No Points)",
        "Speak With Nya at The End of Every Sentence for 30 Minutes (Fail = No Points)",
        "",
        "",
        "",
        "Pretend You're Invisible For 30 Minutes (Fail = No Points)"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ], [
        "Who created Naruto?",
        "What is the longest-running anime?",
        "What is the tallest mountain?",
        "Who won the 2020 Best Picture Oscar?",
        "What is 2+2?",
        "Who is the lead singer of The Beatles?",
        "What is the chemical symbol for water?",
        "What is the speed of light?",
        "Who wrote the Mona Lisa?",
        "What is the largest planet in our solar system?"
    ]
];

// Create a question map for every category and value
const board = document.getElementById('board');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

const popup = document.createElement('div');
popup.className = 'popup';
document.body.appendChild(popup);

// Generate categories as the header row
categories.forEach(category => {
    const headerCell = document.createElement('div');
    headerCell.className = 'cell header';
    headerCell.innerText = category;
    board.appendChild(headerCell);
});

// Generate value cells in a top-to-bottom pattern
values.forEach((value, rowIndex) => {
    categories.forEach((category, colIndex) => {
        const valueCell = document.createElement('div');
        valueCell.className = 'cell';
        valueCell.innerText = `$${value}`;
        valueCell.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent any unwanted navigation
            const question = questions[colIndex][rowIndex]; // Get the correct question based on category and value
            showPopup(value, question); // Display the question in the popup
        });
        board.appendChild(valueCell);
    });
});

// Function to show the popup
function showPopup(value, question) {
    popup.innerHTML = `
        <h2>Question for $${value}</h2>
        <p>${question}</p>
        <button onclick="closePopup()">Close</button>
    `;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

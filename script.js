// 1. Our collection of quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Make each day your masterpiece.", author: "John Wooden" },
    { text: "Intelligence is the ability to adapt to change.", author: "Stephen Hawking" }
];

// 2. Grabbing the elements from our HTML
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// 3. Function to pick a random quote and show it on the screen
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteText.innerText = `"${randomQuote.text}"`;
    quoteAuthor.innerText = `- ${randomQuote.author}`;
}

// 4. Run the function when clicking the button, and also right when the app opens
newQuoteBtn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
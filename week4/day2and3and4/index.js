let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// Local array fallback
const fallbackQuotes = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
  { quote: "Do what you can, with what you have, where you are.", person: "Theodore Roosevelt" },
  { quote: "It always seems impossible until it’s done.", person: "Nelson Mandela" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" }
];

// Function to show a random quote from local array
function showFallbackQuote() {
  const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
  quote.innerText = fallbackQuotes[randomIndex].quote;
  person.innerText = fallbackQuotes[randomIndex].person;
}

// Function to fetch a quote from API
async function getQuote() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    // Use API data if it works
    quote.innerText = data[0].q;
    person.innerText = data[0].a;
  } catch (error) {
    console.warn("API failed, using fallback quotes.", error);
    showFallbackQuote(); // fallback if API fails
  }
}

// Show a quote when page loads
getQuote();

// Show a new quote when button is clicked
btn.addEventListener("click", getQuote);

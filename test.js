arr = [
    {
        quote: "Imagination is more important than knowledge.",
        name: "Albert, Einstein - German theoretical physicist (1879-1955)",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop."
        ,
        name: "Confucius - Chinese philosopher, politician and statesman (551 BC l-479 BC)"
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them."
        ,
        name: "Walt Disney - American filmmaker (1901-1966)"
    },
    {
        quote: "I never dreamed about success, I worked for it."
        ,
        name: "Estée Lauder - American founder of the cosmetic company (1908-2004)"
    },
    {
        quote: "Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."
        ,
        name: "Avul Pacir Zainulabidin Abdul Kalam - Atomic Scientist and President of India (1931-2015)"
    },
    {
        quote: "There is nothing more powerful in the world than the idea that came in time."
        ,
        name: "Victor Hugo - French poet, prose writer, dramatist, essayist and politician (1802-1855)"
    },
]
const body = document.querySelector("body");
const button = document.querySelector(".button");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

button.addEventListener("click", displayquote);

function displayquote() {
    var random = Math.floor(Math.random() * arr.length);
    console.log(random);
    quote.textContent=arr[random].quote;
    author.textContent=arr[random].name;
    
}

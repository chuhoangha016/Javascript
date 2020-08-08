let quote = document.getElementsByTagName("h2")[0]
let author = document.getElementsByTagName("p")[0]

let quotes = [
    ["This is a quote", "Author"],
    ["You are reading this", "Brain"],
    ["Random letters", "Browser"],
    ["White background, black quotes", "You"],
    ["Button clicked", "Dev"],
    ["I'm watching you", "Dev"],
    ["Stop reloading this page and get a life", "Dev"],
    ["Why am I doing this", "You"]
]

function refresh() {
    val = rand()
    quote.textContent = quotes[val][0]
    author.textContent = quotes[val][1]
}

function rand() {
    return (Math.floor(Math.random() * quotes.length))
}
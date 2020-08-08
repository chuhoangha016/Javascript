let name = "ditto"
const url = "https://pokeapi.co/api/v2/pokemon/" + String(name)

let quote = document.getElementsByTagName("h2")[0]
let author = document.getElementsByTagName("p")[0]

// async function loadPokemon () {
//     connection = await fetch(url)
//     data = await connection.json()
//     lib = data["game_indices"]
//     console.log(lib)
//     return lib
// }

axios.get(url).then(function (response) {
    data = response["data"]
    console.log(data)
})
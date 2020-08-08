//1.1
//let obj = {}

//1.2
//let obj = {"key":"value"}

//1.3
//let obj = {
//    "key":"value",
//    "key2":"value2"
//}

//1.4
let Poke = {
    "Name":"Pikachu",
    "Type":"Electric",
    "Desc":"Most popular"
}

//1.5
let ques1 = {
    "ask":"1+1",
    1:0,
    2:1,
    3:2,
    4:3,
    "cor":3
}
//console.log(ques1)

////

//2.1 -> 2.3   Object từ 1.4

//2.2
//console.log(Poke["Name"])

//2.3
//console.log(Poke[prompt("Key")])

//2.4   Object từ 1.5
//console.log(ques1[prompt("Ans no")])

////

//3.1 -> 3.3   Object từ 1.4

//3.2
//Poke["Name"] = "Pika"

//3.3
Poke["Desc"] = prompt("New desc")
console.log(Poke)

//3.4   Object từ 1.5
ques1[1]=prompt("New ans no 1")
console.log(ques1[1])
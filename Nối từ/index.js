url = "https://ada48db0-94ea-46f5-bcd6-03bad4eed780.mock.pstmn.io/"
var api = []

let curWord = document.getElementById("currentWordEle")
let input = document.getElementById("inputEle")
let loader = document.getElementsByClassName("loader")[0]
let countdownNumber = document.getElementById("countdown-number")
let countdownContainer = document.getElementById("countdown")
let circle = document.getElementsByTagName("circle")[0]
var time = 10;
var usedWords = []
var eligibleWords = []
var plaWord
var first
var last
var interval

axios.get(url).then(function (response) {
    data = response["data"]
    api = data
    input.disabled = false
})

function load() {
    input.disabled = true
    plaWord = input.value.toLowerCase()
    input.value = ""
    if (!api.includes(plaWord)) {
        console.log(1)
        input.style.backgroundColor = "red"
        inputReset()
        return
    }
    if (usedWords.includes(plaWord)) {
        console.log(2)
        input.style.backgroundColor = "red"
        inputReset()
        return
    }
    if (last != null) {
        if (plaWord.split(" ")[0] != last) {
            console.log(3)
            input.style.backgroundColor = "red"
            inputReset()
            return
        }
    }

    circle.style.animationPlayState = "paused"
    countdownContainer.style.display = "none"
    if (interval != null) { clearInterval(interval) }
    time = 10

    input.style.backgroundColor = "white"

    loader.style.display = "inline"
    loader.style.animationPlayState = "running"

    setTimeout(function () {
        loader.style.animationPlayState = "paused"
        loader.style.display = "none"
        process()
    }, rand(1500,2500))

}

function process() {
    usedWords.push(plaWord)
    plaWordSplit = plaWord.split(" ")
    last = plaWordSplit[plaWordSplit.length - 1]
    eligibleWords = searchWord(last)
    if (eligibleWords.length > 0) {
        if (eligibleWords.length == 1) {
            comWord = eligibleWords[0]
        }
        else {
            let KillWords = findKill()
            if (KillWords.length > 0) {
                comWord = KillWords[rand(0,KillWords.length-1)]
            }
            else {
                comWord = eligibleWords[rand(0,eligibleWords.length-1)]
            }
        }
        usedWords.push(comWord)
        curWord.textContent = comWord
        comWordSplit = comWord.split(" ")
        last = comWordSplit[comWordSplit.length - 1]


        console.log("Com choices: ",eligibleWords)
        console.log("Used: ",usedWords)
        plaEligibleWords = searchWord(comWord.split(" ")[comWord.split(" ").length-1])
        console.log("Your choices: ",plaEligibleWords)
        console.log("")
        
        inputReset()
        countdownNumber.textContent = time
        countdownContainer.style.display = "inline"
        circle.style.animationPlayState = "running"
        interval = setInterval(function () {
            time--
            if (time <= 0) {
                circle.style.animationPlayState = "paused"
                countdownContainer.style.display = "none"
                clearInterval(interval)
                curWord.textContent = "Computer wins"
                last = null
                usedWords = []
                input.style.backgroundColor = "white"
                inputReset()
                input.value = ""
            }
            countdownNumber.textContent = time
        }, 1000);
    }
    else {
        curWord.textContent = "You win"
        last = null
        usedWords = []
        inputReset()
    }
    //location.reload()
    eligibleWords = []

}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function searchWord(key) {
    var arr = []
    for (let i = 0; i < api.length; i++) {
        apiWordSplit = api[i].split(" ")
        first = apiWordSplit[0]
        if (key == first) {
            if (!usedWords.includes(api[i])) {
                arr.push(api[i])
            }
        }
    }
    return arr
}

function findKill() {
    var killWords = []
    for (let i = 0; i < eligibleWords.length; i++) {
        split = eligibleWords[i].split(" ")
        tempLast = split[split.length - 1]
        //console.log(tempLast)
        if (searchWord(tempLast).length == 0) {
            killWords.push(eligibleWords[i])
        }
    }
    //console.log(killWords)
    return killWords
}

function inputReset() {
    input.disabled = false
    input.focus()
}
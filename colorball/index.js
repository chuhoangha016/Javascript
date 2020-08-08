var rightBallNo
var score = 0

var ballContainerEle = document.getElementById("ballContainer")
var ballEles = ballContainerEle.getElementsByClassName("ball")
var scoreEle = document.getElementById("score")

function generate() {
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var rightColorStr = `rgb(${r}, ${g}, ${b})`

    var colorStrEle = document.getElementById("colorStr")
    colorStrEle.textContent = rightColorStr

    rightBallNo = Math.floor(Math.random()*3)
    ballEles[rightBallNo].style.backgroundColor = rightColorStr

    for (var i=0; i<ballEles.length; i++) {
        var error1 = Math.random()*100+30
        var x = Math.floor(Math.random()*2)
        if (x==0) { error1 = -error1 }

        var error2 = Math.random()*100+30
        var x = Math.floor(Math.random()*2)
        if (x==0) { error2 = -error2 }

        var error3 = Math.random()*100+30
        var x = Math.floor(Math.random()*2)
        if (x==0) { error3 = -error3 }

        if (i!=rightBallNo) {
            ballEles[i].style.backgroundColor = `rgb(${r+error1}, ${g+error2}, ${b+error3})`
        }
    }
}

function eventsHandling() {
    for (var i=0; i<ballEles.length; i++) {
        ballEles[i].addEventListener("click",function(e){
            var ball = e.target
            var ballNo = ball.getAttribute("no")
            if (ballNo==rightBallNo) {score++}
            else {score--}
            scoreEle.textContent = `SCORE: ${score}`
            generate()
        })
    }
}

generate()
eventsHandling()
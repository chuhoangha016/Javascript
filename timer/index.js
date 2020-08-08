time = document.getElementsByTagName("p")[0]
input = document.getElementsByTagName("input")[0]
val = 0

function start() {
    if (typeof count !== 'undefined') {
        clearInterval(count)
    }
    val = Number(input.value)
    if (val<=0) {
        time.textContent = "Time's up"
        return
    }
    time.textContent = String(val)
    count = setInterval(minus,1000)
    console.log(typeof count)
    console.log(count)
}

function stop() {
    clearInterval(count)
    time.textContent = "Time's up"
    console.log(count)
}

function minus() {
    val = val - 1
    if (val==0) {
        stop()
        return
    }
    time.textContent = String(val)
}


num = document.getElementsByTagName("span")[0]
val = 0
function plus() {
    val = val + 1
    num.textContent = String(val)
}
function minus() {
    val = val - 1
    num.textContent = String(val)
}
function rand() {
    val = Math.floor(Math.random() * 10)
    num.textContent = String(val)
    test = setInterval()
}


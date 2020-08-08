let text = document.getElementById("text");
let to = document.getElementById("to");
let be = document.getElementById("be");
size = window.getComputedStyle(text, null).getPropertyValue("font-size");

var a = size.replace("px", "");

to.addEventListener("click", function() {
    a ++
    console.log(a)
    text.style.fontSize = String(a) + "px"
});

be.addEventListener("click", function() {
    a --
    console.log(a)
    text.style.fontSize = String(a) + "px"
});

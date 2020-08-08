//1.1
let title = document.getElementById("title");
console.log(title);

//1.2
let txts = document.getElementsByClassName("text");
console.log(txts[0]);

//1.3
let h1s = document.getElementsByTagName("h1");
console.log(h1s[1]);

//----------

//2.1
let click = document.getElementsByTagName("div");
click[0].addEventListener("click", function() {
	console.log("User clicked");
});

//2.2
let inputs = document.getElementsByTagName("input");
inputs[0].addEventListener("keyup", function() {
	console.log("User keyuped");
});

//2.3
let hover = document.getElementById("hover");
hover.addEventListener("mouseover", function() {
	console.log("User mouseoverred");
});

//2.4
inputs[1].addEventListener("mousedown", function() {
	console.log(inputs[1]);
	console.log(inputs[1].value);
});

//2.5
document
	.getElementsByTagName("button")[0]
	.addEventListener("click", function() {
		alert(inputs[2].value);
	});

//----------

//3.1
let user_input = document.getElementById("user_input");
console.log(user_input);
user_input.addEventListener("keyup", function() {
	console.log(user_input.value);
});

//3.2
let heading1 = document.getElementById("heading1");
console.log(heading1);
heading1.style.fontSize = "small";
console.log(heading1.style.fontSize);

//----------

//4.1
let title4 = document.getElementById("title4");
console.log(title4.textContent);
title4.textContent = "Game started";

//4.2
let content = document.getElementById("content");
content.style.color = "blue";

//4.3
content.style.backgroundColor = "purple";

//4.4
let font20s = document.getElementsByClassName("font-20");
font20s[0].style.fontSize = "20px";
font20s[1].style.fontSize = "20px";

//----------

//Final.1 + Final.4 + Final.5
let search_bar = document.getElementById("search_bar");
let btn_search = document.getElementById("btn_search");
let copy_search = document.getElementById("copy_search");
btn_search.addEventListener("click", function() {
	console.log(search_bar.value);
	copy_search.textContent = search_bar.value;
	copy_search.style.color = search_bar.value;
	search_bar.value = "";
});

//Final.2 + Final.3
let btn_test = document.getElementById("btn_test");
let quote = document.getElementById("quote");
btn_test.addEventListener("click", function() {
	quote.style.color = "#556600";
	quote.textContent =
		"You are the source of my joy, the center of my world and the whole of my heart.";
	quote.style.fontSize = "30px";
});

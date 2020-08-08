//1.1.a
function sayHi() {
	alert("Hello");
}
// sayHi()

//1.1.b
function sayHiTo(name) {
	saying = "Hello " + name;
	alert(saying);
}
// sayHiTo("random person")

//1.1.c
//Hàm lấy từ 6.1.b

//-------------------

//1.2
let nums = [];

function enterNum() {
	num = Number(prompt("Enter number"));
	nums.push(num);
}

function sum() {
	alert(nums.reduce((a, b) => a + b, 0));
	nums = [];
}

//----------

//2.1
function calc(fir, sec, ope) {
	switch (ope) {
		case "+":
			alert(fir + sec);
			break;
		case "-":
			alert(fir - sec);
			break;
		case "*":
			alert(fir * sec);
			break;
		case "/":
			alert(fir / sec);
	}
}
//calc(2, 3, "+");

//2.2
function getEven(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			console.log(array[i]);
		}
	}
}
//getEven([1,-4,3,4,5,6,1110])

//2.3
function email(str) {
	var status = "is an email";
	pos1 = str.search("@");
	console.log(pos1);
	pos2 = str.search(/\./); //Có thể dùng  str.indexOf(".")  nhưng không dùng  str.search(".")
	console.log(pos2);
	if (pos1 <= 0) {
		status = "is not an email";
	}
	if (pos2 - pos1 <= 1) {
		status = "is not an email";
	}
	alert(status);
}
email("abc.");

//2.4
function intersect(x1, y1, w1, h1, x2, y2, w2, h2) {
	if (x1 <= x2 && y1 <= y2) {
		if (x1 + w1 >= x2 && y1 + h1 >= y2) {
			return true;
		}
	} else if (x1 <= x2 && y1 > y2) {
		if (x1 + w1 >= x2 && y2 + h2 >= y1) {
			return true;
		}
	} else if (x1 > x2 && y1 <= y2) {
		if (x2 + w2 >= x1 && y1 + h1 >= y2) {
			return true;
		}
	} else {
		if (x2 + w2 >= x1 && y2 + h2 >= y1) {
			return true;
		}
	}
	return false;
}
//alert(intersect(3, 3, 3, 3, 1, 1, 100, 1));

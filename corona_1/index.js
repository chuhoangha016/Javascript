//1
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let count = 1;
// const answer = getRndInteger(0, 100);
// guess = Number(prompt("Attempt 1"));
// while (guess != answer) {
// 	count++;
// 	if (guess > answer) {
// 		message = "Lower. Attempt " + String(count);
// 	} else if (guess < answer) {
// 		message = "Higher. Attempt " + String(count);
// 	}
// 	guess = Number(prompt(message));
// }
// document.getElementById("ans").textContent = "You got it at attempt " + String(count);

//2
// hocsinh = [{"Tên":"Nguyễn Văn Anh", "Lớp":"12A", "Môn ưa thích":"Toán"},
//             {"Tên":"Trần Thị Bình", "Lớp":"12B", "Môn ưa thích": "Thể dục"},
//             {"Tên":"Bùi Đình Công", "Lớp":"12C", "Môn ưa thích": "Tin học"},
//             {"Tên":"Phạm Lê Duy", "Lớp":"12D", "Môn ưa thích": "Ngữ Văn"},
//             {"Tên":"Đinh Thế Đức", "Lớp":"12D", "Môn ưa thích": "Hoá học"}]
// while (1==1){
//     let i=prompt("Chọn 1 người để xem thông tin:\n1. Nguyễn Văn Anh\n2. Trần Thị Bình\n3. Bùi Đình Công\n4. Phạm Lê Duy\n5. Đinh Thế Đức")
//     if (i==0) {break}
//     alert("Bạn "+hocsinh[i-1]["Tên"]+" học lớp "+hocsinh[i-1]["Lớp"]+" thích môn "+hocsinh[i-1]["Môn ưa thích"]+".")
// }

//3
function prime(num) {
    if (num==0 || num==1) { return false }
    for (let i=2; i<=Math.floor(num/2); i++) {
        if (num%i==0) { return false }
    }
    return true
}
document.getElementById("create").addEventListener("click", function() {
    let ints = []
    let intsDisplay = ""
    let prisDisplay = ""
    while (ints.length<10) {
        let rnd = getRndInteger(0,100)
        if (!ints.includes(rnd)) { 
            ints.push(rnd)
            intsDisplay = intsDisplay + String(rnd) + ","
            if (prime(rnd)) { 
                prisDisplay = prisDisplay + String(rnd) + ","
            } 
        }
    }
    intsDisplay = intsDisplay.slice(0,-1)
    prisDisplay = prisDisplay.slice(0,-1)
    document.getElementById("sobd").textContent = "Dãy ban đầu: " + intsDisplay
    document.getElementById("sont").textContent = "Dãy nguyên tố: " + prisDisplay
})

//4
let input = document.getElementById("input")
document.getElementById("enter").addEventListener("click", function() {
    let chars = String(input.value).split(",")
    let nums = []
    for (let i=0; i<chars.length; i++) {
        nums.push(Number(chars[i]))
    }
    document.getElementById("tbc").textContent = "Trung bình cộng: " + String(nums.reduce((a,b)=>a+b,0)/nums.length)
    document.getElementById("max").textContent = "Max: " + String(max(nums))
    document.getElementById("min").textContent = "Min: " + String(min(nums))
})
function max (arr) {
    let max = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>max) { max = arr[i] }
    }
    return(max)
}
function min (arr) {
    let min = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<min) { min = arr[i] }
    }
    return(min)
}
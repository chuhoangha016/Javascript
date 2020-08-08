//Conditional
// let a = Number(prompt("a="))
// let b = Number(prompt("b="))
// let c = Number(prompt("c="))

// let max = a
// if (max<b) { max = b }
// if (max<c) { max = c }
// alert(max)

//---------
//For loop
//1
// let eggs1 = 200
// for (let i=1; i<=15; i++) {
//     eggs1 = eggs1 - 4
//     console.log("Sau ngày",i,"còn", eggs1, "quả")
// }

//2
// for (let a=2; a<=26; a++) {
//     console.log(a*a)
// }

//3
// let eggs3 = 0
// for (let i=1; i<=15; i++) {
//     eggs3 = eggs3 + i
//     console.log("Sau ngày",i,"có", eggs3, "quả")
// }

//4
// let eggs4 = 5
// for (let i=1; i<=15; i++) {
//     eggs4 = eggs4 + i - 2
//     console.log("Sau ngày",i,"có", eggs4, "quả")
// }

//5
for (let i=1; i<=9; i++) {
    let log = ""
    for (let a=1; a<=i; a++) {
        log = log + String(i)
    }
    console.log(log)
}


// let students = [['noor', 80], ['lila', 77], ['mariam', 88], ['azop', 95], ['awrad', 68]];

// let Avgmarks = 0;

// for (let i=0; i < students.length; i++) {
// Avgmarks += students[i][1];
// let avg = (Avgmarks/students.length);//
// }

//  console.log("Average grade: " + (Avgmarks)/students.length);

//    if (avg < 60){
//     console.log("Grade : F");      
//   } 
// else if (avg < 70) {
//  console.log("Grade : D");
//              } 
// else if (avg < 80) 
// {
// console.log("Grade : C"); 
// } else if (avg < 90) {
// console.log("Grade : B"); 
// } else if (avg < 100) {
// console.log("Grade : A"); 
 
function calc(){
let a=parseInt(document.getElementById("value 1").value);
let b=parseInt(document.getElementById("value 2").value);
let op=document.getElementById("operator").value;

let calculate;


if (op =="add"){
    calculate = a + b;
} else if (op =="min"){
    calculate = a - b;
} else if (op =="div"){
    calculate = a / b;
}else if (op == "mul"){
    calculate = a * b;

}
console.log(calculate);
document.querySelector("result").innerHTML = calculate;
}
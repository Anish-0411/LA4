let arr = [];
// var n = parseInt(prompt("Enter numbers: "));
var n = 10;
let sum= 0;
for (let i=0;i<=n;i++){
    arr[i] = i;
    sum += arr[i];
}

console.log(sum)



var str = "hsina"
var revstr = ""
for(var i=str.length-1;i>=0;i--){
    revstr += str[i];
}

console.log(revstr)



function isPrime(n) {
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)
        if (n % i == 0)
        return false;

    return true;
}

for(var i=0;i<100;i++){
    if(isPrime(i)){
        console.log(i)
    }
}



function colorChange(){
    const colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    alert("Addition result: " + (num1 + num2));
}

function sub() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    alert("Subtraction result: " + (num1 - num2));
}

function mul() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    alert("Multiplication result: " + (num1 * num2));
}

function div() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        alert("Division result: " + (num1 / num2));
    } else {
        alert("Division by zero is not allowed.");
    }
}


function ageGroup(){
    const age = document.getElementById("age").value;
    if(age>=0 && age<=12){
        alert("You are a child");
    }
    else if(age>=13 && age<=19){
        alert("You are a teenager");
    }
    else if(age>=20 && age<=30){
        alert("You are a young adult");
    }
    else if(age>=31 && age<=55){
        alert("You are an adult");
    }
    else if(age>=55 && age<=100){
        alert("You are an senior citizen");
    }
    else{
        alert("Invalid age");
    }
}



function submitMarks(){
    const name = document.getElementById("name").value;
    const maths = parseFloat(document.getElementById("maths").value);
    const social = parseFloat(document.getElementById("social").value);
    const english = parseFloat(document.getElementById("english").value);
    const physics = parseFloat(document.getElementById("physics").value);
    const chemistry = parseFloat(document.getElementById("chemistry").value);

    const total = maths + social + english + physics + chemistry;
    const average = total / 5;

    if(average>=90){
        alert("Name: " + name + "\nTotal: " + total + "\nAverage: " + average + "\nGrade: A+");
    }else if(average>=80){
        alert("Name: " + name + "\nTotal: " + total + "\nAverage: " + average + "\nGrade: A");
    }else if(average>=70){
        alert("Name: " + name + "\nTotal: " + total + "\nAverage: " + average + "\nGrade: B");
    }else if(average>=60){
        alert("Name: " + name + "\nTotal: " + total + "\nAverage: " + average + "\nGrade: C");
    }else if(average>=50){
        alert("Name: " + name + "\nTotal: " + total + "\nAverage: " + average + "\nGrade: D");
    }else{
        alert("Name: " + name + "\nTotal: " + total + "\nAverage: " + average + "\nGrade: F");
    }   
}


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
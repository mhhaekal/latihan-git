
//write a code to convert celsius to fahrenheit

var celsius = 20
var fahrenheit = 0

fahrenheit=(celsius*9/5)+32
console.log("Fahrenheit=",fahrenheit)

//---------------------------------------------------------------

//write a code to check whether the number is odd or even

var number = 5
var check = number%2
if(check==0){
    console.log("Bilangan Genap")
}else{
    console.log("Bilangan Ganjil")
}

//---------------------------------------------------------------

//write a code to check whether the number is prime or not
// var number1=7
// if(number1>1 && number1/1===number1 && number1%2!==0){
//     console.log("Bilangan Prima")
// }else{
//     console.log("Bukan Prima")
// }

//---------------------------------------------------------------

var prima=11
var adalahPrima=true

for(var x=2; x<prima; x++){
    if(prima%x===0){
        adalahPrima=false
        break;
    }
}

console.log(prima, adalahPrima)

if(adalahPrima){
    console.log(prima+" adalah Prima")
}else{
    console.log(prima+" bukan Prima")
}

//---------------------------------------------------------------

// program to check if a number is prime or not

const number3 = 7
let isPrime = true;

// check if number is equal to 1
if (number3 === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number3 > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number3; i++) {
        if (number3 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number3} is a prime number`);
    } else {
        console.log(`${number3} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

//===============================================================

//write a code to find the sum of the numbers 1 to N
//example : 5 -> 1+2+3+4+5 = 15

var sum = 5
var total = 0
var resultString=""
for(var i=1; i<=sum; i++){
    if(i<sum){
        resultString+=i+"+"
    }else{
        resultString+=i+"="
    }
    total=total+i
}
console.log("Jumlah Dari "+resultString+total)

//----------------------------------------------------------------

//write a code to find factorial of a number

var sum1 = 5
var total1 = 1
var resultString1=""
for(var j=1; j<=sum1; j++){
    if(j<sum1){
        resultString1+=j+"x"
    }else{
        resultString1+=j+"="
    }
    total1=total1*j
}
console.log("Jumlah Faktorial "+resultString1+total1)

//----------------------------------------------------------------
//write a code to print the first N fibonacci number


var fn = 10
var firstNumber=0
var secondNumber=1
var resultTemp=0
var result=[0,1]

for(var n=2; n<=fn; n++){
    resultTemp=firstNumber+secondNumber
    firstNumber=secondNumber
    secondNumber=resultTemp
    result+=","+resultTemp
    
}
console.log(result)

//---------------------------------------------------------------

var a="haekal"
var b=a.length
var c=""

for(var o=a.length-1; o>=0; o--){
    console.log(a[o])
    c=c+a[o]
}
console.log(c)


//--------------------------------------------------

var bintang1 = 7
var star1=""
for(var j=1; j<=bintang1; j++){
    star1+="*"
    console.log(star1)
}

for(var k=1; k<=bintang1; k++){
    star1=""
    for(var l=1; l<=bintang1-k+1; l++){
        star1+="*"
    }
    console.log(star1)
}

// console.log(star1)

// var z=star1.length
// var x=""

// for(var p=star1.length-1; p>=0; p--){
//     console.log(star1[p])
//     x=x+star1[p]
//     console.log(x)
// }



//--------------------------------------------------

// var bintang = 4
// var star=""
// for(var i=1; i<=bintang; i++){
//     star+="*"
//     console.log(star)
// }
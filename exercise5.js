console.log("------Exercise 1------")

console.log("Tanpa 0")

function numberTriangle(height){
    var result = ""
    var counter = 1
    for(var i = 1; i <= height; i++){
        result = ""
        for(var j = 1; j <= i; j++){
            result = result + counter + " "
            counter++
        }
        console.log(result)
    }
}

numberTriangle(4)

console.log("Dengan 0")

function triangle(height) {
    let angka = 1
    let hasil = ""
    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= i; j++) {
        if (angka < 10) {
          angka = "0" + angka
        }
        hasil += angka + " "
        angka++
      }
      hasil += "\n"
    }
    return hasil
  }
console.log(triangle(7))

console.log("------Exercise 2------")

function looping(num){
    for(var i=0; i<=num; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }else if(i%5==0){
            console.log("Buzz")
        }else if(i%3==0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
    return num
}

looping(15)

console.log("------Exercise 3------")

var BMI = function(weight,height){
    var result = 0
    result = weight/(height*height)
    if(result < 18.5){
        console.log("Less Weight")
    }else if(result > 18.5 && result < 24.9){
        console.log("Ideal")
    }else if(result > 25 && result < 29.9){
        console.log("Overweight")
    }else if(result > 30 && result < 39.9){
        console.log("Very Overweight")
    }else if(result > 39.9){
        console.log("Obesity")
    }else{
        console.log("Abnormal")
    }
    return weight/height
}

console.log(BMI(40,1.65))

console.log("------Exercise 4------")

function evenOnly(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            newArr.push(arr[i])
        }
        
    }
    console.log(newArr)
    return newArr
}

evenOnly([1,2,3,4,5,6,7,8,9,10])

console.log("------Exercise 5------")

// var arr = [10,20,30,15,18,2,5,7,8,32]

// console.log(arr.sort((a,b) => a-b))

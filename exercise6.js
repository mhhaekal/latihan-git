
//1. Write a function to get the lowest, highest 
//and average value in the array 
//(with and without sort function).

console.log("------Exercise 1------")

var arr = [40,20,30,15,18,2,5,7,8,32]
var lowest = []
var highest = []
var sum = 0
var average = 0
function forSort(a,b){
    // console.log("a = "+a+" B = "+b)
    return a - b
}
console.log(arr.sort(forSort))

lowest = arr[0]
highest = arr[arr.length-1]
console.log("Lowest= "+lowest)
console.log("Highest= "+highest)
for(var i=0; i<arr.length; i++){
    sum = sum + arr[i]
}
console.log("Sum= "+sum)
average = sum / arr.length
console.log("Average= "+average)

//2. Write a function that takes an array of words 
//and returns a string by concatenating the words in
//the array, separated by commas and - the last word - by an 'and'.

console.log("------Exercise 2------")

var arr2 = ["Hallo", "Guys", "Test", "123"]
function pisahKata(arr2){
    var temp2 = []
    for(var i=0; i < arr2.length; i++){
        if(i < arr2.length-1){
            temp2 = temp2 + arr2[i]+" , "
        }else{
            temp2 = temp2 + " and " + arr2[i]
        }
    }
    return temp2
}

console.log(pisahKata(arr2))

// 3. Write a function to split a string and 
//convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

console.log("------Exercise 3------")

function split(arr3) {
	var string = arr3.split(" ")
	console.log(string)
}

var arr3 = "Hello World 123 456"

split(arr3)

// 4. Write a function to calculate 
//each element in the same position 
//from two arrays of integer.
//Assume both arrays are of the same length.
//a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

console.log("------Exercise 4------")

var arr41 = [3,4,5]
var arr42 = [6,7,8]
var arrJumlah = []
function calculate(arrJumlah){
    var temp4 = []
    for(var i = 0; i < arr41.length; i++){
        temp4[i] = arr41[i]+arr42[i]
        arrJumlah.push(temp4)
    }
    return temp4
}
console.log("Jumlah= ")
console.log(calculate(arrJumlah))

//5. Write a function that adds an element 
//to the end of an array. However, the element should only
//be added if it is not already in the array.

console.log("------Exercise 5------")

function element(num51, num52){
    var index5 = 0
    var apakahSama = false
    var result5 = num51
    for(var i = 0; i < num51.length; i++){
        if(num51[i] == num52){
            apakahSama = true
        }
    }
    if(apakahSama == false){
        result5.push(num52)
    }
    return result5
}

console.log(element([1,2,3],4))
console.log(element([1,2,3],3))



// function addElement(params1, params2) {
//     let titipIndex = 0
//     let isDouble = false
//     // let tampungResult = params1[0]
//     let result = params1
//     for (let i = 0; i < params1.length; i++) {
//         if (params1[i] == params2) {
//             isDouble = true
//         }
//     }
//     if (isDouble==false) {
//         result.push(params2)
//     }
//     return result
// }

// console.log(addElement([1,2,3],4)) // [1,2,3,4]
// console.log(addElement([1,2,3],3)) // [1,2,3] 


// var arr5 = [2,4,6,7]
// var adds = []
// var element = 3
// var temp5 = []
// // arr5.push(element)
// // console.log(arr5)
// function addElement(adds){
//     for(var i = 0; i < arr5.length; i++){
//         if(element != arr5[i]){
//             temp5.push(arr5[i])
//         }
//     }
//     // console.log(temp5)
//     // arr5.push(element)
//     // console.log(arr5)
//     if(temp5 == arr5){
//         arr5.push(element)
        
//     }
//     console.log(arr5)
//     return adds
// }
// addElement(arr5)

// 1. Write a function to remove all odd numbers 
//in an array and return a new array that 
//contains even numbers only

console.log("------Exercise 1------")

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

console.log("Genap= ")
evenOnly([1,2,3,4,5,6,7,8,9,10])

//2. Write a function to insert multiple given 
//integer (not an array) to an array and have a maximum size
//input. The array can only have a maximum size 
//from a given input. (if the maximum size of the given
//input is 5 than the array can only contain 5 elements).
//a. Example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//i. The function will return [5, 10, 24, 3, 6]

console.log("------Exercise 2------")

// 3. Write a function that will combine 2 given array into one array

console.log("------Exercise 3------")

var arr23 = [1,2,3]
var arr24 = [4,5,6]
var combine = []
var temp23 = []

function combineArr(combine){
    temp23 = arr23.concat(arr24)
    return combine
}
combineArr()
console.log(temp23)


// 4. Write a function to find duplicate values in an array

console.log("------Exercise 4------")

var arr24 = [1,1,2,2,3,4,5,2,6,8,6,0]

function duplicate(newArr24){
    var newArr24 = []
    for(var i = 0; i < arr24.length; i++){
        for(var j = i+1; j < arr24.length; j++){
            if(arr24[i] == arr24[j]){
                newArr24.push(arr24[j])
                // console.log(newArr24)
            }
        }
        
    }
    console.log(newArr24)
    return newArr24
}

duplicate()


// 5. Write a function to find the difference in 2 given array
const arr25 = ['a', 'b', 'c', 'd']
const arr26 = ['a', 'b']

function difference(a, b) {
  return a.filter(element25 => {
    return !b.includes(element25);
  })
}


console.log(difference(arr25, arr26))


// let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
// 1. Based on the array above write a function that will return primitive data types only



// 2. Write a function from a given array of numbers and return the second smallest number



// 3. Write a function from a given array of mixed data types and return the sum of all the number
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];



// 4. Write a function from the above array of number that will return sum of duplicate values



// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will
// randomly pick between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
let fruits = ["apple","banana","cherry","duku","edamame"]

let newFruits = new Set(fruits)

newFruits.add("papaya")
newFruits.add("apple") //tidak dimasukkan, karena sudah ada

console.log(newFruits.has("banana")) //true
console.log(newFruits)
console.log(newFruits.size)
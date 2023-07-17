var key = "canRun"
/*
class object

tipe data array
class array
array yang kita buat adalah object dari class Array

*/

var car = {
    brand:"Mercedes",
    canRun:true,
    price:1_000_000_000,
    speedLimit:200,
    another:{
        color: "red",

    },
    running:function(){
        console.log("can run up to= ", this.speedLimit)
    }
} 

console.log(car)
console.log(car.price)
console.log(car["brand"])
console.log(car[key])

car.running()

car.shoot = 0
console.log(car)

car.price = 5_000_000_000
console.log(car)

// delete car.canRun
// console.log(car)

var arr = [1,2,3]
delete arr[1]
console.log(arr)

car["jari jari"] = 12
console.log(car)

car[1] = "test"
console.log(car)
console.log(car[1])

car[true] = "true"
console.log(car.true)

console.log(car.another.color)

console.log(" undefined ",car.another.color)
console.log(" undefined ",car.tidakAda?.color)
//car.tidakAda? car.tidakAda.color : car.tidakAda
console.log(Boolean({}))

var test = car.canRun && "this car can run"
console.log(test)

console.log(Object.keys(car))

//object property
//atribut itu menempel secara fisik
//method itu apa yang bisa dilakukan

for(item in car){
    console.log(item)
}

for(key in car){
    console.log(key,"-->",car[key])
}


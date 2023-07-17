const [a,b] = [10,20]
var {foo} = {
    foo: "bar"
}

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

console.log(a,b)
// console.log(test.foo)
console.log(foo)

var{ price, brand, speedLimit } = car
console.log(price, brand, speedLimit)

// const [a,setA] = [10,function(){}] //hooks

var arr = [1,2,3]
var arr2 = [4,5,6]
var res = [...arr,...arr2]
console.log(res)

var test1 = {foo:"bar"}
var test2 = {woo:"sah"}
var res2 = {...test1,...test2}
console.log(res2)
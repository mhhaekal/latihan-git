let result

function greet(str){
    result = str
}

function hello(){
    greet("hello")
}

function arigatou(){
    greet("arigatou!")
}

arigatou()
hello()
console.log(result)

console.log("Task 1")
setTimeout(()=>{
    console.log("Task 2")
},1000)

console.log("Task 3")
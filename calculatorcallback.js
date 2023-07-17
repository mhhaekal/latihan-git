function calculator(a, b, callback){
    callback(a + b)
}

function displayer(something){
    console.log(something)
}

calculator(5,5,displayer)

calculator(5,5,(something) => {
    console.log("test")
    console.log("something => ",something)
})
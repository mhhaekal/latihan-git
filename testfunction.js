const test1 = () =>{
    this.name="haekal"
    this.age=22
    console.log(this)
}

const test2 = function(){
    this.name="haekal"
    this.age=22
    console.log(this)
}
// let a = new test1()
let b = new test2()
test1()
test2()
// console.log(a)
console.log(b)

function cube(n=1){
    // console.log("xxx")
    // console.log("xxx")
    // console.log("xxx")
    // console.log(n)
    for(var i = 0; i < n; i++){
        console.log("xxx")
    }
}

cube(3)

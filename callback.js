// console.log("===== bukan callback =====")
// function foo(){
//     //foo
//     console.log("ini foo")
//     return "nilai foo"
// }

// function bar(){
//     // console.log(foo) //nilai foo
//     foo()
// }

// bar()

console.log("===== callback =====")
function foo(){
    //foo
    console.log("ini foo")
    return "nilai foo"
}

function bar(foo){
    // console.log(foo) //nilai foo
    foo()
}

bar(foo)

// console.log("===== callback =====")

// function bar2(){
//     // console.log(foo) //nilai foo
//     foo()
// }

// bar(() =>{
//     console.log("ini function buatan saya sendiri")
// })


// Array.sort(() => {
//     return a-b
// })

// if(-17){
//     console.log("test")
// }

// function bar(callback){

// }
// bar((name) => {
//     var name = "haekal"
//     console.log("ini function")
// })

// console.log(bar(name))
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(arr)

// let a = 3
// var result = []
// var isi = 1
// for(var i = 0; i < a; i++){
//     var temp = []
//     for(var j = 0; j < a; j++){
//         temp.push(isi)
//         isi++
        
//     }
//     result.push(temp)
// }
// console.log(result)



console.log("=====")
let a = 3
var result = []
var isi = 1
for(var i = 0; i < a; i++){
    var temp = []
    
    for(var j = 0; j < a; j++){
        temp.push(isi)
        isi++
    }
        result.push(temp)
}
result[1].reverse()
console.log(result)



console.log("=====")
let c = 3
var result = []
var isi = c*c
for(var i = 0; i < c; i++){
    var temp = []
    
    for(var j = 0; j < c; j++){
        temp.push(isi)
        isi--
    }
        result.push(temp)
}
console.log(result)


console.log("=====")
let d = 3
var result = []
var isi = d*d
for(var i = 0; i < d; i++){
    var temp = []
    
    for(var j = 0; j < d; j++){
        temp.push(isi)
        isi--
    }
        result.push(temp)
}
result[0].reverse()
result[2].reverse()
console.log(result)

console.log("=====")
let e = 3
var result = []
var isi = 1
for(var i = 0; i < e; i++){
    var temp = []
    for(var j = 0; j < e; j++){
        if(isi%2 === 0){
            temp.push("O")
        }else{
            temp.push("X")
        }
        isi++
    }
        result.push(temp)
}
console.log(result)
console.log("-----Exersice Batch 3 Nomor 1-----")

function primitiveOnly(arr){
    var result = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == "function" || (typeof arr[i] == "object" && typeof arr[i] != null)){
            continue //skip ke berikutnya
        }else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(primitiveOnly([1, 'string', null, false, undefined, 2, 'yes', undefined]))

// console.log(typeof "haekal") //primitive (string)
// console.log(typeof 23) //primitive (number)
// console.log(typeof true) //primitive (boolean)
// console.log(typeof 34.6) //primitive (number)
// console.log(typeof infinity) //primitive (undefined)
// console.log(typeof {foo:"bar"}) //structure (object)
// console.log(typeof [1,2,3]) //structure (object)
// console.log(typeof function(){}) //fuction not primitive
// console.log(typeof null) //primitive (object)
// console.log(typeof undefined) //primitive (undefined)






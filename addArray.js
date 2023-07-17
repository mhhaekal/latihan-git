console.log("-----Exersice Batch 1 Nomor 4-----")

function addArray(arr1, arr2){
    var result = []
    for(var i = 0; i < arr1.length; i++){
        var temp = arr1[i] + arr2[i]
        result.push(temp)
        //resul.push(arr1[i]+arr2[i])
    }
    return result
}

console.log(addArray([1,2,3],[3,4,5]))
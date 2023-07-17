console.log("-----Exersice Batch 2 Nomor 4-----")

/*
    [1,3,2,4,3,5,6,2] => j

    [1,3,2,4,3,5,6,2] => i

    [3,2] => result

*/

function findDuplicate(arr){
    var result = []
    for(var i = 0; i < arr.length; i++){
        var isSame = false
        for(var j = 0; j < arr.length; j++){
            if(i !== j && arr[i] == arr[j] && arr[i] !== null){
                arr[j] = null
                isSame = true
            }
        }
        if(isSame === true){
            result.push(arr[i])
        }
    }return result
}

console.log(findDuplicate([1,2,3,3,3,4,4]))
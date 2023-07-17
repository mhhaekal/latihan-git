console.log("-----Exersice Batch 1 Nomor 5-----")
/*
    contoh:

    arr = [4,2]
    num = 7
    7 == 4 false
    7 == 2 false

    result = [4,2,7]

    arr = [1,2,3,4,5,6,7]
    num = 5

    result = [1,2,3,4,5,6,7]

    flag = false

    5 === 1 false
    5 === 2 false
    5 === 3 false
    5 === 4 false
    5 === 5 true
    break (jika sudah true akan di break)

    karena true, maka num tidak akan ditambahkan ke arr

    1. cek dulu ada atau tidak angkanya
    apakah num ada di dalam arr

*/


function addArray2(arr, num){
    var flag = false
    var result = ""
    for(var i = 0; i < arr.length; i++){
        if(num == arr[i]){
            flag = true
            break
        }
    }
    if(flag === false){
        arr.push(num)
    }
    return arr
}

console.log(addArray2([1,2,3,4,5],6))
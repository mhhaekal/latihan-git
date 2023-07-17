function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var temp = null
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(selectionSort([4,9,2,8,4,6,7,1,0,3,7,5]))

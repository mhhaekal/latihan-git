function lilysHomework(arr){
    function swap(arr){
        let arr2 = arr.slice().sort((a, b) => a-b )
        let indexMap = {}
        for(var i = 0; i < arr.length; i++){
            indexMap[arr[i]] = i
        }
        let swap = 0
        for(var i = 0; i < arr.length; i++){
            if(arr[i] != arr2[i]){
                swap++
                let swapIndex = indexMap[arr2[i]]
                indexMap[arr[i]] = swapIndex
                indexMap[arr2[i]] = i
                arr[swapIndex] = arr[i]
                arr[i] = arr2[i]
            }
        }
        return swap
    }
    let reverseArr = arr.slice().reverse()
    let result = Math.min(swap(arr), swap(reverseArr))
    return result
}

console.log(lilysHomework([2,5,3,1]))
function secondSmallest(arr){
    var smallest = Infinity
    var smallest2 = Infinity
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest2 = smallest
            smallest = arr[i]
            
            
        }else if(arr[i] < smallest2 && arr[i] != smallest){
            smallest2 = arr[i]
        }
        console.log("smallest2= ",smallest2)
        console.log("smallest = ",smallest)
    }
}

console.log(secondSmallest([5,7,3,4,8,9,2,4]))
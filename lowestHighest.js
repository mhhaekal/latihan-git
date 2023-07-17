console.log("-----Exersice Batch 1 Nomor 1-----")

/*

[3,6,1,5,8,9,7] ==> index ada 7, tapi lengthnya 8
lowest = 3 ==> akan berubah menjadi 1
//lowest diisi dengan angka pertama dari isi array
//akan dibandingkan dengan tiap isi array
//satu persatu, jika ada yang lebih rendah, maka isi
//lowest akan diganti dengan yang lebih rendah
//maka lowest menjadi 1
//atau bisa juga lowest = infinity (angka terbesar di javascript)

highest = 3 ==> akan berubah menjadi 9
//sama seperti lowest, tapi bedanya highest 
//akan dibandingkan satu persatu dengan yang lebih besar

*/


function lowestHighest(arr){
    var lowest = arr[0]
    var highest =arr[0]
    var avg = arr[0]
    for (var i = 1; i < arr.length; i++){
        if(arr[i] < lowest){
        lowest = arr[i]
        }
        if(arr[i] > highest){
        highest = arr[i]
        }
        avg = avg + arr[i]
        }
        avg = avg / arr.length 
    return (lowest, highest, avg)
}

// function lowestHighestSort(arr){
//     var lowest = null
//     var highest = null
//     var agv = null

//     function forSort(a,b){
//         // console.log("a = "+a+" B = "+b)
//         return a - b
//     }
//     console.log(arr.sort(forSort))
// }

console.log(lowestHighest([3,6,1,5,2,8,9,7]))


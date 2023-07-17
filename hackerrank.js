console.log("-----quiz no 1-----")
function push_zero(arr) {
    var hasil1 = []
    var hasil2 = []
    for (var i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            hasil1.push(arr[i])
        }else if(arr[i] == 0){
            hasil2.push(arr[i])
        }
    }
    
    return hasil1.concat(hasil2)
    
}

var arr = [3,0,5,6,1,2,0,0,4,5]
console.log(push_zero(arr))


console.log("-----quiz no 2-----")

// function jump_on_x(road) {
//     var road = "__o__xx__oo__xxx_x__o_ooo__"
//     var temp = ""
//     var hasil = ""
//     for (var i = 0; i < road.length; i++) {
//       if (road[i] === 'x') {
//         hasil++
//         if (hasil > 3) {
//           break
//         }
//         if (hasil <= 3 && road[i + 1] !== 'x') {
//           temp++
//         }
//       } else {
//         hasil = 0
//       }
//     }
//     return temp
//   }

// console.log(jump_on_x())
function jump_on_x(road) {
    var temp1 = 0
    var temp2 = 0
    for (var i = 0; i < road.length; i++) {
        if (road[i] === 'x') {
        temp1++
        if (temp1 > 3) {
                break
            }
        if (temp1 <= 3 && road[i + 1] !== 'x') {
                temp2++
            }
        } else {
            temp1 = 0
        }
    }
    return temp2
}
    
console.log(jump_on_x("__o__xx__oo__xxx_x__o_ooo__"))

// function jump_on_x(road) {
//     var jump = 0
//     var tempX = ""
//     var road = "__o__xx__oo__xxx_x__o_ooo__"
//     for(var i = 0; i < road.length; i++){
//         if(road[i] == "x"){
//             tempX = tempX + road[i]
//             if(tempX == "xxxx"){
//                 break
//             }else if(road[i+1] != "x"){
//                 jump++
//                 tempX = ""
//             }
//         }
//     }
//     console.log(jump)
//     return jump
// }

// jump_on_x()



console.log("-----quiz no 3-----")

function calculateNetWorth(reportList) {
    var jumlah = 0
    for (var i = 0; i < reportList.length; i++) {
      if (i % 2 === 0) {
        jumlah = jumlah + reportList[i];
      } else {
        jumlah = jumlah - reportList[i];
      }
    }
    return jumlah
}

console.log(calculateNetWorth([10,20,30,40]))


console.log("-----quiz no 4-----")

// [a,b,c,d,e,f]

// [b+0, a+c , b+d , c+e , d+f, e+0 ]

// input = ["3", "5", "7", "9", "0"] 

// output = [5, 10, 14, 7, 9]

function processData(numberList) {
    var hasil = []
    var temp = 0
    for (var i = 0; i < numberList.length; i++){
        if (isNaN(parseInt(numberList[i]))) {
            hasil = []
            break   
        }else if (numberList[i - 1] == undefined) {
            temp = 0 + parseInt(numberList[i + 1])
            hasil.push(temp)
            temp = parseInt(numberList[i]) + parseInt(numberList[i + 2])
            hasil.push(temp)
        } else if (numberList[i + 1] == undefined) {
            temp = parseInt(numberList[i]) + parseInt(numberList[i - 2])
            hasil.push(temp)   
            temp = 0 + parseInt(numberList[i - 1])
            hasil.push(temp)
        } else if (i == 1 && i <= numberList.length - 2) {
            temp = parseInt(numberList[i]) + parseInt(numberList[i + 2])
            hasil.push(temp)
        }
    }
    return hasil
}

console.log(processData())



    // let arr = []
    // for (let i = 0; i < numberList.length; i++) {
    //     if (isNaN(numberList[i])) {
    //         return []
    //     } else {
    //     if (i == 0) {
    //         arr.push(parseInt(numberList[1])+0)
    //     } else if (i == 1) {
    //         arr.push(parseInt(numberList[0]) + parseInt(numberList[2]))
    //     } else if (i == 2) {
    //         arr.push(parseInt(numberList[1]) + parseInt(numberList[3]))
    //     } else if (i == 3) {
    //         arr.push(parseInt(numberList[2]) + parseInt(numberList[4]))
    //     } else if (i == 4) {
    //         arr.push(parseInt(numberList[3])+0)
    //     }
    //     }
    // }
    // return arr
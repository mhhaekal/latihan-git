
console.log("===== Exercise No 1 =====")

function majority(arr){
    let isi = 0
    let result = 0
    for(var i = 0; i < arr.length; i++){
        let jumlah = 0
        for(var j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                jumlah++
                }
            }
            if(jumlah > result){
                result = jumlah
                isi = i
            }
        }
            if(result > (arr.length/2)){
                console.log(arr[isi])
            }
}

majority([3,2,3])

console.log("===== Exercise No 3 =====")

function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}

console.log(pascals(5))


// function pascal(numRows){
//     output = []
//     for(var i = 0; i < numRows; i++){
//         for(var j = 0; j < numRows; j++){
            
//         }
//     }
//     return output
// }

console.log("===== Exercise No 2 =====")

function romanNumeral(numeral ){
    var romanNum = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1,
    }

    var strSplit = numeral.split("")
    var result = 0
    for(var i = 0; i < strSplit.length; i++){
        // result = result + romanNum[strSplit[i]]
        if(romanNum[strSplit[i]] < romanNum[strSplit[i+1]]){
            result = result + romanNum[strSplit[i+1]] - romanNum[strSplit[i]]
            i = i + 1
        }else{
            result = result + romanNum[strSplit[i]]
        }
    }
    return result
}

console.log(romanNumeral("XIX"))

console.log("===== Exercise No 4 =====")

function stockExchange(stocks){
    var profit = 0
    for(var i = 0; i < stocks.length; i++){
        for(var j = i + 1; j < stocks.length; j++){
            if(stocks[j] - stocks[i] > profit ){
                profit = stocks[j] - stocks[i]
            }
        }
    }
    return profit
}

console.log(stockExchange([7,1,5,3,6,4]))

/*
    7 =>    1-7=-6
            5-7=-2
            3-7=-4
            6-7=-1
            4-7=-3

    1 =>    5-1=4
            3-1=2
            6-1=5
            4-1=3

    5 =>    3-5=-2
            6-5=1
            4-5=-1

    3 =>    6-3=3
            4-3=1

    6 =>    4-6=-2
    


*/ 

console.log("===== Exercise No 3 Fix =====")

function pascalTriangle(row,n){
    var result = []
    for(var i = 0; i < row; i++){
        var temp = []
        if(i == 0){
            temp.push(n)
        }else if(i == 1){
            temp.push(n,n)
        }else{
            for(var j = 0; j <= i; j++){
                if(j == 0 || j == i){
                    temp.push(n)
                }else{
                    temp.push(result[i-1][j-1] + result[i-1][j])
                }
            }
        }
        result.push(temp)
    }
    return result
}

console.log(pascalTriangle(5,10))

module.exports = {romanNumeral}

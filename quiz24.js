/*
function diagonalDifference(arr) {
    var arr = [11,2,4,4,5,6,10,8,-12]
    let diagonal1 = 0
    let diagonal2 = 0
    let n = arr.length 
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            if(i == j) { //untuk mencari jumlah total diagonal utama (kiri atas ke kanan bawah)
                diagonal1 = diagonal1 + arr[i][j]
            }
            if(i + j == n - 1){ //untuk mencari jumlah total diagonal utama (kanan atas ke kiri bawah)
                diagonal2 = diagonal2 + arr[i][j]
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2) //untuk mencari selisih jumlah diagonal 1 dan 2
}

console.log(diagonalDifference())
*/
var arr = [11,2,4,4,5,6,10,8,-12]
function diagonalDifference(arr) {
    let matrix = [] // [[11 2 4],[4,5,6],[10,8,-12]]
    let tampungMatrix = [] //
    // let tampung = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 == 0 && i !== 0) {
            matrix.push(tampungMatrix)
            tampungMatrix =[] 
            }
            tampungMatrix.push(arr[i])
        }
            matrix.push(tampungMatrix) 
            let matrix1 = 0; //11 
            let matrix2 = 0; //2
        for (let i = 0; i < matrix.length; i++) {
            matrix1 += matrix[i][i]; //2 2
            matrix2 += matrix[i][matrix.length - 1 - i];
    }
    return matrix2 - matrix1
}

console.log(diagonalDifference(arr))



// let matrix = [] 
//     let tampungMatrix = [] 
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 3 == 0 && i !== 0) {
//             matrix.push(tampungMatrix)
//             tampungMatrix =[] 
//             }
//             tampungMatrix.push(arr[i])
//         }
//             matrix.push(tampungMatrix) 
//             let matrix1 = 0;
//             let matrix2 = 0;
//         for (let i = 0; i < matrix.length; i++) {
//             matrix1 += matrix[i][i];
//             matrix2 += matrix[i][matrix.length - 1 - i];
//         }
//         return matrix2 - matrix1


// let matrix1 = 0;
//   let matrix2 = 0;

//   for (let i = 0; i < matrix; i++) {
//     matrix1 += arr[i][i];
//     matrix2 += arr[i][matrix - 1 - i];
//   }
// return matrix2 - matrix1
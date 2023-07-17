console.log(" ===== Quiz 2 Nomor 1 ===== ")
var arr = [-4,3,-9,0,4,1] 
//deklarasi dulu array integernya

//perulangan untuk mengecek apakah tiap isi dari arr tersebut 
//adalah positif, negatif, atau nol
function plusMinus(arr) {
    let positif = 0 //untuk menyimpan berapa banyak isi array yang positif
    let negatif = 0 //untuk menyimpan berapa banyak isi array yang negatif
    let nol = 0 //untuk menyimpan berapa banyak isi array yang nol
    let jumlahPositif = 0 //untuk menyimpan berapa banyak isi array yang positif dibanding keseluruhan panjang array
    let jumlahNegatif = 0 //untuk menyimpan berapa banyak isi array yang negatif dibanding keseluruhan panjang array
    let jumlahNol = 0 //untuk menyimpan berapa banyak isi array yang nol dibanding keseluruhan panjang array
    let temp = [] //untuk menyimpan hasil akhir yang diminta soal, yaitu bentuk array berbentuk desimal dari jumlah array yang positif, negatin, dan nol
    for(var i = 0; i < arr.length; i++){ //length dimulai dari 1 sedangkan index dari 0
        if(arr[i] > 0){ //cek apakah isi arr adalah positif
            positif = positif + 1 //bisa juga positif++
        }else if(arr[i] < 0){ //cek apakah isi arr adalah negatif
            negatif = negatif + 1 //bisa juga negatif++
        }else{ //cek apakah isi arr adalah nol
            nol = nol + 1 //bisa juga nol++
        }
    }
    jumlahPositif = positif/arr.length //berapa hasil dari jumlah array positif dibanding jumlah keseluruhan
    jumlahNegatif = negatif/arr.length //berapa hasil dari jumlah array negatif dibanding jumlah keseluruhan
    jumlahNol = nol/arr.length //berapa hasil dari jumlah array nol dibanding jumlah keseluruhan
    temp.push(jumlahPositif.toFixed(6)) //masukkan jumlahPositif kedalam array, yaitu isi ke [0]
    temp.push(jumlahNegatif.toFixed(6)) //masukkan jumlahNegatif kedalam array, yaitu isi ke [1]
    temp.push(jumlahNol.toFixed(6)) //masukkan jumlahNol kedalam array, yaitu isi ke [2]
    console.log(jumlahPositif.toFixed(6))
    console.log(jumlahNegatif.toFixed(6))
    console.log(jumlahNol.toFixed(6))
    return temp
}

console.log(plusMinus(arr))

console.log(" ===== Quiz 2 Nomor 2 ===== ")

var n = 9 //deklarasi jumlah kaos kakinya
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20] //deklarasi kode warna kaos kakinya
function sockMerchant(n, ar) {
    let sepasang = 0 //untuk menyimpan jumlah kaos kaki yang sepasang
    let gudang = {} 
  for (var i = 0; i < n; i++) { //untuk menghitung jumlah dari tiap warna kaos kaki
    let kaosKaki = ar[i]
    gudang[kaosKaki] = (gudang[kaosKaki] || 0) + 1
  }
  for (let kaosKaki in gudang) { //untuk menghitung jumlah kaos kaki yang sepasang
    let hitung = gudang[kaosKaki]
    sepasang = sepasang + Math.floor(hitung / 2)
  }
  return sepasang
}
console.log(sockMerchant(n, ar))

console.log(" ===== Quiz 2 Nomor 3 ===== ")



console.log(" ===== Quiz 2 Nomor 4 ===== ")



// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// var arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// function diagonalDifference(arr) {
//     var n = arr.length; 
//     var d1 = 0;
//     var d2 = 0;
//   for(var i=0; i<n; i++){
//      for(var j=0; j<n; j++){
//        // finding the sum of primary diagonal
//          if(i === j) {
//            d1 += arr[i][j];
//          }
//        // finding the sum of secondary diagonal
//          if(i + j === n - 1){
//             d2 += arr[i][j];
//          }
//       }
//   }
//   return Math.abs(d1 - d2);
// }

// console.log(diagonalDifference(arr))


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
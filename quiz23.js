
console.log('========== Divisible Sum Pairs ==========');
function divisibleSumPairs(n, k, ar) {
    //n adalah panjang array
    //k adalah modulus dari jumlah 2 array yang harus dicari
    //jumlah 2 array harus habis dibagi dengan k
    let hasil = 0
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((ar[i] + ar[j]) % k === 0) {
          hasil++ //setiap ketemu jumlah yang habis dibagi dengan k, hasil bertambah 1
        }
      }
    }
    return hasil
  }
  /*
  perulangan dari index 0 sampai n-1
  dari index ke 1 sampai n-1
  dari index ke 2 sampai n-1 .... begitu seterusnya
  */
  let n = 6;
  let k = 3;
  let ar = [1, 3, 2, 6, 1, 2];
  let result = divisibleSumPairs(n, k, ar);
  console.log(result); // 5
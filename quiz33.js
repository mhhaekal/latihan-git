function caesar_chiper(plain_text, key) {
    let hurufKecil = "abcdefghijklmnopqrstuvwxyz" //deklarasi variabel hurufKecil dengan semua alfabet, jika selain alfabet maka tidak termasuk
    let hurufKapital = hurufKecil.toUpperCase() //mengubah semua huruf menjadi kapital dan dimasukkan kedalam variabel hurufKapital
    let hasil = plain_text.split("").map(temp => { //split untuk memisahkan tiap isi array, dan map untuk menjalankan fungsi kepada tiap isi array dan memasukkannya ke temp
        if (hurufKecil.includes(temp)) { //jika ada huruf kecil yang berada dalam temp
            return hurufKecil[(hurufKecil.indexOf(temp) + key) % 26] //proses cipher, index huruf dalam temp akan ditambah dengan index key
        } else if (hurufKapital.includes(temp)) { //jika ada huruf kapital berada dalam temp
            return hurufKapital[(hurufKapital.indexOf(temp) + key) % 26] //proses cipher, index huruf dalam temp akan ditambah dengan index key
        } else {
            return temp
        }
    })
    return hasil.join("")

}

console.log(caesar_chiper("ABCD",5))
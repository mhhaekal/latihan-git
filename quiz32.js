function dayOfProgrammer(year) {
    if (year == 1918) //karena  tahun ini peralihan dari sistem julian ke gregorian
        return "26.09.1918";
    else if (((year <= 1917) && (year%4 == 0)) || ((year%400 == 0) || ((year%4 ==0) && (year%100 != 0)))) //untuk mengecek tahun kabisat
        return "12.09." + year;
    else //jika selain kabisat
        return "13.09." + year;

}

console.log(dayOfProgrammer(1920))


function dayOfProgrammer2(y){
    if(y < 1918){
        if(y % 4 === 0){
            return "12.09."+y
        }else{
            return "13.09."+y
        }
    }else if(y > 1918){
        if(y % 400 === 0 || (y % 4 === 0 && y % 100 != 0)){
            return "12.09."+y
        }else{
            return "13.09."+y
        }
    }else if( y === 1918){
        return "13.09.1918"
    }
}

console.log(dayOfProgrammer2(1918))

//hari programmer adalah hari ke 256 dari 1 januari setiap tahun
// 1700 - 1927 => rusia menggunakan julian calendar
// tahun 1918, setelah 31 januari langsung 14 februari

//julian calendar
/*
    tahun kabisat bisa dibagi 4
*/
//gregorian calendar
/*
tahun kabisatnya bisa dibagi 400
tahun kabisatnya bisa dibagi 4 tapi tidak bisa dibagi 100

*/



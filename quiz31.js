// function timeConversion(s) {
//     let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]
//     time = time.split(":").map(Number)
//     if (part === "PM" && time[0] === 12) time[0] = 12
//     if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24
//     if (part === "AM" && time[0] === 12) time[0] = 0
//     return time
//       .map(String)
//       .map(s => s.padStart(2, "0"))
//       .join(":")
//   }


//   timeConversion()

  function timeConversion(s) {
    let waktuAkhir = 0
    let temp = 0
    let waktuPM = {}
    let waktuAM = {}
    waktuPM = {
        '01': 13,
        '02': 14,
        '03': 15,
        '04': 16,
        '05': 17,
        '06': 18,
        '07': 19,
        '08': 20,
        '09': 21,
        '10': 22,
        '11': 23,
        '12': 12
    }
    waktuAM = {
        '12': '00'
    }

    if ('PM' == s.substring(s.length - 2, s.length)) {
        temp = waktuPM[s.substring(0, 2)];
    }
    else if ('AM' == s.substring(s.length - 2, s.length) && 12 == s.substring(0, 2)) {
        temp = waktuAM[s.substring(0, 2)];
    } else {
        temp = s.substring(0, 2);
    }
    waktuAkhir = (temp + s.substring(2, s.length - 2));
    return waktuAkhir;

}

console.log(timeConversion("07:05:45PM"))


function timeConversion2(s){
    let [hour, minute, second] = s.split(":")
    let period = second[2]+"M"
    let newSecond = second[0]+second[1]
    let militaryHour = parseInt(hour)
    
    if(period === "AM" && militaryHour == 12){
        militaryHour = "00"
    }else if(period === "PM" && militaryHour != 12){
        militaryHour = militaryHour + 12
    }
    return `${militaryHour}:${minute}:${newSecond}`
}

console.log(timeConversion2("07:00:00PM"))
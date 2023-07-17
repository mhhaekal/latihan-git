//Write a code to find area of rectangle.

// SET panjang equals to 10
// SET lebar equals to 5
// SET area equals to panjang multiply lebar
// PRINT area

var panjang=10
var lebar=5
var area=panjang*lebar
console.log("Rectangle Area= ",area)

// Write a code to find perimeter of rectangle.

// SET panjang equals to 10
// SET lebar equals to 5
// SET perimeter to panjang multiply 2 add lebar multiply 2
// PRINT perimeter

var perimeter=panjang*2+lebar*2
console.log("Rectangle Perimeter= ",perimeter)

// Write a code to find diameter, circumference and area of a circle.

// SET radius equals to 14
// SET diameter equals to radius multiply 2
// SET pi equals to 3.14
// SET circumference equals to 2 multiply pi multiply radius
// SET area equals to pi multiply radius square
// PRINT diameter
// PRINT circumference
// PRINT area

var radius=14
var diameter=radius*2
console.log("Circle Diameter=",diameter)

var pi=3.14
var circumference=2*pi*radius
console.log("Circle Circumference",circumference)

var area2=pi*radius**2
console.log("Circle Area=",area2)

// Write a code to find angles of triangle if two angles are given.

// SET angles_A equals to 90
// SET angles_B equals to 60
// SET angles_C equals 180 substract angles_A substract angles_B
// PRINT angles_C

var angles_A=90
var angles_B=60
var angles_C=180-angles_A-angles_B
console.log("Angles= ",angles_C)

// Write a code to get difference between dates in days.

// SET dates1 equals to 2023-06-27
// SET dates2 equals to 2023-06-30
// SET difference equals to dates2 substract dates1
// PRINT difference divided by 1000 multiply 3600 multiply 24

let dates1=new Date("2023-6-27")
let dates2=new Date("2023-6-30")
let difference=dates2-dates1
console.log("Date Difference= ",difference/(1000*3600*24))

// Write a code to convert days to years, months and days.

// Example : 400 days → 1 year, 1 month, 5 days
// 1 year : 365 days, 1 month : 30 days

var day=400
var year=Math.floor(day/365)
var month=Math.floor((day-(year*365))/30)
// var month=Math.floor(day%365/30)
var days=Math.floor((day-(year*365)-(month*30)))
// var days=(day%365%30)
console.log(year,"Year",month,"Month",days,"Days")

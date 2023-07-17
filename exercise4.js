//write a code to display the multiplication table of a given integer
//example: number -> 9
//output:
//9x1
//9x2
//...
//9x10

var number = 9
var result=0
for(var a=1; a<=number; a++){
    result=number*a
    console.log(number+"x"+a+"="+result)
}

//write a code to check whether a string is a palindrome or not

var palindrome="Kasur"
var palindrome2=palindrome.toLowerCase()
var panjang=palindrome.length
var result=""
for(var b=palindrome2.length-1; b>=0; b--){
    result=result+palindrome2[b]
    //console.log(result)
}
if(palindrome2===result){
    console.log(palindrome+" Adalah Palindrome")
}else{
    console.log(palindrome+" Bukan Palindrome")
}

//write a code to convert centimeter to kilometer

var cm=20000
var km=0

km=cm/10000
console.log(cm+" Centimeter Adalah "+km+" Kilometer")

//write a code to format number as currency (IDR)

var idr=1000
var idrString=idr.toString()
var rp="Rp. "
var desimal=",00"
var reverse1=""
var hasil=""

for(var c=idrString.length-1; c>=0; c--){
    reverse1=reverse1+idrString[c]
}

var result1=""
for(var d=0; d<=reverse1.length-1; d++){
    result1=result1+reverse1[d]
    if((d+1)%3==0 ){
        result1=result1+"."
    }
}

for(var e=result1.length-1; e>=0; e--){
    hasil=hasil+result1[e]
}
console.log(rp+hasil+desimal)



//write a code to remove the first occurrence of a given "search string" 
//from a string, example:
//string - "Hello World", search string - "ell" -> "Ho world"


var uCase1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lCase1="abcdefghijklmnopqrstuvwxyz"

var kata3="hello world"
var cariString="ell"
var index1=""

for(var h=0; h<kata3.length; h++){
    if(h==0){
        for(var i=0; i<uCase1.length; i++){
            if(kata3[h]==lCase1[i]){
                index1+=uCase1[i]
                h++
                break
            }
        }
    }else if(kata3[h-1]==" "){
        for(var j=0; j<uCase1.length; j++){
            if(kata3[h]==lCase1[j]){
                index1+=uCase1[j]
                h++
                break
            }
        }
    }
    index1+=kata3[h]
}
console.log(index1)











//write a code to capitalize the first letter of 
//each word in a string
//example: "hello world" -> "Hello World"

var kata="hello world test halo guys david disini"
var kapital=""
var hasil1=""

for(var f=0; f<=kata.length-1; f++){
    if(kata[f]==" "){
        kapital+=f+1
    }
    for(var g=f; g<=f; g++){
        if(g==0){
            hasil1+=kata[g].toUpperCase()
            kapital=0
        }else if(g==kapital){
            hasil1+=kata[g].toUpperCase()
            kapital=0
        }else{
            hasil1+=kata[f]}
    }
    
}

console.log(hasil1)

//------------------------------------------------

var uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lCase="abcdefghijklmnopqrstuvwxyz"

var kata2="hello world halo guys david disana"
var index=""

for(var h=0; h<kata2.length; h++){
    if(h==0){
        for(var i=0; i<uCase.length; i++){
            if(kata2[h]==lCase[i]){
                index+=uCase[i]
                h++
                break
            }
        }
    }else if(kata2[h-1]==" "){
        for(var j=0; j<uCase.length; j++){
            if(kata2[h]==lCase[j]){
                index+=uCase[j]
                h++
                break
            }
        }
    }
    index+=kata2[h]
}
console.log(index)



//write a code to reverse a string

// var a="haekal"
// var b=a.length
// var c=""

// for(var o=a.length-1; o>=0; o--){
//     console.log(a[o])
//     c=c+a[o]
// }
// console.log(c)


// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’



// ● Write a code to find the largest of two given integers



// ● Write a conditional statement to sort three numbers



// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.



// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`


var letter="An apple a day keeps the doctor away"
var change1="A"
var change2="a"
var index2=""

for(var z=1; z<=letter.length; z++){
    if(letter[z]==change1 && letter[z]==change2){
        
    }
}
console.log(index2)
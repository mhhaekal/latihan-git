class Animal{
    constructor(name,age,isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal) //akan passing ke class utama
    }
    eat(){
        this.isMammal = true
        return this.name+" sedang makan!"
    }
}

class Eagle extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal) //akan passing ke class utama
    }
    fly(){
        this.isMammal = false
        return this.name+" sedang terbang!"
    }
}

let myRabbit = new Rabbit("Labi",2,true)
let myEagle = new Eagle("Elo",4,false)
console.log("=====")
console.log(myRabbit instanceof Rabbit)
console.log(myEagle instanceof Rabbit)
console.log("=====")
console.log(myRabbit)
console.log(myEagle)
console.log("=====")
console.log(myRabbit.eat())
console.log(myEagle.fly())

console.log("===== Exercise No 1 =====")
function titleToNumber(s){
	let result = 0
	for (let i = 0; i < s.length; i++){
		result = result * 26 
		result = result + s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1 //charcode A = 65, B = 66
	}
	return result
}
console.log(titleToNumber("AB"))

console.log("===== Exercise No 2 =====")

function single(arr){
    let result=[]
    for(var i = 0; i < arr.length; i++){
        let benar = true
        for(var j = 0; j < arr.length; j++){
            if(i != j && arr[i] === arr[j]){
                benar = false
            }
        }
        if(benar == true){
            result.push(arr[i])
        }
    }
    return result
}

console.log(single([4,1,2,1,2,5,3,3,7,8,8]))

console.log("===== Exercise No 4 =====")

function climbingStaircase(n){
    let stepN = 0
    let step1 = 0
    let step2 = 1

    for(var i = 0; i < n; i++){
        stepN = step1 + step2
        step1 = step2
        step2 = stepN
    }
    return stepN
}

console.log(climbingStaircase(5))


console.log("===== Exercise No 4 =====")

function climbingStaircase2(n){
    let numberOfWays = [1,2]
    for(var i = 2; i <= n; i++){
        numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2]
    }
    return numberOfWays[n-1]
}
console.log(climbingStaircase2(5))

console.log("===== Exercise No 1 =====")

function titleToNumber2(z){ //AB
    let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result2 = 0
    for(var k = 0; k < z.length; k++){
        for(var l = 0; l < z.length; l++){
            if(z[k] === alfabet[l]){
                result2 = alfabet.indexOf(l)
            }
        }
    }
    return result2
}
console.log(titleToNumber2("A"))

console.log("===== Exercise No 1 FIX =====")
function findAlfabet(char){
    let alfabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < alfabet2.length; i++){
        if(char === alfabet2[i]){
            return i+1
        }
    }
    return null
}

function excelCell(cell){
    let result3 = 0
    let cellLength = cell.length
    for(var i = 0; i < cellLength; i++){
        let charVal = findAlfabet(cell[i])
        result3 = result3 + (26 ** (cellLength-1-i)) * charVal
    }
    return result3
}

console.log(excelCell("AB"))
console.log(excelCell("AA"))
console.log(excelCell("ZGB"))
console.log(excelCell("BAG"))

console.log("===== Exercise No 3 =====")

function anagram(str1, str2){
    let strSplit1 = str1.split("")
    let strSplit2 = str2.split("")
    if(strSplit1.length != strSplit2.length){
        return false
    }
    for(var i = 0; i < strSplit1.length; i++){
        var result4 = false
        for(var j = 0; j < strSplit2.length; j++){
            if(strSplit1[i] == strSplit2[j] && (strSplit1[i] != null || strSplit2[j] != null)){
                strSplit1[i] = null
                strSplit2[j] = null
                result4 = true
                break
            }
        }
        if(result4 == false){
            break
        }
    }
    return result4
}

console.log(anagram("ABC","BAC"))
console.log(anagram("ABC","BAD"))

console.log("===== Exercise No 3v2 =====")

function anagram2(arr1, arr2){
    let cekArr1 = arr1.split("").sort().join("")
    let cekArr2 = arr2.split("").sort().join("")
    if(cekArr1 === cekArr2){
        return true
    }else if(cekArr1 !== cekArr2){
        return false
    }
}

console.log(anagram2("ABC","BAC"))
console.log(anagram2("ABC","BAD"))

console.log("===== Exercise No 4v2 =====")

function tangga(a){
    if(a > 1){
        return tangga(a-1) + tangga(a-2)
    }else{
        return 1
    }
}

console.log(tangga(2))
console.log(tangga(3))
console.log(tangga(4))
console.log(tangga(5))
console.log(tangga(6))
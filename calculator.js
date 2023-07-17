console.log("===== First Way Bukan Callback=====")
function calculator(a, b){
    return a + b
}

function displayer(something){
    console.log(something)
}

let result = calculator(5, 5)
displayer(result)

console.log("===== First Way Callback =====")
function calculator3(a, b){
    return a + b
}

function displayer3(something3){
    console.log(something3(5,10))
}

let result3 = calculator3
displayer3(result3)

console.log("===== Second Way Bukan Callback=====")
function calculator2(a, b){
    let res = a + b
    displayer(res)
}

function displayer2(something2){
    console.log(something2)
}


calculator2(4,5)


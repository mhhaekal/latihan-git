function factorial(num){
    if(num === 1 || num === 0){
        return 1
    }else{
        return num * factorial(num-1)
    }
}

console.log(factorial(6))

/* 5 = 120 (func(5)*func(4)*func(3)*func(2)*func(1))
 4 = 4 * 3!
 3 = 3 * 2!
 2 = 2 * 1!
 1 = 1 * 0!
 0 = 1
 5 = func(5)

    func(5)

*/
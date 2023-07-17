// let n = 5
// let stair = " "
// for(var i = 0; i <= n; i++){
//     for(var j = n - 1; j >= i; j--){
//         stair = stair + " "
//     }
//     for(var k = 1; k <= i; k++){
//         stair = stair + "#"
//     }
//     stair = stair + "\n"
//     console.log(stair)
// }

function staircase(n) {
    let stair = ''
    for (let i = 1; i <= n; i++) {
        for (let j = n - 1; j >= i; j--) {
            stair += ' '
        }
        for (let k = 1; k <= i; k++) {
            stair += '#'
        }
        stair += "\n"
       
    }
    console.log(stair)
}

staircase(6)
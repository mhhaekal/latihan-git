console.log("-----Exersice Batch 3 Nomor 5-----")


function suit(choices){
    var pilihan = ["rock","scissor","paper"] // 0 1 2
    var computer = pilihan[Math.floor(Math.random() * 3)]
    // if(choices == "rock"){
    //     if(computer == "rock"){
    //         return "draw"
    //     }else if(computer == "scissor"){
    //         return "win"
    //     }else{
    //         return "lose"
    //     }
    // }
    console.log("player choose ",choices)
    if(choices == computer){
        console.log("computer choose ",computer)
        return "draw"
    }else if(choices == "rock"){
        console.log("computer choose paper")
        return (computer == "paper") ? "win":"lose"
    }else if(choices == "paper"){
        console.log("computer choose scissor")
        return (computer == "scissor") ? "win":"lose"
    }else if(choices == "scissor"){
        console.log("computer choose rock")
        return (computer == "rock") ? "win":"lose"
    }
}

console.log(suit("paper"))
// console.log(Math.floor(Math.random() * 3))

//Math.ceil() => dibulatkan keatas
//Math.floor() => dibulatkan keatas
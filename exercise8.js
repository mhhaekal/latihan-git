console.log(" ===== Exercise 8 Nomor 1 ===== ")

class Pegawai{
    constructor(){
        this.jamKerja = 0
        this.totalGaji = 0
    }
    tambahJamKerja(jam){
        this.jamKerja = this.jamKerja + jam

    }
}

class PegawaiFullTime extends Pegawai{
    constructor(){
        super()
        this.gaji = 0
    }
    hitungTotalGaji(){
        if(this.jamKerja > 6){
            this.gaji = 75000
        }else{
            this.gaji = 100000
        }
        this.totalGaji = this.jamKerja * this.gaji
    }

}

class PegawaiParTime extends Pegawai{
    constructor(){
        super()
        this.gaji = 0
    }
    hitungTotalGaji(){
        if(this.jamKerja > 6){
            this.gaji = 30000
        }else{
            this.gaji = 50000
        }
        this.totalGaji = this.jamKerja * this.gaji
    }
}

let haekal = new PegawaiFullTime()
haekal.tambahJamKerja(10)
haekal.hitungTotalGaji()
console.log(haekal)

let hafizh = new PegawaiFullTime()
hafizh.tambahJamKerja(15)
hafizh.hitungTotalGaji()
console.log(hafizh)

console.log(" ===== Exercise 8 Nomor 2 ===== ")

class ShootingGame{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2

    }
    getRandomItem(){
        let items = ["health","power"]
        let random = Math.floor(Math.random()*2)
        let item = items[random]

        let items2 = [0,10]
        let random2 = Math.floor(Math.random()*2)
        let item2 = items2[random2]

        return {[item]:item2}
    }
    start(){
        let isDead = false
        while(!isDead){
            console.log(this.player1.showStatus())
            console.log(this.player2.showStatus())
            console.log("===============")

            this.player1.useItem(this.getRandomItem())
            this.player2.useItem(this.getRandomItem())

            this.player1.hit(this.player2.power)
            this.player2.hit(this.player1.power)

            console.log(this.player1.showStatus())
            console.log(this.player2.showStatus())

            if(this.player1.health <=0 || this.player2.health <= 0){
                isDead = true
            }
        }
        console.log("===== END =====")
        if(this.player1.health > 0){
            console.log(this.player1.name, " is the winner")
        }else{
            console.log(this.player2.name, " is the winner")
        }

    }
}

class Player{
    constructor(name){
        this.name = name
        this.health = 100
        this.power = 10
    }
    hit(power){
        this.health = this.health - power

    }
    useItem(item){
        for(let i in item){
            if(i === "health"){
                this.health = this.health + item[i]
            }else{
                this.power = this.power + item[i]
            }

        }
        console.log(this.name+" use "+JSON.stringify(item))
    }
    showStatus(){
        return this
    }
}

let player1 = new Player("Haekal")
let player2 = new Player("Hafizh")

let arena = new ShootingGame(player1,player2)
arena.start()
// console.log(arena.getRandomItem(10))
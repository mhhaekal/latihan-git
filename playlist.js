
class Music{
    constructor(title, author, list){
        this.title = title
        this.author = author
        this.list = list
    }
}

class Playlist extends Music{
    constructor(title, author, list){
        super(title, author, list)
    }
    play(){ //mainkan music pertama
        // play = music[i]

        return this.title+" Sedang Diputar"
    }
    next(){ //mainkan music selanjutnya
        // play = music[i+1]
        return this.title+" Akan Diputar"
    }
    prev(){ //mainkan music sebelumnya
        // play = music[i-1]
        return this.title+" Akan Diputar"
    }
    shuffle(){

    }
}

let music1 = new Music("AAA","Alpha",1)
let music2 = new Music("BBB","Beta",2)
let music3 = new Music("CCC","Charlie",3)

console.log(music1)
console.log(music2)
console.log(music3)
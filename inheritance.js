class Product{
    constructor(){
        this.productName
        this.price
    }

    getProductName(){
        return this.productName
    }

    setProductName(productName){
        this.productName = productName
    }
}

class Book extends Product{
    constructor(){
        super() //kalau sudah extends harus pakai super()
        this.author
    }

    getAuthor(){
        return this.author
    }

    setAuthor(author){
        this.author = author
    }
}

const book1 = new Book()
book1.setProductName("How to make money")
book1.setAuthor("Haekal")

console.log(book1)

class Animal{
    name = "default"
    speed = 0
    // constructor(){}
}
class Rabbit extends Animal{
    // constructor(){}
}
const kucing = new Animal()
const rabbit1 = new Rabbit()

console.log(book1 instanceof Animal)
console.log(book1 instanceof Product)
console.log(book1 instanceof Book)

console.log(kucing)
console.log("rabbit1 => ", rabbit1)

// const book1 = new Book("pengen cepet kaya",10000)













// class Book{
//     constructor(){
//         this.productName
//         this.price
//         this.author
//     }
// }
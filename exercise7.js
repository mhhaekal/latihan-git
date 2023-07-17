class Product{

    static productList = []

    constructor(){
        this.productName
        this.price
        // productList.push(this)
    }

    get getProductName(){
        return this.productName
    }

    set setProductName(productName){
        this.productName = productName
    }

    set setPrice(price){
        this.price = price
    }
}

class Transaction{
    constructor(products){
       this.cart = []
       /* 
            [
                Product {name , price , qty , total}
                Product {name , price , qty , total}
            ]
       */
       this.total = 0
    }
    //{name: 'abs', qty:2, price:}
    // name , qty
    addToCart(productName, qty){
        for(var item of Product.productList){
            // console.log(item)
            if(productName == item.productName){
                var priceTotal = item.price * qty
                var order = {...item, quantity:qty, total:priceTotal}
                this.cart.push(order)
                this.total = this.total + priceTotal
                return 
            }
        }

        console.log("barang tidak ada")
    }

    get showTotal(){
        return this.total
    }

    get checkout(){
        Object.freeze(this)
        return
    }
}

// =======================================

    var product1 = new Product()
    product1.setProductName = "RTX 3090"
    product1.setPrice = 12000000

    var product2 = new Product()
    product2.setProductName = "Cube Gaming"
    product2.setPrice = 500000

    Product.productList.push(product1, product2)

    console.log(Product.productList)

    var trans1 = new Transaction()
    trans1.addToCart("RTX 3090", 1000)
    // trans1.addToCart("RTX 3050", 1)
    console.log(" trans1 => ",trans1)

    var trans2 = new Transaction()
    trans2.addToCart("Cube Gaming", 2)
    trans2.addToCart("RTX 3090", 3)

    console.log(" trans2 => ", trans2)

console.log("===== Exercise 7 Nomor 3 =====")

const array1 = [
    {name:"student 1", email:"student1@gmail.com"},
    {name:"student 2", email:"student2@gmail.com"},
]

const array2 = [
    {name:"student 1", email:"student1@gmail.com"},
    {name:"student 3", email:"student3@gmail.com"},
]

function mergeArray(arr1, arr2){
    // return [...arr1, ...arr2]
    var result = []
    for(var item of arr1){
        var find = false
        for(var res of result){
            if(res?.name == item.name){
                find = true
            }
        }
        if(!find){
            result.push(item)
        }
    }
    for(var item2 of arr2){
        var find = false
        for(var res of result){
            if(res?.name == item2.name){
                find = true
            }
        }
        if(!find){
            result.push(item2)
        }
    }
    return result
}
console.log(mergeArray(array1,array2))


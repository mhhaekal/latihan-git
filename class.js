class User {
    name = "halo guys"
    age = 10000
    static throne = true
    #secret;
    constructor(name, age){
        console.log(" object dibuat ")
        this.name = name;
        this.age = age;
        this.#secret = "rahasia"
    }
    work(){
        console.log(this.name," adalah orang")
    }
    getSecret(){
        return this.#secret
    }
}
console.log(User)

var haekal = new User("Hafizh Haekal", 22)
haekal.work()
console.log(haekal)
haekal.age = 20
haekal.play = true
console.log(haekal)

var test = new User("test123", 30)
test.work()
console.log(test)

console.log(haekal.secret)

console.log(haekal.getSecret())
// console.log(User.work())


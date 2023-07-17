class Student{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }

    setName(name){
        if(name){
            this.name = name
        } else{
            this.name = "Kosong"
        }
        
    }
}

var haekal = new Student()
// haekal.setName("Haekal")
haekal.setName()
haekal.getName()

console.log(haekal)
class Stack{
    #maxSize
    #container = []
    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }
    #isFull(){
        return this.#container.length >= this.#maxSize
    }
    #isEmpty(){
        return this.#container.length == 0
    }

    push(element){
        if(!this.#isFull()){
            this.#container.push(element)
        }else{
            console.log("stack overflow")
        }
    }
    pop(){
        if(this.#isEmpty()){
            this.#container.pop()
        }else{
            console.log("stack underflow")
        }
        
    }
    getElements(){
        return this.#container
    }
}

let stack1 = new Stack(5)
stack1.push(1)
stack1.push(3)
stack1.push(5)
stack1.pop()
stack1.push(9)
stack1.push(11)
stack1.push(13)
stack1.push(15)

console.log(stack1.getElements())
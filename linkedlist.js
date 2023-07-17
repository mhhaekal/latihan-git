// let list = {
//     value: 1,
//     next:{
//         value:2,
//         next:{
//             value:3,
//             next:{
//                 value:4,
//                 next:null
//             }
//         }
//     }
// }

// console.log(list.value)
// console.log(list.next.value)
// console.log(list.next.next.value)
// console.log(list.next.next.next.value)

class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    add(element){
        let node = new Node(element)
        let current
        if(this.head == null){
            this.head = node
        }else{
            current = this.head //{next:...}
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size = this.size + 1
    }
    
    printList(){
        let current = this.head
        console.log(current)
        while(current){
            console.log(current.element)
            current = current.next
        }
    }
    insertAt(element,index){
        if(index < 0 || index > this.size){
            return console.log("please enter a valid index")
        }else{
            let node = new Node(element)
            let curr = this.head
            if(index == 0){
                node.next = this.head
                this.head = node
            }else{
                curr = this.head
                let prev
                let it = 0
                while(it < index){
                    it++
                }
                for(let i = 0; i < index; i++){
                    prev = curr
                    curr = curr.next
                }
                prev.next = node
                node.next = curr
            }
            this.size = this.size + 1
        }
    }
}



let objLinkedList = new LinkedList()

objLinkedList.add("A")
objLinkedList.add("B")
objLinkedList.insertAt("C",2)

objLinkedList.printList()

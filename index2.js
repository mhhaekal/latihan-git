const Queue = require("./queueExercise")

let obj1 = new Queue()

obj1.addQueue("Fried Chicken")
obj1.addQueue("Rice")
obj1.addQueue("Fruit Salad")
obj1.addQueue("Fried Tofu")
obj1.addQueue("French Fries")

console.log(obj1.print())

obj1.run()
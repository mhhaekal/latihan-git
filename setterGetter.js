let user = {
    firstname: "Hafizh",
    lastname: "Haekal",
    //set untuk merubah data
    set fullname(value){
        var splitValue = value.split(" ")
        this.firstname = splitValue[0]
        this.lastname = splitValue[1]
    },
    //get untuk mengambil atau melihat data
    get fullname(){
        // return this.firstname+" "+this.lastname
        return `${this.firstname} ${this.lastname}`
        // return `${user.firstname} ${user.lastname}`
    }//get harus ada return

}
user.fullname = "Test 123"
console.log(user.fullname)
console.log(user.firstname, user.lastname)


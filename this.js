//this dipakai ketika ingin memanggil atribut yang ada di dirinya sendiri
'strict mode'
console.log(this)

function test(){
    this.a = 10
    console.log(this)
}

test()
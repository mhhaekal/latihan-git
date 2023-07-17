const jajanan = [
    {item:"pisang goreng", price:2000},
    {item:"chiki", price:5000},
    {item:"kopi", price:6000}
]

function jajan(duit, item, callback){
    const sisa = duit - item.price
    if(sisa <= 0){
        console.log("dah miskin bang")
    }else{
        callback(sisa)
    }
}

const jajanPromise = (duit, item) => {
    const sisa = duit - item.price
    return new Promise((resolve, reject) => {
        if (sisa < 0) {
            reject("keluar anda")
        } else {
            resolve(sisa)
        }
    })
}

jajanPromise(15000, jajanan[0])
.then((res) => {
    console.log(" sisa => ", res)
    return jajanPromise(res, jajanan[1])
})
.then((res) => {
    console.log(" sisa => ", res)
    return jajanPromise(res, jajanan[1])
})
.then((res) => {
    console.log(" sisa => ", res)
    return jajanPromise(res, jajanan[1])
})

.catch(err => {
    console.log(err)
})

.finally(() => {
    console.log("pulang")
})




// jajan(15000, jajanan[0], (sisa) => {
//     console.log(sisa)
//     jajan(sisa, jajanan[2], (sisa) => {
//         console.log(sisa)
//         jajan(sisa, jajanan[1], (sisa) => {
//             console.log(sisa)
//             jajan(sisa, jajanan[0], (sisa) => {
//                 console.log(sisa)
//             })
//         })
//     })
// })



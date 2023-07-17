var myPromise = new Promise((resolve, reject) => {
    let isError = false
    if(isError){
        reject("Error")
    }else{
        resolve("Success")
    }
})

myPromise.then((res) => {
    console.log(" then => ", res)
})
.catch(err => {
    console.log(" err => ", err)
})
.finally(() => {
    console.log("finally")
})
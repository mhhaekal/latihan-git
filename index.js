
const Queue = require('./exercise11');

const queue = new Queue()

queue.pesan("steak")
queue.pesan("nasi goreng")
queue.pesan("ayam bakar")
queue.pesan("gorengan")
queue.pesan("hainam")
queue.pesan("batagor")
queue.pesan("bakso")

// queue.antrian()

// queue.ambilPesanan()

queue.proses()


// setInterval(() => {
//  console.log('ok');
// }, Math.ceil(Math.random()*10*1000));
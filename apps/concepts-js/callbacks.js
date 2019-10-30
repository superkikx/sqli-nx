
const producer = (value,cb) => {
    setTimeout(
        () => cb(value * 10)
    ,3000 * Math.random())
}


//---------------------------

const consummer = data => {
    console.log('result',{data})
}

// consummer(producer(10))
producer(10, consummer)
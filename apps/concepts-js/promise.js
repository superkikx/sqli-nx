const producer = (value) => {

    return new Promise(asyncProcess)

    function asyncProcess(resolve,reject){
        setTimeout(
            () => resolve(value * 10)
        ,3000 * Math.random())
    }

}


//---------------------------

const consummer = data => {
    console.log('result',{data})
    return data;
}

// consummer(producer(10))


/* producer(10)
    .then(consummer)
    .then(data => data * 2)
    .then(consummer)
    .then(producer)
    .then(consummer)
    .catch(err => console.log(err)) */

async function run(){
     const res = await producer(10)
     consummer(res)
}
run()
console.log('Done !')


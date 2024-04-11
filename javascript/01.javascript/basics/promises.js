
const promises = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('task is complete'); 
        resolve();
    }, 4000)
})


promises.then(()=>{
    console.log("promise consumed")
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("async task")
        resolve();
    }, 3000)
}).then(()=>{
    console.log("resolved")
})
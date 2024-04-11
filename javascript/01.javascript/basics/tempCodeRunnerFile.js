promises = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('task is complete'); 
        resolve();
    }, 3000)
})


promises.then(()=>{
    console.log("promise consumed")
})
// const myState = ['kashmir', 
//     'kulgam', 
//     'srinagar', 
//     'maharasrat', 
//     'assam', 
//     'dehli',
//     1947,
//     'tamil Nadu']; 
// // for (let i = 0  ; i < myState.length; i++)
// // {
// //     if (typeof myState[i] !== 'string')
// //     continue;
// //     console.log(myState[i])
// // }
// myState.forEach(element => console.log(element));




const names = ['youtube', 'facebook', 'instagram', 'netflix', 'amazon']



for (const i of names)
{
    console.log(i)
}


const symbols = {
    yt :"youtube", 
    ig : 'instagram', 
    fb : 'Facebook', 
}
for (const i in symbols)
{
    // console.log(symbols[i])
    console.log(`key is : ${i} and value is :  ${symbols[i]}`)
}
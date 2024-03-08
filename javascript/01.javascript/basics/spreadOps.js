// let returned = Math.max(3,3,4,2,43,34,210)
// console.log(returned)


// var myObj = {}
// Object.assign(myObj, {a:1,b:2,c:3}, {d:1,e:2,f:3})
// console.log(myObj)


// function maxArgs (a,b)
// {
//     return  a+ b
// }

// console.log(maxArgs(2,3))
// var myA = [3,4]
// console.log(maxArgs(...myA))


// function maxArgs2 (...args){
//     let max = 0; 
//     for (const arg of args) {
//         if (arg > max)
//         max = arg
//     }
//     return max
// }
// console.log(maxArgs2(23,3,4,3,33))
function maxArgs3 (a,b,...args){
    let sum = a + b;
    max = Math.max(...args)
    console.log(max)
    return [max, sum]
}
console.log(maxArgs3(2,200,3,4,5,2,4,99,2,100));
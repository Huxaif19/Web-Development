var testArray = [2,4,6,3,1,54,5];
console.log(testArray.fill(0,3,6))    //fill(value , start ,end)
const myNumbers = [23,24,25,26]
const result = myNumbers.filter((num) =>  num < 25)
console.log(result);

var users = ['huxaif', 'yasir', 'faisal', 'rehan', 'asim', 'qurat']
// console.log(users.slice(1,4))
users.splice(2,3,"huzaif")
console.log(users)

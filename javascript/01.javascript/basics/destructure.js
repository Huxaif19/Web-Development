// const user = ["xyz", 2, 'admin']; 
// var role = user[2]
// var name = user[0]
// var [name,coursecount, role] = user;
// console.log(name+ role);



const myUser = {
    name : 'huxaif', 
    courseCount : 4, 
    role : 'admin'
}
console.log(myUser.role)



const {name, courseCount, role} = myUser
console.log(name)
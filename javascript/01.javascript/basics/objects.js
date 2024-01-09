var  user = {
    firstName: "Huzaif",
    lastName : "shah",
    role : "Admin",
    loginCount : 12, 
    fbSignIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    info : function () 
    {
        console.log(`${this.firstName} ${this.lastName} ${this.role} ${this.loginCount} ${this.fbSignIn, this.courseList}`)
    }
};
// console.log(user.firstName)
// console.log(user["lastName"])
// user.loginCount = 44; 
// console.log(user.loginCount)
// console.table(user)
var courseList = true; 
console.log(user.getCourseCount())
user.buyCourse('react js course')
console.log(user.getCourseCount())
user.info();
var User = function (firstName , courseCount) {
    this.firstName = firstName; 
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`course count is ${this.courseCount}`)
    };
};



User.prototype.getFirstName = function() 
{
    console.log(`the first name is : ${this.firstName}`)
}
var hitesh = new User ('hitest', 4);
// console.log(hitesh);
// hitesh.getCourseCount();
// hitesh.getFirstName()
if (hitesh.hasOwnProperty('firstName'))
{
    hitesh.getFirstName()
}

var sam = new User('sam', 1);
// console.log(sam);
// sam.getCourseCount();
sam.getFirstName()

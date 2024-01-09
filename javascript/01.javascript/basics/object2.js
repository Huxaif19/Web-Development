var User = {
    name : "", 
    getUserName: function() {
        console.log(`user name is : ${this.name}`)
    }
    
};

var huxaif = Object.create(User);


huxaif.name = "huxaif"
console.log(huxaif)


var sam = Object.create(User,{
    name:{value:"sam"}, 
    course_count : {value:3}
});
sam.getUserName();
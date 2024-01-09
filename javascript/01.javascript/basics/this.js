console.log(this)


var user = {firstName : "huxaif", 
                courseCount : 4, 
                getCourseCount : function () {
                    console.log(this)
                    function sayHello() 
                    {
                        console.log("hello");
                        console.log(thisf)
                    }
                    sayHello()
                }
}


user.getCourseCount()
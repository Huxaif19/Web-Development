const Huxaif = {
    firstName : 'Huzaif', 
    lastName : 'shah', 
    role : "admin", 
    courseCount : 3 , 
    getInfo : function () {
         console.log(`firstName is ${this.firstName}
        lastName is ${this.lastName}
        role is ${this.role}
        courses taken ${this.courseCount} `);
    }
};



const dj = {
    firstName: "Rock", 
    lastName : "Dj", 
    role : "sub-admin", 
    courseCount : 4
}; 
// Huxaif.getInfo()

// dj.getInfo()   // brrowing this method

// Huxaif.getInfo.bind(dj)();
let djInfo = Huxaif.getInfo.bind(dj);  // gives the refrence
djInfo();

Huxaif.getInfo.call(dj);  // directly calls 
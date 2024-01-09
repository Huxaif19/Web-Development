// function init() 
// {
//     var firstName = 'faisal'

//     function sayFirstName () 
//     {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var name = init();
// name()



function doAdd(x) 

{
    return function(y)
    {

        return x + y;
    }
};


var add = doAdd(5)
console.log(add(4))
// curring .....
console.log(doAdd(10)(3))
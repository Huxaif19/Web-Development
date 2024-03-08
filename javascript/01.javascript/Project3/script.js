const courses = [
    {
        name: "Complete ReactJs course", 
        price : "2.1"
    },
    {
        name: "Complete Angular course", 
        price : "1.1"
    },
    {
        name: "Complete MERN course", 
        price : "4"
    },
    {
        name: "Complete C++ course", 
        price : "2"
    },
];


function generateList (){

    const ul = document.querySelector('.ul-course');
    ul.innerHTML = ''
    courses.forEach(course => {
        const li = document.createElement('li'); 
        li.classList.add('.li-item');
        const name  = document.createTextNode(course.name);
        li.appendChild(name); 
        const span = document.createElement('span');
        span.classList.add('float-right');
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li)
    });
}

// function generateList () 
// {
//     const ul  = document.querySelector(".ul-course"); 
//     ul.innerHTML = '';
//     courses.forEach(course => 
//         {
//             const li = document.createElement('li');
//             li.classList.add('.li-item'); 
//             const name = document.createTextNode(course.name);
//             li.appendChild(name); 


//             const span = document.createElement('span');
//             const price = document.createTextNode("$" + course.price);
//             span.appendChild(price);

//             li.appendChild(span);
//             ul.appendChild(li);
//         })

// }



window.addEventListener("load", generateList);

const button1 = document.querySelector('.sort-btn');
button1.addEventListener('click',()=>{
    courses.sort((a,b)=>a.price - b.price);
    generateList();
})


const button2 = document.querySelector('.sort-btn2');
button2.addEventListener('click',()=>{
    courses.sort((a,b)=>b.price - a.price);
    generateList();
})
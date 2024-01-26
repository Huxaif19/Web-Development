const courses=[{
    name:"Complete ReactJs course", 
    price :"2.3"
},
{
    name:"Complete C++ course", 
    price :"2"
},{
    name:"Complete Python course", 
    price :"3"
},{
    name:"Complete MERN course", 
    price :"4"
}];


function generateList(){
    const ul = document.querySelector('.list-group');
    ul.innerHTML = ""
    courses.forEach(courses=>{


        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(courses.name)
        li.appendChild(name)


        const span = document.createElement('span')
        span.classList.add('span')
        const price = document.createTextNode("$"+ courses.price)
        span.appendChild(price)



        li.appendChild(span)

        ul.appendChild(li)
    })
}

// generateList()
window.addEventListener('load', generateList)


const sortlow = document.querySelector('.SortBtn1');
sortlow.addEventListener('click', ()=>{
    courses.sort((a,b)=>{return a.price-b.price})
    generateList()
});
const hightolow = document.querySelector('.SortBtn2');
hightolow.addEventListener('click', ()=>{
    courses.sort((a,b)=>{return b.price-a.price})
    generateList()
});

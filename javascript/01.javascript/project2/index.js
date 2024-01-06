const red = document.querySelector('.color-red')
const cyan = document.querySelector('.color-cyan')
const violet = document.querySelector('.color-violet')
const orange = document.querySelector('.color-orange')
const pink = document.querySelector('.color-pink')




const center = document.querySelector(".center")

const getBGColor = (element) => 
{
    return window.getComputedStyle(element).backgroundColor;
};



// var colorElement = getBGColor(cyan);






const colorChanger  = (element , color) => {
    return element.addEventListener(("mouseenter"), () =>
    {
        center.style.background = color;
    })
};


colorChanger(red, getBGColor(red))
colorChanger(cyan, getBGColor(cyan))
colorChanger(violet, getBGColor(violet))
colorChanger(orange, getBGColor(orange))
colorChanger(pink, getBGColor(pink))
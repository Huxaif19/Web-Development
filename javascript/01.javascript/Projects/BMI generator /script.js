const form = document.querySelector('form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const heigth = parseInt(document.querySelector('#height').value)
    const weigth = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if (heigth === '' || heigth < 0 ||isNaN(heigth)){
        results.innerHTML = 'enter a valid height'
    }
    else if (weigth === '' || weigth < 0 ||isNaN(weigth)){
        results.innerHTML = 'enter a valid height'
    }
    else {
        const bmi =  (weigth / ((heigth * heigth)/ 10000)).toFixed(1)
        if (bmi < 18.6) {
        results.innerHTML = `<span> uderweigth : ${bmi} </span>`
        }
        else if (bmi >=18.6  && bmi < 24.9) {
        results.innerHTML = `<span> Normal : ${bmi} </span>`
        }
        else if (bmi >= 24.9){
        results.innerHTML = `<span> overweigth : ${bmi} </span>`
        }
    }
});
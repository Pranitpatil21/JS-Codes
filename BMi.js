const form = document.querySelector('form');

// this use case will give empty value
    // const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit',function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)){ //at place of height != NaN we used the latest method which is used mostly isNan()
        results.innerHTML = "Please give a valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){ //at place of height != NaN we used the latest method which is used mostly isNan()
        results.innerHTML = "Please give a valid weight";
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
    }


    

})
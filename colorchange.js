const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')


buttons.forEach(function(button){        //passing all buttons
    button.addEventListener('click',function (e){           //adding event listner to each button   
        if(e.target.id == 'grey'){                           //Which element was clicked (e.target)
            body.style.backgroundColor = e.target.id;
          }                                            
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
          }
         if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
          }
         if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
          }
    })
})
/*The loop runs one time when the page loads.

Inside that loop, you are attaching event listeners to each button.

After that, the loop finishes forever.
It does NOT run again when you click.*/
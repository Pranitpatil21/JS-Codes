 const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
 
setInterval(function(){          //to conitious see uodated time we need to used set interval
  
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

} , 1000);       //2000 = 2sec 
 
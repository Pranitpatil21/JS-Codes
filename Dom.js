/*

 1) window.document

 2) document.getElementById('title')

 3) document.getElementById('title').id

   OR

 3) document.getElementById('title').getAttribute('id')


 4) document.getElementById('title').class
   -->  undefined


 4) document.getElementById('title').className

  -- >  'heading'

   OR

 4) document.getElementById('title').getAttribute('class')

5) document.getElementById('title').setAttribute('class','test') //use to change the class name we can check in element

6) 
const value = document.getElementById('title')
value.style.backgroundColor = 'Yellow'
value.style.padding = '10px'
value.style.color = 'red'

7)
const title = document.getElementById('title')   //title contains  

// <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>  

title.innerText  //example we will get only h1 text
title.textContent // example we will get all the content inside the h1 tag eg.span data also printed

8) document.getElementsByClassName('heading')

9)document.querySelector('h1') //This will select only first h1

10)  document.querySelector('#title')
     document.querySelector('.heading')

11)
document.querySelector('ul')
const uli = document.querySelector('ul')
const turngreen =  uli.querySelector('li')
turngreen.style.color = 'green';
turngreen.style.padding = '10px';
turngreen.innerText
turngreen.innerText = 'five'

12)
const tempList = document.querySelectorAll('li') //all list items selected

tempList.style.color = 'green'   //error

tempList[0].style.color = 'green'

tempList.forEach( function (items) {
  items.style.backgroundColor = 'yellow'
})

13)
const tempclasslist = document.getElementsByClassName('list-item')
//HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

 tempclasslist.forEach(function (li){
    console.log(li)
 }
//  ERROR can not use foreach on collection

- Array.from(tempclasslist)
- const myconvertedarray = Array.from(tempclasslist)
- myconvertedarray.forEach(function (li){
    console.log(li)
  })

- myconvertedarray.forEach(function (li){
    li.style.color = 'grey'
  })


 */
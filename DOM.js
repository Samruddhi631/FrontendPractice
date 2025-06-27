// DOM-Document Object Model

// pillars of DOM 
// -Selecting Element ✅✅
// -Changing HTML✅✅
// -Changing CSS ✅✅
// -Event Listeners ✅✅

// for selecting html element use :
// document.querySelector('h1')

// now lets change the html text :
// var h1=document.querySelector('h1')
// h1.innerHTML="Vartaman ankho ka dhoka hai"

// now lets change the :
// h1.style.color="yellow"

// you can also perform an action usingEvent Listener :
//  let clicked=false;
// h1.addEventListener('click',function(){
//     if(!clicked){
//         console.log ("Hello guysss")
//         clicked=true
//         h1.style.color="black"
//         h1.style.backgroundColor="yellow"
//     }else{
//         clicked=false
//         h1.style.color="yellow"
//         h1.style.backgroundColor="black"
//     }
// })

// types of Events:
// -click
// -mousemove
// -dblclick
// -drag
// -keyboard

// when you select element by document.queryselector it will only slect the first 
// occurrence of that named element:
// var h1=document.querySelector("h1")
// h1.innerHTML="changed"

// to select all elements of same names you can use document.querySelectorAll
//  which wil1 return list of elements in the form of node list: 
// var h1=document.querySelectorAll("h1")
// h1[1].innerHTML="changed"

// difference between innerHTML and textContent:

var box=document.querySelector("#box")
box.innerHTML="<h1>hello</h1>"
box.textContent="<h1>hello</h1>"

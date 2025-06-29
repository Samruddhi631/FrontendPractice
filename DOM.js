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

// var box=document.querySelector("#box")
// box.innerHTML="<h1>hello</h1>"
// box.textContent="<h1>hello</h1>"

// Math.random() project - for delay
// -change color 
// -IPL Winner 

// setTimeout() project - controlled loop
// -friendship requet

// setInterval() project
// -mp3 downloader

// 1. getAttribute and setAttribute -image swap
// 2. creating an element-chutki image creation
// 3. Mouse Events,Keyboard Events,Scroll Events,DoubleClick 
// Events,Wheel Events

// 1. Json data to Frontend
// 2. Event bubbling
// 3. Managing local storage

// let arr=["samruddhi","kavya","jayesh","vedika"]
// arr.forEach((elem,idx)=>{
//     console.log(elem,idx)
// })

let arr=[
    {
        user:"Samruddhi",
        age:19,
        married:false,
        isStatus:"Stranger",
        img:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww"
    },
    {
        user:"Kavya",
        age:16,
        married:false,
        isStatus:"Stranger",
        img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww"
    },
    {
        user:"Jayesh",
        age:13,
        married:false,
        isStatus:"Stranger",
        img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww"
    },
    {
        user:"Manisha",
        age:46,
        married:true,
        isStatus:"Stranger",
        img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
]
let main=document.querySelector('main')
function hero(){
    let sum='';
    arr.forEach((elem,idx)=>{
    sum+=`<div class="card">
    <img src=${elem.img} alt="">
    <h1>${elem.user},${elem.age}</h1>
    <h4>Married: ${elem.married}</h4>
    <h5>${elem.isStatus}</h5>
    <button id=${idx}>Add Friend</button>
    </div>`
    })
    main.innerHTML=sum
}
hero()
main.addEventListener('click',(dets)=>{
    let goldenValue=arr[dets.target.id]
    if(goldenValue.isStatus=='Stranger'){
        goldenValue.isStatus='Friends'
    }
    else{
        goldenValue.isStatus='Stranger'
    }
    hero()
})
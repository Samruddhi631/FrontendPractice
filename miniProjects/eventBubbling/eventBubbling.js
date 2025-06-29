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
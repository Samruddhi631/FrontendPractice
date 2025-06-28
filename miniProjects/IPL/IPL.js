
let teams=[
    {
        team:"CSK",
        pri:"yellow",
        sec:"darkgreen"
    },
    {
        team:"MI",
        pri:"blue",
        sec:"gold"
    },
    {
        team:"KKR",
        pri:"purple",
        sec:"gold"
    },
    {
        team:"SRH",
        pri:"orange",
        sec:"black"
    },
    {
        team:"RCB",
        pri:"red",
        sec:"black"
    },
    {
        team:"RR",
        pri:"pink",
        sec:"purple"
    },
    {
        team:"GT",
        pri:"darkblue",
        sec:"gold"
    }
]
let h1=document.querySelector("h1")
let button=document.querySelector("button")
button.addEventListener('click',()=>{
    let num=Math.floor(Math.random()*teams.length);
    let winner=teams[num]
    h1.innerHTML=winner.team;
    h1.style.backgroundColor=winner.pri;
    h1.style.color=winner.sec
})
var btn=document.querySelector("button")
var h3=document.querySelector("h3")
var flag=0
btn.addEventListener('click',function(){
    if(flag==0){
    btn.innerHTML='Adding...'
    h3.innerHTML='request sending...'
    h3.style.color='gold'
    setTimeout(function(){
          btn.innerHTML='Remove Friend'
          h3.innerHTML='Friends'
          h3.style.color='green'
    },3000);
    flag=1
    }
    else{
      btn.innerHTML='Add Friend'
      h3.innerHTML='Stranger'
      h3.style.color='red'
      flag=0
    }
})
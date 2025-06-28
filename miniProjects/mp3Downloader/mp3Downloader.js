var btn=document.querySelector('button')
var percent=document.querySelector('#percent')
var growth=document.querySelector('#growth')
var grow=0;
var flag=0;
btn.addEventListener('click',function(){
          if(flag==0){
              var int=setInterval(function(){
                  grow++
                  percent.innerHTML=`${grow}%`
                  growth.style.width=`${grow}%`
            },100)
          setTimeout(()=>{
            clearInterval(int)
            btn.innerHTML='Downloaded'
          },10000)
          flag=1
          }
          else{
            var response=confirm("Download again?")
            if(response==true){
                flag=0
                grow=0
                btn.innerHTML='Download again'
            }
          }
})

// cb func-> a fucntion in which another function is passe while the time of calling
// HOF -> a function which accepts another function as a parameter or returns another functionis HOF
// closure -> a function which returns another function and the returned function uses the variable
//  of parent function and closer is also a higher order function

// function abcd(val) {
//   console.log("inside the main function");
//   val()
// }
// abcd(function () {
//   console.log("outside of the main function");
// });

// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function timeDelay(fn){
//     setTimeout(fn,3000)
// }
// timeDelay(() => console.log("hello guys"))

// Implement your own version of `.map()` as a higher-order function.

//  let arr=[1,2,3,4,5]
//  let ans=arr.map((val)=>{
//     return va1+2
//  })
//  console.log(ans)

// let arr=[1,2,3,4,5,6]
// function sap(arr,fn){
//     let newArr=[];
//     for(let i=0;i<=arr.length-1;i++)
//     {
//         newArr.push(fn(arr[i]))
//     }
//     return newArr
// }

// let ans=sap(arr,(val)=>{
//     return val+1
// })
// console.log(ans)

// Write a function that uses closures to create a counter.

// function counter(){
//     let count=0
//     return function(){
//         return count++
//     }
// }
// let makeCount=counter()
// console.log(makeCount())
// console.log(makeCount())
// console.log(makeCount())
// console.log(makeCount())

// Implement a function that limits how many times another function can be called (Closure + HOF).

// function limiter(fn,limit){
//     let calledTimes=0
//     return function(){
//         if(calledTimes<limit){
//             calledTimes++;
//             fn();
//         }
//     }
// }

// let caller=limiter(() => console.log("hello"), 3);
// caller();
// caller();
// caller();
// caller();

// Create a function that takes a callback and executes it after every `n` seconds indefinitely.

// function clalled(fn,interval){
//     setInterval(fn,interval*1000)
// }
// clalled(()=> console.log("hello"),2)

// Implement a function that returns a function with a preset greeting (Closure).

// function greetKaro(greeting){
//     return function(user){
//         console.log(`${greeting} ${user}`)
//     }
// }
// let fn=greetKaro("hello")
// fn("samruddhi")
// fn("Kavya")

// Implement a function that takes a callback and only executes it once (HOF + Closure).

// function executeOnce(fn){
//     let executed=false;
//     return ()=>{
//         if(!executed){
//         executed=true;
//         fn()
//     }
// }
// }
// let caller=executeOnce(()=>console.log("hello"));
// caller();
// caller();

// Implement a function that throttles another function (HOF + Closures).

function throt(fn,delay){
    let lastCall=0;
    return function(){
        let current=Date.now();
        if(current-lastCall>=delay){
            lastCall=current
            fn()
        }
        else{
            console.log("try after 5sec")
        }
    }
}

let throttle=throt(()=>console.log("hello dear"),5000)


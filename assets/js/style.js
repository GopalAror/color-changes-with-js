let body = document.querySelector("body")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let hax = 0xffffff;
function color (){
let a = Math.floor(Math.random()*hax).toString(16)
let  b= '#' + a.padStart(6,"0");
return b 
}
// console.log(b)

let interval;
start.addEventListener("click", function () {
    if(!interval)
    interval = setInterval(function () {
        body.style.background = color()}, 1000)
});
stop.addEventListener("click",function(){
    clearInterval(interval)
    interval=null;
})
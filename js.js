var a = document.getElementById="load"
function Myfuc(){
    load.style.display="none";
}
setInterval(()=>{
    const time = document.querySelector("#clock");
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day_night = "AM";
    if(hrs > 12){
      day_night = "PM";
      hrs = hrs - 12;
    }
    if(sec < 10){
      sec = "0" + sec;
    }
    if(min < 10){
      min = "0" + min;
    }
    if(hrs < 10){
      hrs = "0" + hrs;
    }
    time.textContent = hrs + " : " + min + " : " + sec + " "+ day_night;
  });

$(document).ready(function(){
  $(".j1").on('click',function(){
    $(".calcu").toggle()
  })
  $(".j2").on('click',function(){
    $(".fex").toggle()
  })
})
var v1=document.getElementsById("calcu")
function c1(){

  confirm("Are you sure you want to close it?");
  location.reload;
calcu.style.display='none';
}

var v2=document.getElementsById("fex")
function c2(){

  confirm("Are you sure you want to close it?");
  location.reload;
fex.style.display='none';
}

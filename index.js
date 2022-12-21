
var dest=new Date("dec 18, 2022 10:00:00").getTime();
var x = setInterval(function(){

  var now = new Date().getTime();

  var diff= dest - now;

  var days=Math.floor(diff / (1000*60*60*24));

  console.log(days)


  var hours=Math.floor((diff % (1000 * 60 * 60 *24))  / (1000 *60 *60))

  var minutes=Math.floor((diff % (1000 * 60 * 60 )) / (1000 *60 ))

  var seconds=Math.floor((diff % (1000 * 60 )) / (1000));

  document.getElementById("demo").innerHTML="<b>SALE COUNTDOWN</b>" +" "+days + "d: " + hours + "h: " + minutes +"m: " + seconds + "s ";
} ,1000)


var c=0;
var y=setInterval(function(){



if(c===0){
  var a=document.querySelector("#btn");
  var b=a.style.color="orange";
  c++;
}
else{
  var a=document.querySelector("#btn");
  var b=a.style.color="white";
  c--;
}


},1000)



// count=0;
// var z= document.querySelector("#hamp");
// var n= function(){
// if(count==0){
//   z.addEventListener('click', function (event) {
//       var a=document.querySelector("#card1");
//        a.style.marginLeft ="0";
//   });
// count++;
// }
//
// if(count==1){
//   z.addEventListener('click', function (event) {
//       var a=document.querySelector("#card1");
//        a.style.marginLeft ="0";
//   });
// count--;
// }
//
//
// }





// var z= document.querySelector("#hamp");
//
//
//   z.addEventListener('click', function () {
//       var a=document.querySelector("#card1");
//        a.classList.add(".card1");
//   });

//
// count=0;
// var z= document.querySelector("#hamp");
//
// if(count==0){
//   z.addEventListener('click', function (event) {
//       var a=document.querySelector("#card1");
//        a.style.marginLeft ="0";
//   });
// count++;
// }



count=0;
var z= document.querySelector("#hamp");

var l=setInterval(function(){
  if(count==0){
    z.addEventListener('click', function (event) {
        var a=document.querySelector("#card1");
         a.style.marginLeft ="0";
    });
  count++;
  }

  else{
    z.addEventListener('click', function (event) {
        var a=document.querySelector("#card1");
         a.style.marginLeft ="-18rem";
    });
  count--;
  }

},1000)

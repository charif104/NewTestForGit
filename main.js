 

 let x = document.getElementById("Audio1");
 let y = document.getElementById("Audio2");
 let z = document.getElementById("Audio3");


 let image1 = document.createElement("img");
 image1.src= "cover/backstreet.jpeg" ;
 image1.style.height= '20 vh';
 image1.style.width='15vw';

 let image2 = document.createElement("img");
 image2.src= "cover/Beatles.jpg"  ;

 let image3 = document.createElement("img");
 image3.src= "cover/eminem.jpg" ;
 let src = document.getElementById("boxbild");
  src.append(image1) ;
   
   
  let txt1 = $('#text1').text();
  let txt2 = $('#text2').text();
  let txt3 = $('#text3').text();
   $( "#infotext" ).append(txt1);

 
$("#playbtn i ").click(function(){
  

});
//---------------------------------
 // play button 1 for the first singer 
$(".playbtn1 i ").click(function(){
  $(".playbtn1 i ").hide();
  $("#pause i").show();
  $( "#infotext" ).empty();
  $( "#infotext").append(txt1);
 
src.empty();
src.append(image1);
  
  x.play();
  y.pause();
  z.pause();
});

$(".playbtn1 i ").dblclick(function(){
  x.pause();
});

//---------------------------------------

//---------------------------------------
// play button 2 
$(".playbtn2 i ").click(function(){

  $( "#infotext" ).empty();
  $( "#infotext" ).append(txt2);

  src.empty();
  src.append(image2);

  y.play() ;
  x.pause();
  z.pause();

});
$(".playbtn2 i ").dblclick(function(){
  y.pause() ;
  });
//------------------------------------------------

//------------------------------------------------
//play button 3 
 $(".playbtn3 i ").click(function(){

  $( "#infotext" ).empty();
  $( "#infotext" ).append(txt3);

  src.empty();
  src.append(image3);

  x.pause();
  y.pause();
  z.play();

  $(".playbtn3 i ").dblclick(function(){
    z.pause() ;
    });
});
//---------------------------------------------------------




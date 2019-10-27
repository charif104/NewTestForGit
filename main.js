 

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


 if( $(".playbtn1 i ").is(":visible")){
  $("#pause1 i").hide();
 }
 
 if( $(".playbtn2 i ").is(":visible")){
  $("#pause2 i").hide();
 }
 if( $(".playbtn3 i ").is(":visible")){
  $("#pause3 i").hide();
 }




$("#playbtn i ").click(function(){
});


//---------------------------------
 // play button 1 for the first singer 

 $(".playbtn1 i ").click(function(){
 
  $(".playbtn1 i ").hide();
  $("#pause1 i").show();

  $( "#infotext" ).empty();
  $( "#infotext").append(txt1);
 
  image3.remove();
  image2.remove();
  src.append(image1);
  
  x.play();
  y.pause();
  z.pause();
});

$("#pause1 i ").click(function(){
  x.pause();
  $(".playbtn1 i ").show();
  $("#pause1 i").hide();

});

//---------------------------------------

//---------------------------------------
// play button 2 
$(".playbtn2 i ").click(function(){

  $(".playbtn2 i ").hide();
  $("#pause2 i").show();

  $( "#infotext" ).empty();
  $( "#infotext" ).append(txt2);

  image1.remove();
  image3.remove();
  src.append(image2);

  y.play() ;
  x.pause();
  z.pause();

});
$("#pause2 i ").click(function(){
  y.pause() ;
  $(".playbtn2 i ").show();
  $("#pause2 i").hide();
  });
//------------------------------------------------

//------------------------------------------------
//play button 3 
 $(".playbtn3 i ").click(function(){

  $(".playbtn3 i ").hide();
  $("#pause3 i").show();

  $( "#infotext" ).empty();
  $( "#infotext" ).append(txt3);
  
  image1.remove();
  image2.remove();
  src.append(image3);

  x.pause();
  y.pause();
  z.play();

  $("#pause3 i ").click(function(){
    z.pause() ;
    $(".playbtn3 i ").show();
    $("#pause3 i").hide();

    });
});
//---------------------------------------------------------




 

  // create the audio
  let x= document.createElement("AUDIO");
  x.setAttribute("src","media/bac1.mp3");

  let y= document.createElement("AUDIO");
  y.setAttribute("src","media/beatles.mp3");

  let z= document.createElement("AUDIO");
  z.setAttribute("src","media/eminem.mp3");
//----------------------------------------------------------
 
//----------------------------------------------------------
 // create the image
 let image1 = document.createElement("img");
 image1.setAttribute("src","cover/backstreet.jpeg");
 image1.style.height= '20 vh';
 image1.style.width='15vw';

 let image2 = document.createElement("img");
 image2.src= "cover/Beatles.jpg"  ;
 let image3 = document.createElement("img");
 image3.src= "cover/eminem.jpg" ;

 let src = document.getElementById("boxbild");
  src.append(image1) ;
  //-------------------------------------------------------
  
  //-------------------------------------------------------
  // create the text
  let txt1 = $('#text1').text();
  let txt2 = $('#text2').text();
  let txt3 = $('#text3').text();
   $( "#infotext" ).append(txt1);
//-----------------------------------------------------------

//----------------------------------------------------------
  // show and hide beween play and pause button

 if( $(".playbtn1 i ").is(":visible")){
  $("#pause1 i").hide();
 }

 if( $(".playbtn2 i ").is(":visible")){
  $("#pause2 i").hide();
 }
 if( $(".playbtn3 i ").is(":visible")){
  $("#pause3 i").hide();
 }
 if( $(".playbtn i ").is(":visible")){
  $("#pausebtn i").hide();
 }

//---------------------------------
 // play button 1 for the first singer (old code )

   $('.playbtn1 i ,#pause1 i ').click(function(){
    $('.playbtn1 i ,#pause1 i').toggle();
    if($("#pause1 i ").is(":visible")){
      pausemusic(y); 
      pausemusic(z); 
      playmusic(x);
      showText(txt1);
      removeImage();
      showImage(image1);

    }else{
      pausemusic(x);
    }
});

//---------------------------------------

//---------------------------------------
// play button 2 
 $('.playbtn2 i ,#pause2 i ').click(function(){
  $('.playbtn2 i ,#pause2 i').toggle();
  if($("#pause2 i ").is(":visible")){
    pausemusic(x,z); 
    playmusic(y);
    showText(txt2);
    removeImage();
    showImage(image2);
    

  }else{
    pausemusic(y);
  }
});
//------------------------------------------------

//------------------------------------------------
//play button 3 
$('.playbtn3 i ,#pause3 i ').click(function(){
  $('.playbtn3 i ,#pause3 i').toggle();
  if($("#pause3 i ").is(":visible")){
    pausemusic(y,x); 
    playmusic(z);
    showText(txt3);
    removeImage();
    showImage(image3);

  }else{
    pausemusic(z);
  }
});
//---------------------------------------------------------
//_______________jämsamma metoder ----------------------------------_

function playmusic(startplay){
  startplay.play();
}
function pausemusic(_audio){
  _audio.pause();
  }

function showText(_text){
  $( "#infotext" ).empty();
  $( "#infotext").append(_text);
}

function showImage(_image){
  src.append(_image);
}
function removeImage(){
  src.innerHTML= ("");
}


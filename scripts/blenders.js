// Stuart Daniells
// c0829441
// Term Project

// on window load (DOM tree contruction)
$(document).ready(function(){

   // on click menu bars add below classes
   $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
   })

   // on click again remove the added classes
   $('nav ul li a').click(function(){
      $('.fa-bars').removeClass('fa-times');
      $('nav').removeClass('nav-toggle');
   });

   // // image shows after video ends
   // var video = $('.video-container vid1');
   // video.onended('ended',function(){
   //       video.attr('src', 'resources/images/after_homepage_video_img.jpg');
   // });

   // on dot slider control click, display the respective video slider
   $('.dot1').click(function(){
      $('.vid1').css('display', 'block');
      $('.vid2').css('display', 'none').fadeOut(400);
      $('.vid3').css('display', 'none').fadeOut(400);
   })

   $('.dot2').click(function(){
      $('.vid1').css('display', 'none').fadeOut(2000);
      $('.vid2').css('display', 'block').fadeIn(2000);
      $('.vid3').css('display', 'none');
   })

   $('.dot3').click(function(){
      $('.vid1').css('display', 'none');
      $('.vid2').css('display', 'none');
      $('.vid3').css('display', 'block');
   })

   var checkingScrollEffect = function(){
      if(getLastItem(window.location.pathname) == 'index.html' || 
      getLastItem(window.location.pathname) == '' ||
      getLastItem(window.location.pathname) == null ||
      getLastItem(window.location.pathname) == undefined)
      {
         return true;
      }
   }

   // on window scroll, 
   $(window).on('scroll load', function(){
      if($(window).scrollTop() > 10){
         // adding the background colour for nav on scroll
         $('#header').css('background-color', '#333');
         $('#header').addClass('header-active');
      }
      else if(checkingScrollEffect()){
         // removing the background colour for nav on scroll to top
         $('#header').css('background-color', 'transparent');
         $('#header').removeClass('header-active');
      }
   })

   // extracting the last sub-folder name from the pathname
   const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);

   //add transparent background to only the home page (index.html) -> nav bar
   if(checkingScrollEffect())
   {
      $('#header').css('background-color', 'transparent');
   }

   // toggling between hiding/revealing a para with slow easing
   $(".clickToggle").click(function(evt) {
      $(this).prev().toggle("slow");

      // adding show less & show more text on alternate clicks
      if($(this).text() == "Show more")
         $(this).text("Show less");
      else
         $(this).text("Show more");

      // handling default behaviour for older browsers as well as IE
      if(evt.preventDefault){
          evt.preventDefault();
      }else{
          evt.returnValue = false; 
      };
  }); // end click
});
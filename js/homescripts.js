$(document).ready(function(){

// play button
   $('#play_button').click(function(){
     $('.container-home').fadeOut();
     $('#trailer_video').fadeIn("slow");
     $('#c').hide();
   });

   $('.trailer_text').click(function(){
     $('.container-home').fadeOut();
     $('#trailer_video').fadeIn("slow");
     $('#c').hide();
   });

   $('#trailer_video').click(function(){
     $('#trailer_video').fadeOut("slow");
     $('.container-home').fadeIn();
     $('#c').fadeIn(2000);
   });
   $('.exit').click(function(){
     $('#trailer_video').fadeOut("slow");
     $('.container-home').fadeIn();
     $('#c').fadeIn(2000);
   });})
/* Mobile Menu */
$(".nav-side .nav-toggle").on("click", function(e) {
  e.preventDefault();
  $(this).parent().toggleClass("nav-open");
});

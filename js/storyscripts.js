/* Mobile Menu */
$(".nav-side .nav-toggle").on("click", function(e) {
  e.preventDefault();
  $(this).parent().toggleClass("nav-open");
});
$("#expand-nav").on("click", function(){
  $("#sub-nav").toggleClass("no-display");
});
/* Prev and Next Chapters */
var waypoint = new Waypoint({
  element: document.getElementById('trigger-para'),
  handler: function(direction) {
    if (direction == "down"){
      $('#next-chapter')
        .css("display", "inline-block")
        .css("right", "0")
        .css("top", "auto");
      $('#previous-chapter')
        .css("display", "inline-block")
        .css("left", "0")
        .css("top", "auto");
      $('.arrows-chapters').css('width', '50vw');
    }
  }
})

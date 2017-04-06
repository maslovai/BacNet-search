
function Item(name){
  this.href = name.href;
  this.src  = name.src;
  this.p  = name.paragraph;
}


   $("#hamburger").on("click", function(){
     $(this).css("visibility", "hidden");
     $("#nav").css("visibility", "visible");
   })

var handleMainNav = function(){
  $('#nav-responsive').on('click', '.tab', function(e) {
    e.preventDefault();
    $('#wrapper').hide();
    $('"#my-' + $(this).class + '"').fadeIn();
  });
}

// <a href="">
//   <img id = "img-gallery" src="images/tulips.jpg" alt="">
//   <p>Image caption</p>
// </a>

$(function(){

function Item(name){
  this.href = name.href;
  this.src  = name.src;
  this.p  = name.paragraph;
}

var pageView = {};

   $("#hamburger").on("click", function(){
     $(this).toggle();
     $("#nav").css("visibility","visible");
   })

pageView.handleMainNav = function(){
  $('#nav-responsive').on("click", "a", function(e) {
    e.preventDefault();
    console.log(e.target);
    $('#wrapper').hide();
    var toID = $(this).attr("class");
    //console.log(id);
    // console.log(this);
    $("'#" + toID + "'").show();
  });
}
pageView.handleMainNav();
});

// <a href="">
//   <img id = "img-gallery" src="images/tulips.jpg" alt="">
//   <p>Image caption</p>
// </a>

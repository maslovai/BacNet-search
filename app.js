$(function(){

function Item(name){
  this.a = name.a;
  this.src  = name.src;
  this.p  = name.paragraph;
}

 var pageView = {};

   $("#hamburger").on("click", function(){
     $(this).toggle();
     $("#nav-responsive").css("visibility","visible");
   })

pageView.handleMainNav = function(){
  $('#nav-responsive').on("click", "a", function(e) {
    e.preventDefault();
    //console.log(e.target);
    $('#wrapper').hide();
    //$('#wrapper').fadeIn();
    var toID = '#'+ $(this).attr("class");
    console.log(toID);
    $('toID').fadeIn();
    //$('#wrapper').fadeIn();
    //$(this).parent().next().fadeIn(200).children(toID);

    //console.log(id);
    // console.log(this);
    //$('"#' + toID + '"').show();
  });
}
pageView.handleMainNav();
});

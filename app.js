$(function(){

// using Handlebars to create gallery items
  var itemContent=[{
    href: "www.github.com/maslovai/portfolio",
    src: "images/tulips.jpg",
    p: "This is my portfolio on github"
  }]

  var theItem = Handlebars.compile($("gallery-item-template").html())(theItem);
  console.log(theItem);
  //var finalItem = theItem(itemContent);

  //$('#gallery.li').append(theItem);















  var pageView = {};

   $("#hamburger").on("click", function(){
     $(this).toggle();
     $("#nav-responsive").css("visibility","visible");
   })

pageView.handleMainNav = function(){
  $('#nav-responsive').on("click", "a", function(e) {
    e.preventDefault();
    //console.log(e.target);
    $('#wrapper').find('div').hide();
    //$('#wrapper').fadeIn();
    var toID = '#'+ $(this).attr("class");
    console.log(toID);
    $(toID).fadeIn();
    //$('#wrapper').fadeIn();
    //$(this).parent().next().fadeIn(200).children(toID);

    //console.log(id);
    // console.log(this);
    //$('"#' + toID + '"').show();
  });
}
pageView.handleMainNav();
});

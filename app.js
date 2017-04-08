$(function(){

// using Handlebars to create gallery items
  var itemContent=[{
    href: "www.github.com/maslovai/portfolio",
    src: "images/tulips.jpg",
    p: "This is my portfolio on github"
  },
  {
    href: "www.github.com/maslovai/portfolio",
    src: "images/tulips.jpg",
    p: "This is my other portfolio on github"
  }]

  var theItem = Handlebars.compile($("#gallery-item-template").html())(itemContent);
  console.log(theItem);
  $('#gallery.li').append(theItem);

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
    
  });
}
pageView.handleMainNav();
});

$(function(){

// using Handlebars to create gallery items

var theItem = Handlebars.compile($("#gallery-item-template").html());
  var itemContent=[{
    url: "https://github.com/maslovai/portfolio",
    link: "images/tulips.jpg",
    paragraph:"This is my portfolio on github"
  },
  {
    url: "https://github.com/maslovai/bus-mall",
    link: "images/Screen Shot 2017-04-08 at 2.53.23 PM.png",
    paragraph: "This is a 201 project on github"
  }];

  console.log(itemContent);
  console.log (theItem(itemContent));
  for (var i=0; i<itemContent.length; i++){
    $('#gallery').append(theItem(itemContent[i]));
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
    $('#wrapper').find('div').hide();
    //$('#wrapper').fadeIn();
    var toID = '#'+ $(this).attr("class");
    console.log(toID);
    $(toID).fadeIn();

  });
}
pageView.handleMainNav();
});

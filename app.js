$(function(){

// using Handlebars to create gallery items

var theItem = Handlebars.compile($("#gallery-item-template").html());
  // console.log(itemContent);
  // console.log (theItem(itemContent));
  // for (var i=0; i<itemContent.length; i++){
  //   $('#gallery').append(theItem(itemContent[i]));
  // }
  itemContent.map(ele =>{
    $('#gallery').append(theItem(ele))
  });
   $("#hamburger").on("click", function(){
     $(this).toggle();
     $("#nav-responsive").css("visibility","visible");
   })
pageView.handleMainNav();
});

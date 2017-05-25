$(function(){

$("#hamburger").on("click", function(){
     $(this).toggle();
     $("#nav-responsive").css("visibility","visible");
   })
 });

// var theItem = Handlebars.compile($("#gallery-item-template").html());
// itemContent.filter(ele => {
//   if (ele.number<=2) return ele;
// }).map(ele =>{
//   $('#gallery').append(theItem(ele))
// });
// pageView.handleMainNav();

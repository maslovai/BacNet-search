(function(module) {
  var pageView = {};
  pageView.initIndex = function(){
   var theItem = Handlebars.compile($("#gallery-item-template").html());
   itemContent.map(ele =>{
    $('#gallery').empty().append(theItem(ele))
  });
}
  module.pageView = pageView;
})(window);


// pageView.handleMainNav = function(){
//   $('#nav-responsive').on("click", "a", function(e) {
//     e.preventDefault();
//     //console.log(e.target);
//     $('#wrapper').find('div').hide();
//     //$('#wrapper').fadeIn();
//     var toID = '#'+ $(this).attr("class");
//     console.log(toID);
//     $(toID).fadeIn();
//   });
// }

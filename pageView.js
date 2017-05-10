(function(module) {

  var pageView = {};

  var theItem = Handlebars.compile($("#gallery-item-template").html());
  itemContent.filter(ele => {
    if (ele.number<=2) return ele;
  }).map(ele =>{
    $('#gallery').append(theItem(ele))
  });
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

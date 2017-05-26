(function(module) {
  var pageView = {};
  pageView.initIndex = function(){
    $("#my-contact").show();
    $("#my-portfolio").show();
    $("#my-resume").show();
   var theItem = Handlebars.compile($("#gallery-item-template").html());
   $('#gallery').empty();
   itemContent.map(ele =>{
    $('#gallery').append(theItem(ele))
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

(function(module) {

  var pageView = {};
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
  module.pageView = pageView;
})(window);

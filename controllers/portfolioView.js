(function(module){
  const myPortfolio = {};
  myPortfolio.show = function(){
    $("#my-portfolio").show().siblings().hide();

  }
  const ui = function() {
  let $repos = $('#repos');
    $repos.empty();
    $repos.show().siblings().hide();
  };
  var render = Handlebars.compile($('#repo-template').html());
  myPortfolio.index = function(repos) {
    ui();
    $('#repos').append(
      repos.with('name').map(render)
    );
  };
  module.myPortfolio = myPortfolio;
})(window);

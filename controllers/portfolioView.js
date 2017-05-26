(function(module){
  const myPortfolio = {};
  myPortfolio.show = function(){
    $("#my-portfolio").show().siblings().hide();
    $('#repos').show();
  }
  const ui = function() {
  let $repos = $('#repos');
    $repos.empty();
    $repos.show().siblings().hide();
  };
  // var render = Handlebars.compile($('#repo-template').html());
  myPortfolio.listRepos = function(){
    ui();
    repos.requestRepos();
    // $('#repos').append(
    //   reposArray.with('name').map(render)
    // );
  };
  $("#view-repos").click(myPortfolio.listRepos());
  // myPortfolio.listRepos();
  module.myPortfolio = myPortfolio;
})(window);

(function(module){

  const myBlog = {};
  myBlog.show = function(){
    $("#my-blog").show().siblings().hide();

  }
  repos.requestRepos(myPortfolio.index);
  module.myBlog = myBlog;
})(window);

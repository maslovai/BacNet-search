(function(module){

  const myBlog = {};
  myBlog.show = function(){
    $("#my-blog").show;
    $("#my-blog").siblings().hide;
  }
  module.myBlog = myBlog;
})(window);

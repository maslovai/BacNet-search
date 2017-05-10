(function(module){

  const myBlog = {};
  myBlog.show = function(){
    $("#my-blog").show().siblings().hide();
    
  }
  module.myBlog = myBlog;
})(window);

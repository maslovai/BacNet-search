(function(module){

  const myResume = {};
  myResume.show = function(){
    $("#my-resume").show().siblings().hide();

  }
  module.myResume = myResume;
})(window);

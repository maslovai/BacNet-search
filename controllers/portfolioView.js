(function(module){
  const myPortfolio = {};
  myPortfolio.show = function(){
    $("#my-portfolio").show;
    $("#my-portfolio").siblings().hide;
  }
  module.myPortfolio = myPortfolio;
})(window);

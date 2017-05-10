(function(module){
  const myPortfolio = {};
  myPortfolio.show = function(){
    $("#my-portfolio").show().siblings().hide();
    
  }
  module.myPortfolio = myPortfolio;
})(window);

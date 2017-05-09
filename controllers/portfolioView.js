(function(module){
  const myPortfolio = {};
  myPortfolio.show = function(){
    $("#my-portfolio").show;
    $("#my-portfolio").siblings().hide;

    var theItem = Handlebars.compile($("#gallery-item-template").html());
    itemContent.filter(ele => {
      if (ele.number<=2) return ele;
    }).map(ele =>{
      $('#gallery').append(theItem(ele))
    });
  }
  module.myPortfolio = myPortfolio;
})

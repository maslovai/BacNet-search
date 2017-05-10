(function(module){

  const myContact = {};
  myContact.show = function(){
    $("#my-contact").show;
    $("#my-contact").siblings().hide;
  }
  module.myContact = myContact;
})(window);

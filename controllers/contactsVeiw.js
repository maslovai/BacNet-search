(function(module){

  const myContact = {};
  myContact.show = function(){
    $("#my-contact").show().siblings().hide();
    
  }
  module.myContact = myContact;
})(window);

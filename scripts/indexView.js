'use strict';

(function(module){
const index = {};

  index.showIndexPage = function(){
    $('#clonet-principle').show();
    $('#header-container').show();
    $('#request-container').hide();
    $('#barcode-container').hide();
  }

  module.index = index;
})(window);

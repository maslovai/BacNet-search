'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#header-container').show();
    $('#barcode-container').show();
    $('#request-container').hide();
    $('#clonet-principle').hide();
  }

  module.barcode = barcode;
})(window);

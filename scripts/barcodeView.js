'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#header-container').show();
    $('#barcode-container').show();
    $('#request-container').hide();
  }

  module.barcode = barcode;
})(window);

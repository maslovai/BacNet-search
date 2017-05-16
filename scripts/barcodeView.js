'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#header-container').show();
    $('#barcode-container').show();
    $('#request-container').hide();
    $('#section-video-container').show();
    $('#clonet-principle').hide();
    $('#aboutTable').hide();
  }

  module.barcode = barcode;
})(window);

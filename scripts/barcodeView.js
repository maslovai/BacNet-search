'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#barcode-container').show();
    $('#request-container').hide();
    $('#clonet-principle').hide();
    $('#section-video-container').show();
    $('#aside').hide();
    $('#nav-links #barcode-tab').hide().siblings().show();
    $('#header-container').show();
  }

  module.barcode = barcode;
})(window);

'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#header-container').show();
    $('#barcode-container').show();
    $('#request-container').hide();
    $('#clonet-principle').hide();
    $('#section-video-container').hide();
    $('#aside').hide();
    $('#nav-links #barcode-tab').hide().siblings().show();
    //$('#nav-links #clonet-tab').show();
  }

  module.barcode = barcode;
})(window);

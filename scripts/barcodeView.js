'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#barcode-container').show();
    $('#request-container').hide();
    $('#clonet-wrapper').hide();
    $('#section-video-container').show();
    $('#nav-links #barcode-tab').hide().siblings().show();
    $('#header-container').show();
    $('#aboutTable').hide();
    $('#page-name').text('BarGen');
  }

  module.barcode = barcode;
})(window);

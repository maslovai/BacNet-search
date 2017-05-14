'use strict';

(function(module){
const index = {};

  index.showIndexPage = function(){
    $('#clonet-principle').show();
    $('#nav-links #clonet-tab').hide().siblings().show();
    $('#header-container').show();
    $('#aside').show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').hide();
  }

  module.index = index;
})(window);

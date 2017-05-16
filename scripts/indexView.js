'use strict';

(function(module){
const index = {};

  index.showIndexPage = function(){
    $('#clonet-principle').show();
    $('#header-container').show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').show();
  }

  module.index = index;
})(window);

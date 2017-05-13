'use strict';

(function(module){
const index = {};

  index.showIndexPage = function(){
    $('#clonet-principle').show();
    $('#header-container').show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').hide();
  }

  module.index = index;
})(window);

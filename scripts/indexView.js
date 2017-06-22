'use strict';

(function(module){
const index = {};

  index.showIndexPage = function(){
    $('#clonet-wrapper').show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').show();
    $('#page-name').text('Clonet Principles');
    $('#header-container').show();

  }
  module.index = index;
})(window);

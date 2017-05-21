'use strict';

(function(module){
const index = {};

  about.showIndexPage = function(){
    $('#clonet-wrapper').hide();
    $('#nav-links #clonet-tab').hide().siblings().show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').show();

    $('#aboutTable').show(); //this hides our About Us table...

    $('#header-container').hide();

  }

  module.index = index;
})(window);

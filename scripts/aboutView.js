'use strict';

(function(module){
const about = {};

  about.showAboutPage = function(){
    $('#clonet-wrapper').hide();
    $('#nav-links #about-tab').hide().siblings().show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').show();
    $('#about-table').show();
    $('#page-name').text('About Us');
    $('#header-container').show();

  }
 module.about = about;
})(window);

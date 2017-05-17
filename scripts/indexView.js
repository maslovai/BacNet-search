'use strict';

(function(module){
const index = {};

  index.showIndexPage = function(){
    $('#clonet-principle').show();
    $('#nav-links #clonet-tab').hide().siblings().show();
    $('#request-container').hide();
    $('#barcode-container').hide();
    $('#section-video-container').show();

    $('#aboutTable').hide(); //this hides our About Us table...

    $('#header-container').show();

  }
//   var windowObjectReference;
//   index.openRequestedPopup = function() {
//       windowObjectReference = window.open(
//       "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4766386/",
//        "ClonetPrinciplesDescriptio",
//        "width=700,height=500,left = 600, top = 500, scrollbars,status"
//     );
// }
//   //index.openRequestedPopup();

  module.index = index;
})(window);

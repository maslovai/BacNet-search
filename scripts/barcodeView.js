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

  }

  barcode.getValueString = function(numbers) {
    if(numbers[7] >= 23)return 'unknown';
    var difference = [];
    for (var i = 0; i < 7; i++) {
      difference.push(numbers[i] - numbers[7]);
    }
    var code1 = 0, code2 = 0, code3 = 0;
    if(difference[0] <= 2.5)code1 += 1;
    code1 *= 2;
    if(difference[1] <= 2.5)code1 += 1;
    code1 *= 2;
    if(difference[2] <= 3.0)code1 += 1;

    if(difference[3] <= 2.5)code2 += 1;
    code2 *= 2;
    if(difference[4] <= 2.5)code2 += 1;
    code2 *= 2;
    if(difference[5] <= 3.5)code2 += 1;

    if(difference[6] <= 2.5)code3 = 1;

    return('' + code1 + code2 + code3);
  }

  barcode.submit = function() {
    var numbers = $('#barcodeEntry').val().split(' ').map(function(ele) {
      return parseFloat(ele);
    });
    var value = barcode.getValueString(numbers);
    $('#barcodeRecord').val($('#barcodeRecord').val() + value + '\n');
  }

  barcode.reset = function() {
    $('#barcodeRecord').val('');
  }

  module.barcode = barcode;
})(window);

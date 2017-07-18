'use strict';

(function(module){
const barcode = {};

  barcode.showBarcodePage = function(){

    $('#barcode-container').show();
    $('#request-container').hide();
    $('#clonet-wrapper').hide();
    $('#header-container').show();
    $('#page-name').text('BarGen');
    $('#section-video-container').show();
  }
  barcode.getValueString = function(numbers) {
     if(numbers[7] >= 25)return 'unknown';
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
   barcode.getLoadValue = function(numbers){
     if(numbers[7]<=15){
       return ('10^7')
     } else if(numbers[7]>15 && numbers[7]<=17){
       return ('10^6')
     } else if (numbers[7]>17 && numbers[7]<=19){
       return ('10^5')
     } else if (numbers[7]>19 && numbers[7]<=21){
       return ('10^4')
     } else if(numbers[7]>21 && numbers[7]<=23){
       return ('10^3')
     } else if (numbers[7]>23 && numbers[7]<25){
       return ('10^2')
     }
   }

   barcode.submit = function() {
     // /[^\d\.]+/ is a regular expression:
     // []: any of these characters
     // ^ the inverse of the following characters (all characters not indicated here)
     // \d: any decimal (0-9)
     // \.: a period (.)
     // +: one or more of the preceeding.
     // the whole expression divides the numbers in the string using substrings of one or more characters that aren't digits 0-9 or a period.
     var numbers = $('#barcodeEntry').val().split(/[^\d\.]+/).map(function(ele) {
       return parseFloat(ele);
     });
     var load = barcode.getLoadValue(numbers);
     var value = barcode.getValueString(numbers);
     $('#barcodeRecord').val($('#barcodeRecord').val() + value + '\n');
     $('#bcLoad').val($('#bcLoad').val()+ load +'\n');
   }
  //  barcode.submitTriplet = function() {
   $('#bcQuerySubmit').on('click',  function(e) {
     e.preventDefault();
     var triplet = $('#barcodeRecord').val();
     localStorage.setItem('triplet', triplet);
     if (localStorage.length != 0) {
       $('#bacCode').val(localStorage.getItem('triplet'));
       $('#sequence').attr('placeholder',''+ $('#bacCode').val()+'');
     }
     //console.log('triplet:', triplet);
   })
   barcode.reset = function() {
     $('#barcodeRecord').val('');
     $('#bcLoad').val('');
     $('#barcodeEntry').val('').attr('placeholder','1 2 3 4 5 6 7 8');
   }
  module.barcode = barcode;
})(window);

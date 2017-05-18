'use strict';

(function(module){
  const query = {};
  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-principle-container').hide();
    $('#header-container').show();
    $('#section-video-container').show();
    $('#barcode-container').hide();
    $('#aboutTable').hide(); //this hides our About Us table...
    $('#nav-links #query-request-tab').hide().siblings().show();
  }
  query.getString = function(hospital, barcode){
    console.log(hospital, barcode);
    $.get('/entries/'+hospital+'/'+barcode)
    .then(data =>{
      var listItems = [];
      data.forEach(ele => listItems.push(ele));
      console.log(listItems);

      listItems.map(ele =>
      $('#result-ul').append(`<li>`+ele.antibiotic+ " "+ ele.site +' '+ ele.resistance + ' ' + ele.recommended + `</li>`));
    });
  }

// handling submit:
let $hospital;
let $barcode;
query.submitRequest = function() {
  $('#bac-form').on('click', '#submit', function(e) {
    e.preventDefault();
    $('#result-ul').empty();
    $hospital = $("#hospital-filter").val();
    $barcode = $("#bacCode").val();
    //console.log($hospital, $barcode);
    var response = query.getString($hospital, $barcode);
    //console.log(response);
  })
}
// query.appendListItems = function(responseString){
//   console.log(responseString);
//   var antibioticsListItems = responseString.split('\n');
//   antibioticslistItems.map(ele =>
//     $('#result-ul').append(`<li>`+ ele + `</li>`));
//   }


  $('#reset').on('click', function(){
    $('#hospital-filter').val("All").attr("selected","true");
    $('#sequence').val('').attr("placeholder","barcode");
  });
  query.submitRequest();
  module.query = query;
})(window);

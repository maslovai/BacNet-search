'use strict';

(function(module){
  const query = {};
  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-wrapper').hide();
    $('#header').show();
    $('#section-video-container').show();
    $('#barcode-container').hide();
    $('#aboutTable').hide(); //this hides our About Us table...
    $('#nav-links #query-request-tab').hide().siblings().show();

  }
  query.getString = function(hospital, barcode){
    console.log(hospital, barcode);
    $.get('/entries/'+hospital+'/'+barcode)
    .then(data =>
      {
        var listItems = [];
        data.forEach(ele => listItems.push(ele));
        console.log(listItems);
        $('#result-ul').append(`<li>`+ 'Results for ' + barcode + '</li>');
        listItems.map(ele => {
        $('#result-ul').append(`<li>`+ele.antibiotic+ ',   Resistance: '+ ele.resistance + '%,   Recommended: ' + ele.recommended + `</li>`);
        })
       });
}
let $hospital;
let $barcode;
query.submitRequest = function() {
  $('#bac-form').on('click', '#submit', function(e) {
    e.preventDefault();
    $('#result-ul').empty();
    $('#you-view').hide();
    $hospital = $("#hospital-filter").val();
    $barcode = $("#bacCode").val();
    //console.log($hospital, $barcode);
    var response = query.getString($hospital, $barcode);
    //console.log(response);
  })
}

  $('#reset').on('click', function(){
    $('#you-view').show();
    $('#result-ul').empty();
    $('#hospital-filter').val("Any").attr("selected","true");
    $('#sequence').val('').attr("placeholder","barcode");
  });
  query.submitRequest();


   $('#reset').on('click', function(){
      $('#hospital-filter').val("All").attr("selected","true");
      $('#sequence').val('').attr("placeholder","sequence");
    });



  module.query = query;
})(window);

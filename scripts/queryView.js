'use strict';

(function(module){
  const query = {};
  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-wrapper').hide();
    $('#header').show();
    $('#barcode-container').show();
    $('#section-video-container').show();
    $('#page-name').text("BactNet Query");

  }
  query.getString = function(hospital, barcode){
    //console.log(hospital, barcode);
    // var listItems = [];
    $.get('/entries/'+hospital+'/'+barcode)
    .then(data =>
      {
        if (data.length>2){
        var listItems=data;
        // data.forEach(ele => listItems.push(ele));
        // console.log(listItems);
        $('#result-ul').append(`<li>`+ 'Results for  <bold>' +  barcode +'  at  '+hospital+ '</bold> ' + ': ' + '</li>');
        listItems.map(ele => {
        // $('#result-ul').append(`<li>`+ele.antibiotic+ '  -   Resistance: '+ ele.resistance + '%,   Recommended: ' + ele.recommended + `</li>`);
        // })
        $("#result-table").append('<tr><td>'+ele.antibiotic+'</td><td>  Resistance: <td>'+ele.resistance+'</td> %, Recommended: <td>' +ele.recommended+'</td></tr>');
      })


      }else {
        $('#result-ul').append(`<li>`+ 'Results for  '+'<bold>' +  barcode +'  at  '+hospital+ '</bold> ' + ': UNKNOWN' + '</li>');
      }
       });
}
let $hospital;
let $barcode;
query.submitRequest = function() {
  $('#submit').on('click',  function(e) {
    e.preventDefault();
    $('#result-ul').empty();
    $('#you-view').hide();
    $hospital = $("#hospital-filter").val();
    $barcode = parseInt($("#bacCode").val());
    console.log($hospital, $barcode);
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

  module.query = query;
})(window);

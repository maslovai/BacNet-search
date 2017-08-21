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
  query.getString = function(hospital, barcode, gender, age, inout){
   console.log(hospital, barcode, gender, age, inout);
    // var listItems = [];
    $.get('/entries/'+hospital+'/'+barcode+'/'+gender+'/'+age+'/'+inout)
    .then(data =>
      {
        if (data.length>2){
        var listItems=data;
        $('#result-ul').append(`<li>`+ 'Results for  <style=font:bold>' +  barcode +'  at  '+hospital+  ': ' + '</li>');
        $("#result-table").append('<thead><td>'+'Antibiotic:'+'</td><td>'+'Recommended:</td><td>Resistance:</td></thead>');
        listItems.map(ele => {
          let recColor;
          if (ele.recommended){
            recColor='green'
          } else{
            recColor='red'
          }
          //console.log('color:  ' + recColor);
        $("#result-table").append('<tr><td>'+ele.antibiotic+'</td><td style = color:'+recColor+'>' + ele.recommended + '</td><td> ' + ele.resistance+'% </td></tr>');
      })
      }else {
        $('#result-ul').append(`<li>`+ 'Results for  '+'<bold>' +  barcode +'  at  '+hospital+ '</bold> ' + ': UNKNOWN' + '</li>');
      }
       });
}
let $hospital;
let $barcode;
let $gender;
let $age;
let $inout;
//query.submitRequest = function() {
  $('#submit').on('click', function(e) {
    e.preventDefault();
    $('#result-table').empty();
    $('#result-ul').empty();
    $('#you-view').hide();

    $hospital = $("#hospital-filter").val();
    $barcode = $("#bacCode").val();
    $gender = $("#gender-filter").val();
    $age = $("#age-filter").val();
    $inout = $("#inout-filter").val();
    //console.log($hospital, $barcode);
    var response = query.getString($hospital, $barcode, $gender, $age, $inout);
    $('#sequence').val('').attr("placeholder","barcode");
    //console.log(response);
  })
//}

  $('#reset').on('click', function(){
    $('#you-view').show();
    $('#result-ul').empty();
    $('#result-table').empty();
    $('#hospital-filter').val("Any").attr("selected","true");
    $('#gender-filter').val("Any").attr("selected","true");
    $('#species-filter').val("Any").attr("selected","true");
    $('#age-filter').val("Any").attr("selected","true");
    $('#inout-filter').val("Any").attr("selected","true");
    $('#sequence').val('').attr("placeholder","barcode");
  });
  //query.submitRequest();

  module.query = query;
})(window);

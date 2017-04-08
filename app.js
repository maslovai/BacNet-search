$(function(){


var theTemplateScript = $("#gallery-item-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "href": "www.github.com/maslovai/portfolio",
    "src": "images/tulips.jpg",
    "p": "This is my portfolio on github"
  };

  // Pass our data to the template
  var theCompiledHtml = '<li>'+theTemplate(context)+'</li>';

  // Add the compiled html to the page
  $('#gallery').append(theCompiledHtml);




  // <a href = "{{}}">
  //   <img id="img-gallery" src = "{{}}">
  //   <p> {{}}</p>





 var pageView = {};

   $("#hamburger").on("click", function(){
     $(this).toggle();
     $("#nav-responsive").css("visibility","visible");
   })

pageView.handleMainNav = function(){
  $('#nav-responsive').on("click", "a", function(e) {
    e.preventDefault();
    //console.log(e.target);
    $('#wrapper').find('div').hide();
    //$('#wrapper').fadeIn();
    var toID = '#'+ $(this).attr("class");
    console.log(toID);
    $(toID).fadeIn();
    //$('#wrapper').fadeIn();
    //$(this).parent().next().fadeIn(200).children(toID);

    //console.log(id);
    // console.log(this);
    //$('"#' + toID + '"').show();
  });
}
pageView.handleMainNav();
});

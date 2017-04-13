$(function(){

// using Handlebars to create gallery items

var theItem = Handlebars.compile($("#gallery-item-template").html());
  var itemContent=[{
    url: "https://github.com/maslovai/portfolio",
    link: "images/tulips.jpg",
    paragraph:"This is my portfolio on github"
  },
  {
    url: "https://maslovai.github.io/bus-mall/",
    link: "images/Screen Shot 2017-04-08 at 2.53.23 PM.png",
    paragraph: "This is a 201 project on github"
  },
  {
    url: "https://mattreyes7.github.io/201-final-project/",
    link: "images/Screen Shot 2017-04-12 at 3.36.56 PM.png",
    paragraph: "This is a 201 final group project"
  }];

  console.log(itemContent);
  console.log (theItem(itemContent));
  for (var i=0; i<itemContent.length; i++){
    $('#gallery').append(theItem(itemContent[i]));
  }

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

  });
}
pageView.handleMainNav();
});
articleView.setTeasers = function() {
  // Truncate logic to show only first two elements within the article body.
  $('.readBlog *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
  When a .read-on link is clicked, we can:
  1. Prevent the default action of a link.
  2. Reveal everything in that particular article now.
  3. Hide that read-on link!
  // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
  $('a').on('click', function(e){
    e.preventDefault();
    $(this).prev().children().css('display', 'block');
    // $('.article-body p').css('display', 'block');
    $(this).hide();
  });
};

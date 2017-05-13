'use strict';

(function(module) {
  var cloneView = {};
  module.cloneView = cloneView;
  cloneView.populateFilters = function(){
    $('section').find('.clone-box').each(function(){
      let myCategory = $(this).attr('data-category');
      let optionTag = '<option value="' + myCategory + '">' + myCategory + '</option>';

      if ($('#category-filter option[value="' + myCategory + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  cloneView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      console.log('working');
      if ($(this).val()) {
        $('#titleCategory').text($(this).val());
        $('article.clone-box').hide();
        // $('section.clone-box').fadeIn('slow');
        console.log('article[data-category="'+ $(this).val() + '"]');
        $('article[data-category="'+ $(this).val() + '"]').fadeIn();
      } else {
        $('article.clone-box').fadeIn();
        $('script.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  cloneView.handleNav = function () {
    $('.nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.nav .tab:first').click();
  };

  cloneView.removeBackground = function () {
    $('#removeImg').on('click', function() {
      $('main').removeClass('background-container');
    });
  };

  cloneView.addBackground = function () {
    $('#addImg').on('click', function() {
      $('main').addClass('background-container');
    });
  };

    cloneView.initIndexPage = function() {
      Topic.all.forEach(function(about) {
        $('#homePage').append(about.toHtml());
        $('#words').text(Topic.numOfWordsAll());
      });
      console.log('working');

      // cloneView.numOfWordsAll();
      cloneView.populateFilters();
      cloneView.handleCategoryFilter();
      cloneView.handleNav();
      cloneView.removeBackground();
      cloneView.addBackground();
    };
  })(window);

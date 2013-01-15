(function ($) {

Drupal.behaviors.myPageSwitcher = {
  attach: function (context, settings) {
    $('.pager-next a, .pager-previous a').click(function() {
      window.location.href = $(this).attr('href');
    });

    $('html').bind('keydown', function(e) {
      if (e.ctrlKey == true && e.keyCode == 39) {
        var pagerNext = $('.pager-next a');
        if (pagerNext.length > 0) {
          pagerNext.trigger('click');
        }
      }
      else if (e.ctrlKey == true && e.keyCode == 37) {
        var pagerPrev = $('.pager-previous a');
        if (pagerPrev.length > 0) {
          pagerPrev.trigger('click');
        }        
      }
    });
  }
};

})(jQuery);

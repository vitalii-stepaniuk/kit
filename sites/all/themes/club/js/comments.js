(function ($) {

Drupal.behaviors.mybehavior = {
  attach: function (context, settings) {
    $('#comments .comment').hover(function() {
      $(this).find('.links').show();
    },
    function() {
      $(this).find('.links').hide();
    });
  }
};


})(jQuery);

(function ($) {
  $.fn.extend({
    'scrollTops': function (options) {
      var defaluts = {}
      var opts = $.extend({}, defaluts, options)
      $(opts.ele).scroll(function () {
        if ($(opts.ele).scrollTop() >= 100) {
          $(opts.activeDom).fadeIn(300)
        } else {
          $(opts.activeDom).fadeOut(300)
        }
      })
      $(opts.activeDom).click(function () {
        $(opts.ele).animate({scrollTop: '0px'}, 1000)
      })
    }
  })
})(window.jQuery)


// bxslider
 $(function() {
      $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        speed: 3000,
        mode: 'fade',
        pause: 5000,
        infiniteLoop: true,
        touchEnabled: false
      });
    });

 
  
// slicknav
  
    $(function() {
      $('#menu-wrap').slicknav({
        prependTo: 'body',
        label: ''
      });
    });

  
    $(function() {
      var navi = ("#menu-wrap, .slicknav_menu");
      var startPos = 0;
      $(window).scroll(function() {
        var currentPos = $(this).scrollTop();
        if (currentPos > startPos) {
          if ($(window).scrollTop() >= 200) {
            $(navi).css("transform", "translateY(-110%)");
          }
        } else {
          $(navi).css("transform", "translateY(0)");
        }
        startPos = currentPos;
      });
    });

  
// navの色変え

    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
          $("#menu").css("background-color", "rgba(13, 0, 85, 0.7)");
        } else {
          $("#menu").css("background-color", "transparent");
        }
      });
    });


    $(function() {
      var pagetop = $('#pagetop');
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      });
      pagetop.click(function() {
        $('body, html').animate({
          scrollTop: 0
        }, 300);
        return false;
      });
    });


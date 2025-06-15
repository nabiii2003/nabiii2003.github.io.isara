$(function(){
    $('.question .arrow').click(function () {
        const $dd = $(this).closest('dt').next('dd');
        $dd.stop().slideToggle(300);
        $(this).toggleClass('is-active');
    });

    
    $('.sec10 .arrow').click(function () {
        const $right = $(this).closest('article').find('.right');
        $right.stop().slideToggle(300); 
        $(this).toggleClass('is-active');
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
        } else {
          $('#totop').fadeOut();
        }
      });
    
      $('#totop').on('click', function(e) {
        e.preventDefault();
        $('html').add('body').animate({ scrollTop: 0 }, 600);
      });

});



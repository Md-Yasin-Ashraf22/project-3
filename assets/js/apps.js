$(function(){



  //preloader js start

  $(window).on('load' , function(){
    $('#preloader').fadeOut(1000)
  })

  //preloader js end

  //back to top button js start
    $(window).on('scroll' , function(){

      var scrollTop = $(this).scrollTop();

      if(scrollTop > 500){
        $('#back_to_top').fadeIn(500);
      }else(
        $('#back_to_top').fadeOut(500)
      )
     
    })

    $('#back_to_top').on('click' , function(){
          $('html,body').animate({
            scrollTop: 0
          },500)
    })

    //back to top button js end

    // nav top to -top css start

    var navHeight= $('nav').height()

    console.log($('nav').height())

    $(window).on('scroll' , function(){
      var scrollSize = $(this).scrollTop()

      if(scrollSize > navHeight){
        $('nav').addClass('animate')
      }else(
        $('nav').removeClass('animate')
      )
    })

    // nav top to -top css end

    // hash link js start

    $('a').on('click' , function(e){
      e.preventDefault();

      var hash = this.hash

      if( this.hash !==''){
        $('html,body').animate({
          scrollTop: $(hash).offset().top,
        },500)
      }
    })

    // hash link js start

    $("#pb-calendar").pb_calendar(
      {
        next_month_button:'<i class="fas fa-arrow-right icon"></i>',
        
        prev_month_button:'<i class="fas fa-arrow-left icon"></i>',
      }
    )


    $('.banner_slider').slick({
      prevArrow : '<i class="banner_slider_icon fas fa-arrow-left"></i>',
      nextArrow: '<i class="banner_slider_icon fas fa-arrow-right"></i>'
    });

    $('.about_slider').slick({
     arrows: false,
     dots: true,
     dotsClass: 'about_slider_dots',
     fade: true,
     autoplay: true,
     autoplaySpeed: 2000,

    });

    // counter up plug in
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    $('.course_slider').slick({
      
      slidesToShow: 3,
      prevArrow : '<i class="course_slider_icon fas fa-arrow-left"></i>',
      nextArrow: '<i class="course_slider_icon fas fa-arrow-right"></i>'
     });

     $('.testimonial_slider').slick({
      prevArrow : '<i class="testi_slider_icon fas fa-arrow-left"></i>',
      nextArrow: '<i class="testi_slider_icon fas fa-arrow-right"></i>'
     });




})
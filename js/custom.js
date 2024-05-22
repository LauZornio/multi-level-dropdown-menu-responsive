$(document).ready(function() {
    //nav burger
    $('.nav-bar').click(function() {
      $('ul.menu').toggleClass('wide');
    });

    //sotto menu
    $('.element-sub').click(function() {
        $('.main-menu>ul.menu>li>ul').toggleClass('wide');
        
    });

    //per la x di nav burger
    $('.nav-bar').click(function() {
      //top-bar e bottom-bar null-bar sono da aggiungere agli span del burger
      $('span.top-bar').toggleClass('trans-x-top');
      $('span.bottom-bar').toggleClass('trans-x-bottom');
      $('span.null-bar').toggleClass('hidden-bar');

      $('header').addClass('scroll');
      $('.header img').addClass('img-logo');
      $('.header').addClass('pad-header');
      $('body').toggleClass('no-scroll');
    });

    //per il menu scroll della pagina add and remove
    $(window).scroll(function(){
          if ($(window).scrollTop() > 0){
      $('header').addClass('scroll');
      $('.header img').addClass('img-logo');
      $('.header').addClass('pad-header');
      $('nav ul li a').addClass('fs-menu');
          }else{
              $('header').removeClass('scroll');
      $('.header img').removeClass('img-logo');
      $('.header').removeClass('pad-header');
      $('nav ul li a').removeClass('fs-menu');
          }
        
        });
});
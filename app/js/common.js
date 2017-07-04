/*****************FancyBox******************/
$(document).ready(function() { 
  $("a.fancyimage").fancybox(); 
}); 
/******************End FancyBox***************/

/****************Owl carousel*************/
$(document).ready(function(){
  $('.first-slider').owlCarousel({
    items: 1,
    navigation: true,
    nav: true,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1,
    animateOut: 'fadeOut',
    mouseDrag: false,
    responsive: { //Адаптация в зависимости от разрешения экрана
      767: {
        nav: true,
        dots: true
      }
    }
  });
});
/****************End Owl carousel*************/

/****************Owl carousel*************/
$(document).ready(function(){
  $('.second-slider').owlCarousel({
    items: 1,
    navigation: true,
    nav: true,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1,
    mouseDrag: false,
    responsive: { //Адаптация в зависимости от разрешения экрана
      767: {
        nav: true,
        dots: true
      }
    }
  });
});
/****************End Owl carousel*************/

/****************Owl carousel*************/
$(document).ready(function(){
  $('.gallery-slider').owlCarousel({
    items: 1,
    navigation: true,
    nav: true,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: false,
    margin: 20,
    autoplaySpeed: 1,
    animateOut: 'fadeOut',
    mouseDrag: false,
    responsive: { //Адаптация в зависимости от разрешения экрана
      767: {
        nav: true,
        items: 2
      }
    }
  });
});
/****************End Owl carousel*************/


/**********************Fixed navigation**************/
$(window).scroll(function(){
  if(document.documentElement.clientWidth < 768) {
    var h = $("header").outerHeight(true);
    
    $('.navbar').toggleClass('navbar-fixed', $(this).scrollTop() > h );
  }
});
/******************End Fixed navigation****************/

/*****************Target in modal**************/
function newMyMobile(e) {
  var h = 480,
  w = 360;
  window.open(e, '', 'scrollbars=1,height='+Math.min(h, screen.availHeight)+',width='+Math.min(w, screen.availWidth)+',left='+Math.max(0, (screen.availWidth - w)/2)+',top='+Math.max(0, (screen.availHeight - h)/2));
}
function newMyTablet(e) {
  var h = 768,
  w = 1024;
  window.open(e, '', 'scrollbars=1,height='+Math.min(h, screen.availHeight)+',width='+Math.min(w, screen.availWidth)+',left='+Math.max(0, (screen.availWidth - w)/2)+',top='+Math.max(0, (screen.availHeight - h)/2));
}
function newMyDesktop(e) {
  var h = 768,
  w = 1366;
  window.open(e, '', 'scrollbars=1,height='+Math.min(h, screen.availHeight)+',width='+Math.min(w, screen.availWidth)+',left='+Math.max(0, (screen.availWidth - w)/2)+',top='+Math.max(0, (screen.availHeight - h)/2));
}
/*******************End Target in modal*****************/

/********************Menu close X************************/
$(".navbar-toggle").click(function(){
  $(".navbar-toggle").toggleClass("navbar-toggle-close");
});
/********************End Menu close X************************/

/********************Dialog window*****************************/
$( function() {
  $( "#dialog-form" ).dialog({
    autoOpen: false,
    resizable:false,
    draggable:false,
    modal:true,
    show: {
      effect: "fade",
      duration: 500
    },
    hide: {
      effect: "fade",
      duration: 500
    }
  });
  
  $( ".dialog" ).on( "click", function() {
    $( "#dialog-form" ).dialog( "open" );
  });
} );

/*******************Scroll To*******************/
$(document).ready(function(){
    $('#up-button').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(header).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(header).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});
/*********************End Scroll To*******************/


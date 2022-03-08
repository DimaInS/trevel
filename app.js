$(document).ready(function(){

    let header = $('#header');
    let headerH;
    let intro = $('#home');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        headerH = header.innerHeight();
        if ( scrollPos > headerH) {
            header.addClass('background');
        } else {
            header.removeClass('background'); 
        }
    });
    $ ('[data-scroll]').on('click',function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html,body').animate( {
            scrollTop: elementOffset - 186
        } ,700 );
    });

        $('.link').on('click', function(e) {
           /* e.preventDefault();   ---убирает свойство ссылки быть ссылкой*/
            $('.link').removeClass('link--active');
            $(this).addClass('link--active');

           
        
        });
    
   

$('.destination-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: false,
    speed:700,
    variableWidth: false,
    responsive:[
         {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3
                 
                 
             }
            
    }, {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    },  {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        } 
      
]
    
 
});

$('.tesimonials-slider__box').slick({

    fade:false,
    variableWidth: false,
    infinite: false,
    vertical: false

});
$('.stories-slider').slick({
    adaptiveHeight: true,
    slidesToShow:4,
    slidesToScroll: 4,
    prevArrow: false, 
    variableWidth: false,
    responsive:[
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                
                
            }
           
   }, {
       breakpoint: 993,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 2
       } 
   },  {
       breakpoint: 705,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1
       }
       } 
     
]


});

$('.header-burger').click(function(event) {
$('.header-burger,.header__nav').toggleClass('active');

//$('body').toggleClass('lock') блокирует скролл страницы при скролле бургера, но скролл срабатывает через раз при использовании бургера
});
$('.link').click(function(event){
    $('.header-burger.active,.header__nav.active').removeClass('active');
    
});

});
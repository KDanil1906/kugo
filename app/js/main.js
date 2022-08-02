$(function () {
    console.log('Как то так я залетел');

    $('.filter-style').styler();
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__slider__btn slider__slider__btn-prev"><img src="./images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider__slider__btn slider__slider__btn-next"><img src="./images/slider-arrow-rigth.svg" alt=""></button>'
    });

    let currentSlide = $('.slider__inner').slick('slickCurrentSlide') + 1;
    let allSlide = $(".slider__inner").slick("getSlick").slideCount
    $(".slider_current_slide").text(currentSlide);
    $(".slider_count_slide").text(allSlide);

    $(".slider__inner").on("afterChange", function(event, slick, currentSlide, nextSlide){
        $(".slider_current_slide").text(currentSlide + 1);
        console.log(currentSlide + 1)
    });

    $('.tab').on('click', function (e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });
	
    $(".reviews__image-reviews").endlessScroll({ 
        width: "2000px", // Ширина строки
        height: "284px", // Высота строки
        steps: -1, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
        speed: 30, // Скорость анимации (0 - максимальная)
        mousestop: true // Останавливать ли полосу при наведении мыши (да - true, нет - false)
    });
});
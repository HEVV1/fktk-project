$(function () {
    let slider = $('.block-slider.slider-widget .slider-holder');
    

    if ( slider.length > 0 ) {
        let dots_enabled = true;
        if ( $('.slider-item', slider).length < 2 ) {
            dots_enabled = false;
        }

        slider.slick({
            draggable: true,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true,
            fade: true,
            speed: 500,
            infinite: true,
            cssEase: 'ease-in-out',
            touchThreshold: 100          
        });
    }
});

$(function () {
    let storySlider = $('.block-story-slider.slider-story-content .slider-holder');

    if ( storySlider.length > 0 ) {

        let dots_enabled = true;
        if ( $('.slider-item', storySlider).length < 2 ) {
            dots_enabled = false;
        }       

        storySlider.slick({
            arrows: false,
            dots: dots_enabled,            
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: false,
            cssEase: 'ease',
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
        });
    }
})
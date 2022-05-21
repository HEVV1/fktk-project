$(function(){
    let cookies = $('.block-cookies')
    $(document).ready(function(){
        cookies.addClass('show-cookies');
    })
    $('.button-cookies', cookies).on('click', function() {
        cookies.removeClass('show-cookies');
    })
})
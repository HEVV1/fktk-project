let isItActiveMenu = false;

$(function(){
    let burger = $('.block-header-burger');
    let menu = $('.block-menu');
    burger.on('click', function(){
        if (!isItActiveMenu) {
            menuOn(menu);
            additionalCssFunctionsOn();
            menuButtonOn(burger);
            isItActiveMenu = true;
        }
        else{
            menuOff(menu);
            additionalCssFunctionsOff();
            menuButtonOff(burger);
            isItActiveMenu = false;
        }
    })
})

function menuOn(menuPar) {
    menuPar.addClass('block-menu-on');
}
function menuOff(menuPar) {
    menuPar.removeClass('block-menu-on');
}
function menuButtonOn(buttonPar) {
    buttonPar.addClass('burger-on');
}
function menuButtonOff(buttonPar) {
    buttonPar.removeClass('burger-on');
}
function additionalCssFunctionsOn() {
    $('body').addClass('disable-body-overflow');
    $('html').addClass('disable-body-overflow');
}
function additionalCssFunctionsOff() {
    $('body').removeClass('disable-body-overflow');
    $('html').removeClass('disable-body-overflow');
}

$(function(){
    let burger = $('.block-header-burger');
    let menu = $('.block-menu');
    $(window).on('init resize change', function() {
        if (menu.width() >= 768) {
            menuOff(menu);
            additionalCssFunctionsOff();
            menuButtonOff(burger);
            isItActiveMenu = false;
        }
    })
})
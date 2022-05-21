let isDropdownActive = false;
let isPopupActive = [];

$(function(){
    let shevron = $('.menu-chevron');
    let dropDownContent = $('.hidden-container');
    let wrapperSelector = $('.wrapper-selector', '.block-menu');
    isPopupActive[0] = false;
    isPopupActive[1] = false;
    dropDownContent.animate({
        height: 'toggle'
    })
    //Link selector
    $('.wrapper-link-and-icon', '.block-menu').on('click', function(){
        if (!isDropdownActive) {           
            dropdownOn(shevron, dropDownContent);
            isDropdownActive = true;        
        }
        else{            
            dropdownOff(shevron, dropDownContent);
            isDropdownActive = false;
        }
    })
    //Header selector
    wrapperSelector.on('click', function(){        
        for (let i = 0; i < wrapperSelector.length; i++) {
            
            if (!($(this).index(wrapperSelector.eq(i)) == -1) && isPopupActive[i] == false) {                
                popupOn(wrapperSelector.eq(i));
                isPopupActive[i] = true;  
                
            }            
            else{
                popupOff(wrapperSelector.eq(i));
                isPopupActive[i] = false;
            }           
        }       
    })
    $(document).on('click', function(event) {
        $(document).on('click', function(event) {
            if ( !$(event.target).closest(wrapperSelector).length)
            {
                for (let i = 0; i < wrapperSelector.length; i++) {            
                    isPopupActive[i] = false;
                    popupOff(wrapperSelector.eq(i));                     
                } 
            }
          });
        
    });
})

function dropdownOn(shevronPar, contentPar) {
    shevronPar.addClass('menu-chevron-on');
    contentPar.animate({
        height: 'toggle'
    })
}

function dropdownOff(shevronPar, contentPar) {
    shevronPar.removeClass('menu-chevron-on');
    contentPar.animate({
        height: 'toggle'
    })    
}

function popupOn(selectorPar) {
    selectorPar.addClass('header-selector-on');
}
function popupOff(selectorPar) {
    selectorPar.removeClass('header-selector-on');
}
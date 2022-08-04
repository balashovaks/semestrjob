/*меню*/
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.main__menu').classList.toggle('active');
    document.querySelector('.main__menu__nav').classList.toggle('active');
});

/*корзина*/
document.querySelector('.main__basket').addEventListener('click', function(){
    document.querySelector('.basket__content').classList.toggle('active');
});
/*слайдер*/

$(document).ready(function() {
    let position = 0;
    const slideToShow = 1;
    const slideToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const btnLeft = $('.btn__left');
    const btnRight = $('.btn__right');
    const movePosition = 694;

    btnRight.click(function() {
        position -= movePosition;
        track.css({
            transform: `translateX(${position}px)`
        });
    });
    btnLeft.click(function() {
        position += movePosition;
        track.css({
            transform: `translateX(${position}px)`
        });
    });
});
/*фильтр контента*/
$(function() {
    let filter = $("[data-f]");
    filter.on("click", function() {
        let cat = $(this).data('f');
        if(cat == 'all') {
            $("[data-item]").removeClass('hide');
        } else {
            $("[data-item]").each(function() {
                let itemCat = $(this).data('item');
                if (itemCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});
/**
 * Add JSDoc
 * .welcome-btn-con, .welcome-btn fadeOut and remove on click function
 */
let parentPathOne = document.querySelector('.path-one');
$(parentPathOne).hide();

$('.boxshadow-two').hover(function () {

    $(this).removeClass('boxshadow-two');
}, function () {
    $(this).addClass('boxshadow-two');
}
);

$('.boxshadow').hover(function () {

    $(this).removeClass('boxshadow');
}, function () {
    $(this).addClass('boxshadow');
}
);

$('.welcome-btn-con, .welcome-btn').click(function () {

    $('.welcome-btn-con').removeClass('trans-ease');
    $('.welcome-btn-con').delay(500).fadeTo('slow', 0);

    return fadeWelcome();
});

$('.restart-btn')

/**
 * 
 */
function fadeWelcome() {

    $('.welcome-con').delay(1400).fadeOut();

    return revealPathOne();

}


let deadPathOne = document.querySelector('.question-one-dead');
let submitBtn = document.querySelector('.submit-btn');
/**
 * 
 */
function revealPathOne() {

    $('.submit-btn').delay(2500).fadeTo('slow', 1);
    $(parentPathOne).delay(2500).show();

}

$(submitBtn).click(function () {
    validatePathOne();
    return false;
});
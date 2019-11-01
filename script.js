/**
 * Add JSDoc
 * .welcome-btn-con, .welcome-btn fadeOut and remove on click function
 */


$(document.querySelectorAll('.boxshadow')).hover(function () {

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

/**
 * 
 */
function fadeWelcome() {

    $('.welcome-con').delay(1400).fadeOut();

    return revealPathOne();

}

let parentPathOne = document.querySelectorAll('.path-one, .submit-btn');
let deadPathOne = document.querySelector('.question-one-dead');
/**
 * 
 */
function revealPathOne() {

    $(parentPathOne).delay(2500).fadeIn(300);
    $(deadPathOne).hide();

}

let submitBtn = document.querySelector('.submit-btn');

$(submitBtn).click(function () {
    validatePathOne();
    return false;
});
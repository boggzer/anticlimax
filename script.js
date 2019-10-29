/**
 * Add JSDoc
 * .welcome-btn-con, .welcome-btn fadeOut and remove on click function
 */
$('.welcome-btn-con').hover(function () {
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

    return revealContent();
};

/**
 * 
 */
function revealContent() {
    let allDisplayNone = document.querySelectorAll('.display-none');

    $(allDisplayNone).delay(2500).fadeIn(300, function () {
        $(this).classList.replace('display-none', 'display-flex');
    });
};
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
        $(allDisplayNone).add('display-flex');
    });
}

let theForm = document.getElementsByTagName('form');
let inputName = document.getElementsByName('choice');

inputName.forEach(loopChoices);

/**
 * 
 * @param {*} item 
 * @param {*} index 
 */
function loopChoices(item, index) {
    choiceVal = item.value;
    index; // Används ej.

    let itemId = item.id;
    let newLabel = document.createElement('label');
    newLabel.setAttribute('for', itemId);

    newLabel.innerHTML += "" + choiceVal + "<br>";
    item.after(newLabel);
}
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

    return createFormElements();

}

let theForm = document.getElementsByTagName('form');
let radioContent = document.getElementsByName('choice');

/**
 * 
 * @param {*} item input
 * @param {number} index index för varje input
 */
function createFormElements() {
    radioContent.forEach(loopChoices);

    function loopChoices(item, index) {
        choiceVal = item.value;
        index; // Används ej.

        let itemId = item.id;

        let newLabel = document.createElement('label');

        newLabel.setAttribute('for', itemId);
        newLabel.innerHTML += "" + choiceVal;
        item.after(newLabel);
    }
    return false;

}

let userChoices;
let choiceCheck = 0;

function radioValidation() {
    const radioChoices = document.getElementsByName('choice');
    let i = 0, len = radioChoices.length;
    let checked = false;

    for (; i < len; i++) {
        if (radioChoices[i].checked) {
            checked = true;
            userChoices = radioChoices[i].value;
        }
    }

    if (!checked) {
        alert('Hoppsan! Välj något av alternativen för att gå vidare.');
        return false;
    }

    if (userChoices === "Gör ingenting") {
        console.log('Gör ingenting!');
        youChose(userChoices);

        choiceCheck = 0;

        return false;
    }

    else if (userChoices === "Spring härifrån") {
        console.log('Spring härifrån!');
        youChose(userChoices);

        choiceCheck = 1;

        return false;
    }
}

function youChose(choice) {
    let oldText = document.querySelector('p');
    let newText = document.createElement('p');
    newText.classList.add('italic-font');
    newText.innerHTML += '> ' + choice;

    oldText.appendChild(newText);
}

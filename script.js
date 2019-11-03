let formOne = document.getElementsByClassName('form-one');
let formTwo = document.getElementsByClassName('form-two');
let formThree = document.getElementsByClassName('form-three');

/**
 * @argument {object} submitBtn all input elements of type 'submit', in a NodeList
 */
let submitBtn = $('input[type="submit"]');

/**
 * @argument {string} userChoice variable that contains the user's choice, sent to function for validating input
 */
let userChoice = "";

/**
 * @argument {boolean} checked false to make function begin
 */
let checked = false;

/**
 * @function doThis
 */
$(document).ready(function doThis() {
    $('.welcome-page').delay(2500).fadeOut('slow')
    return revealFirstPage();
});

console.log(document.getElementsByTagName('input'));

/**
 * Function that fades in the function with removal of a class
 * 
 */
function revealFirstPage() {
    $('main').delay(3400).fadeIn('slow', function () {
        $(this).removeClass('display-none');
    });
};


/** 
 * @event MouseEvent
 * @fires {{classname}}#{{eventName}}{{}}
 */
submitBtn.click(function () {
    return radioValidation();
});


/**
 * @class
 */
function radioValidation() {

    let radioChoices = $("input[name='choice']");
    /**
     * Loop
     * @function for 
     * @param {number} i
     }
     */
    for (let i = 0; i < radioChoices.length; i++) {
        if (radioChoices[i].checked) {
            userChoice = radioChoices[i].value;
            checked = true;
        };
    };

    /**
     * 
     */
    if (!checked) {
        alert('Välj för att gå vidare');
        return false;
    }

    if (userChoice === "You peek behind the door to the kitchen.") {
        /**
         * @argument {}
         */
        let underThis = $('p.path-one');
        youChose(userChoice, underThis);
        $('.path-one-death').delay(300).fadeIn('slow', function () {
            $(this).removeClass('display-none');
        })
        $(formOne).remove();
        return restart();
    }

    if (userChoice === "Whatever, it's probably nothing.") {
        let underThis = $('p.path-one');
        youChose(userChoice, underThis);
        $(formOne).remove();
        $('.path-two-con').delay(100).fadeIn('slow', function () {
            $(this).removeClass('display-none');
        });
        return checked = false;
    }

    if (userChoice === "Kitty came back home from on the island, but kitty came on home without a name...") {
        let underThis = $('p.path-two');
        youChose(userChoice, underThis);
        $(formTwo).remove();
        $('.path-three-con').delay(300).fadeIn('slow', function () {
            $(this).removeClass('display-none');
        })
        return checked = false;
    }

    if (userChoice === "You grab the bottle labeled 'Holy Water' bought at the local April Fool's store.") {
        let underThis = $('p.path-two');
        youChose(userChoice, underThis);
        $(formTwo).remove();
        $('.path-two-death').delay(300).fadeIn('slow', function () {
            $(this).removeClass('display-none');
        })
        return restart();
    }

    if (userChoice === "You stay quiet.") {
        let underThis = $('p.path-three');
        youChose(userChoice, underThis);
        $(formThree).remove();
        $('.path-three-death').delay(300).fadeIn('slow', function () {
            $(this).removeClass('display-none');
        })
        return restart();
    }

    else if (userChoice === "You sing a few songs with a shaky voice.") {
        let underThis = $('p.path-three');
        youChose(userChoice, underThis);
        $('.the-end').delay(300).fadeIn('slow', function () {
            $(this).removeClass('display-none');
        })
        $(formThree).remove();
        return restart();
    }
}
/**
 * 
 * @param {*} theChoice 
 * @param {*} oldText 
 */

/**
 * Retrieves and adds user's choice beneath previous question
 * @param {string} theChoice the string content of the user's checked radio button
 * @param {object} oldText the previous text which is always the previous path question, as a HTMLCollection/NodeList/Object
 * @returns {boolean} false, for no redirecting
 */
function youChose(theChoice, oldText) {
    let newText = document.createElement('p');
    newText.innerHTML += '> ';
    newText.appendChild(document.createTextNode(theChoice));
    newText.classList.add('italic');
    oldText.append(newText);

    return theChoice = null;
}

function restart() {
    $('.restart').delay(300).fadeIn('slow', function () {
        $(this).removeClass('display-none');
        $('.restart').click(function () {
            window.location.reload();
        });
    });
    return userChoice = null;
}
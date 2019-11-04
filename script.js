let formOne = document.getElementsByClassName('form-one');
let formTwo = document.getElementsByClassName('form-two');
let formThree = document.getElementsByClassName('form-three');

/**
 * @param {(JQuery|HTMLInputElement|Object)} submitBtn all input elements of type 'submit', in a HTMLCollection list
 */
let submitBtn = $('input[type="submit"]');

/**
 * @argument {string} userChoice variable that contains the user's choice, sent to function for validating input
 */
let userChoice = "";

/**
 * @argument {boolean} checked declaration of 
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
 * @function radioValidation
 */
function radioValidation() {

    /**
     * @param {(JQuery|HTMLInputElement|Object)} radioChoices all radio choices as object
     */
    let radioChoices = $("input[name='choice']");

    /**
     * @function for 
     * @param {(function|number)} i index
     * @param {(function|object)} radioChoices.length
     * @returns {boolean} checked true
     */
    for (let i = 0; i < radioChoices.length; i++) {
        if (radioChoices[i].checked) {
            userChoice = radioChoices[i].value;
            checked = true;
        };
    };

    /**
     * Not checked
     * @method if
     * @argument {boolean} checked property
     * @returns {boolean} false
     */
    if (!checked) {
        /**
         * @function {message}
         * @argument {string} 
         * @returns {boolean} false
         * 
         */
        alert('Välj för att gå vidare');
        return false;
    }

    /**
     * @method if
     * @argument {string} userChoice value of radio input equals user's choice
     */
    if (userChoice === "You peek behind the door to the kitchen.") {
        /**
         * @param {(JQuery|HTMLCollection)} underThis where new text will be placed beneath
         */
        let underThis = $('p.path-one');
        youChose(userChoice, underThis);
        /**
         * @function fadeIn
         * @argument {(JQuery|HTMLCollection)} {{$('.path-one-death')}}
         * @this {(JQuery|HTMLCollection)}
         */
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
 * Retrieves and adds user's choice beneath previous question
 * @function youChose
 * @param {string} theChoice the string content of the user's checked radio button
 * @param {HTMLCollection} oldText the previous text which is always the previous path question, as a HTMLCollection/NodeList/Object
 * @returns {null} change theChoice value to null
 */
function youChose(theChoice, oldText) {
    let newText = document.createElement('p');
    newText.innerHTML += '> ';
    newText.appendChild(document.createTextNode(theChoice));
    newText.classList.add('italic');
    oldText.append(newText);

    return theChoice = null;
}

/**
 * @function restart
 * @param {(HTMLCollection|Object)} <input
 * @returns {null}
 */
function restart() {
    $('.restart').delay(300).fadeIn('slow', function () {
        $(this).removeClass('display-none');
        $('.restart').click(function () {
            window.location.reload();
        });
    });
    return userChoice = null;
}
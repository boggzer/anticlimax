let userChoices;
let checked = false;
let radioChoices = $("input[name='choice']");

let parentPathTwo = document.querySelectorAll('.path-two');
let parentPathThree = document.querySelectorAll('.path-three');

let choicesOne = document.querySelector('.choices-one');
let choicesTwo = document.querySelector('.choices-two');
let choicesThree = document.querySelector('.choices-three');

let deadPathTwoOne = document.querySelector('.question-two-dead-one');
let deadPathTwoTwo = document.querySelector('.question-two-dead-two');
let deadPathThree = document.querySelector('.question-three-dead');

let restartBtn = document.querySelectorAll('.restart-btn-con, .restart-btn');

/**
 *
 */
function notChecked() {
    alert('Hoppsan! Välj något av alternativen för att gå vidare.');
    return false;
}

/**
 * 
 */
function validatePathOne() {
    $(choicesOne).remove();
    userChoices = null;
    // Loopa genom vägval
    for (i = 0; i < radioChoices.length; i++) {
        if (radioChoices[i].checked) {
            checked = true;
            userChoices = radioChoices[i].value;

        }
    }

    // Inget val
    if (!checked) {
        notChecked();

        return false;
    }

    // Vägval 1 -- Val 1
    if (userChoices === "Gör ingenting") {
        youChose(userChoices);
        $(submitBtn).hide();

        $(deadPathOne).show();

        $(restartBtn).show();
        $(restartBtn).click(function () {
            window.location.reload(true);
        });

        return false;
    }

    // Vägval 1 -- Val 2
    else if (userChoices === "Spring därifrån") {
        youChose(userChoices);

        $('.path-two').removeClass('display-none');
        parentPathOne.style.cssText = "display: flex";

        $('.question-two-dead-one, .question-two-dead-two').hide();

        // Ersätt funktion för submitknapp vid klick
        $(submitBtn).click(function () {
            validatePathTwo();
            return false;
        });

        return false;
    }
    return false;
}


function validatePathTwo() {

    $(parentPathThree).show();

    for (i = 0; i < radioChoices.length; i++) {
        if (radioChoices[i].checked) {
            checked = true;
            userChoices = radioChoices[i].value;

            $(choicesTwo).hide();
        }
    }

    if (!checked) {
        notChecked();
        return false;
    }

    // Vägval 2 -- Val 1
    if (userChoices === "Samma underliga ljud") {
        youChose(userChoices);

        let hideThese

        $(deadPathTwoOne).show();
        $(restartBtn).show();

        $(restartBtn).show();
        $(restartBtn).click(function () {
            window.location.reload(true);
            return false;
        });
    }

    // Vägval 2 -- Val 2
    if (userChoices === "Skrapande ljud") {
        youChose(userChoices);

        $(parentPathTwo).hide();
        $(choicesTwo).hide();
        $('.question-two-dead').hide();

        $(submitBtn).click(function () {
            validatePathThree();
            return false;
        });
    }

    // Vägval 2 -- Val 3
    else if (userChoices === "Jamande") {
        youChose(userChoices);

        $(parentPathTwo).hide();
        $(deadPathTwoTwo).show();
        $(choicesThree).hide();
        $(submitBtn).hide();

        $(restartBtn).show();
        $(restartBtn).click(function () {
            window.location.reload(true);
        });
        return false;
    }
    return false;
}

function validatePathThree() {

    for (i = 0; i < radioChoices.length; i++) {
        if (radioChoices[i].checked) {
            checked = true;
            userChoices = radioChoices[i].value;
        }
    }

    if (!checked) {
        notChecked();

        return false;
    }

    // Vägval 3 -- Val 1
    if (userChoices === "Öppna lådan") {
        youChose(userChoices);
        alert('ONe');
        return false;
    }

    // Vägval 3 -- Val 2
    else if (userChoices === "Hallå där! Slut med detektivarbetet, din fikarast är över!") {
        youChose(userChoices);
        alert('two');
        return false;
    }
    return false;
}


let newText = document.createElement('p'); // create <p>

function youChose(theChoice) {

    let oldText = document.querySelector('p'); // Select previous <p>
    newText.classList.add('italic-font'); // newText = create new <p>, add class
    newText.innerHTML = '> ' + theChoice; // add theChoice text to new <p>

    oldText.appendChild(newText); // Add newText after oldText

    userChoices = "";
    checked = false;

    return;
}

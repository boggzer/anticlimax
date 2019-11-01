let userChoices;
let checked = false;
let radioChoices = $("input[name='choice']");
let choicesOne = document.querySelector('.choices-one');
let parentPathTwo = document.querySelectorAll('.path-two');
let parentPathThree = document.querySelectorAll('.path-three');
let choicesTwo = document.querySelector('.choices-two');
let deadPathTwoOne = document.querySelector('.question-two-dead-one');
let restartBtn = document.querySelectorAll('.restart-btn-con, .restart-btn');
/**
 * 
 */
function notChecked() {
    alert('Hoppsan! Välj något av alternativen för att gå vidare.');
    return false;
}

function restartNow() {
    $('.restart-btn-con, .restart-btn').show();
}

/**
 * 
 */
function validatePathOne() {

    // Loopa genom vägval
    for (i = 0; i < radioChoices.length; i++) {
        if (radioChoices[i].checked) {
            checked = true;
            userChoices = radioChoices[i].value;

            $(choicesOne).hide();
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
        
        $(choicesOne).hide();
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

        $(parentPathTwo).show();
        
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
        }
    }

    if (!checked) {
        notChecked();

        return false;
    }

    // Vägval 2 -- Val 1
    if (userChoices === "Samma underliga ljud") {
        youChose(userChoices);

        $(parentPathTwo).hide();
        $(deadPathTwoOne).show();

        return false;
    }
    // Vägval 2 -- Val 2
    if (userChoices === "Skrapande ljud") {
        youChose(userChoices);

        $(parentPathTwo).hide();
        $(dead)

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

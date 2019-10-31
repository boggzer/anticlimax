let userChoices;
let radioChoices = document.getElementsByTagName('input');
let checked = false;
let choicesOne = document.querySelector('.choices-one');

function notChecked() {
    alert('Hoppsan! Välj något av alternativen för att gå vidare.');
    return false;
}

function radioValidation() {

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

    // Vägval 1 -- Val 1
    if (userChoices === "Gör ingenting") {
        youChose(userChoices);
        $(deadPathOne).show();
        $(choicesOne).hide();

        return;
    }

    // Vägval 1 -- Val 2
    if (userChoices === "Spring därifrån") {
        youChose(userChoices);

        let parentPathTwo = document.querySelectorAll('.path-two');
        $(parentPathTwo).show();
        $(choicesOne).hide();
        $('.question-two-dead-one, .question-two-dead-two').hide();

        userChoices = "";
        checked = false;
        
        for (let i = 0; i < radioChoices.length; i++) {
            if (radioChoices[i].checked) {
                checked = true;
                userChoices = radioChoices[i].value;
            }
            console.log(userChoices);

            // Vägval 2 -- Val 1
            if (userChoices = "Samma underliga ljud") {
                youChose(userChoices);

            }
            // Vägval 2 -- Val 2
            if (userChoices === "Skrapande ljud") {
                youChose(userChoices);
                return false;
            }
            // Vägval 2 -- Val 3
            else if (userChoices === "Jamande") {
                youChose(userChoices);
                return false;
            }

            return checked;
        }

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

    return;
}

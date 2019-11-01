$(document).ready(function doThis() {
   $('.startsida').delay(2500).fadeOut('slow')

   return revealFirstPage();
});

function revealFirstPage() {
   $('.allting').delay(3400).fadeIn('slow', function () {
       $(this).removeClass('display-none');
   })
};

let submitBtn = $('input[type="submit"]');

submitBtn.click(function () {
   return radioValidation();
});

let formOne = document.getElementsByClassName('form-one');
let formTwo = document.getElementsByClassName('form-two');
let formThree = document.getElementsByClassName('form-three');
let userChoice;
let checked = false;

function radioValidation() {

   let radioChoices = $("input[name='choice']");

   for (let i = 0; i < radioChoices.length; i++) {
       if (radioChoices[i].checked) {
           userChoice = radioChoices[i].value;
           checked = true;
       }
   }

   if (!checked) {
       alert('Välj för att gå vidare');
       return false;
   }

   if (userChoice === "Val ett") {
       let underThis = $('p.choice-one');
       youChose(userChoice, underThis);

       $('.sida-ett-slut').delay(300).fadeIn('slow', function () {
           $(this).removeClass('display-none');
       })
       $(formOne).remove();

       return restart();
   }

   if (userChoice === "Val två") {
       let underThis = $('p.choice-one');
       youChose(userChoice, underThis);

       $(formOne).remove();

       $('.sida-tva').delay(100).fadeIn('slow', function () {
           $(this).removeClass('display-none');
       });

       return false;
   }

   if (userChoice === "Val tre") {
       let underThis = $('p.choice-two');
       youChose(userChoice, underThis);

       $(formTwo).remove();

       $('.sida-tva-slut').delay(300).fadeIn('slow', function () {
           $(this).removeClass('display-none');
       })

       return restart();
   }

   if (userChoice === "Val fyra") {
       let underThis = $('p.choice-two');
       youChose(userChoice, underThis);

       $(formTwo).remove();

       $('.sida-tre').delay(300).fadeIn('slow', function () {
           $(this).removeClass('display-none');
       })

       return false;
   }

   if (userChoice === "Val fem") {
       let underThis = $('p.choice-three');
       youChose(userChoice, underThis);

       $(formThree).remove();
       
       $('.sida-tre-slut').delay(300).fadeIn('slow', function () {
           $(this).removeClass('display-none');
       })

       return restart();
   }

   else if (userChoice === "Val sex") {
       let underThis = $('p.choice-three');
       youChose(userChoice, underThis);
       
       $('.slut').delay(300).fadeIn('slow', function () {
           $(this).removeClass('display-none');
       })
       
       $(formThree).remove();

       return restart();
   }
}

let allP = document.querySelectorAll('p');
console.log(allP, allP.length);

function youChose(theChoice, oldText) {
   let newText = document.createElement('p');
   newText.appendChild(document.createTextNode(theChoice));
   // let oldText = document.querySelector('p');
   oldText.append(newText);
}

function restart() {
   $('.restart').delay(300).fadeIn('slow', function () {
       $(this).removeClass('display-none');
       $('.restart').click(function () {
           window.location.reload();
       });
   });

}
storyObjects = {
    firstDecision: {
        question: document.querySelector('.question-one').innerHTML,
        choiceOne:
        {
            button: document.getElementById('do-nothing'),
            label: document.getElementById('label-do-nothing').innerHTML
        },
        choiceTwo:
        {
            button: document.getElementById('run-away'),
            label: document.getElementById('label-run-away').innerHTML
        },
        deadEnd: document.querySelector('.question-one-dead').innerHTML
    },

    secondDecision: {
        question: document.querySelector('.question-two').innerHTML,
        choiceOne:
        {
            button: document.getElementById('same-noise'),
            label: document.getElementById('label-same-noise').innerHTML
        },
        choiceTwo:
        {
            button: document.getElementById('scratchy-noise'),
            label: document.getElementById('label-scratchy-noise').innerHTML
        },
        choiceThree:
        {
            button: document.getElementById('meow-noise'),
            label: document.getElementById('label-meow-noise').innerHTML
        },
        deadEndOne: document.querySelector('.question-two-dead-one').innerHTML,
        deadEndTwo: document.querySelector('.question-two-dead-two').innerHTML
    },

    thirdDecision: {
        question: document.querySelector('.question-three').innerHTML,
        choiceOne:
        {
            button: document.getElementById('open-box'),
            label: document.getElementById('label-open-box').innerHTML
        },
        choiceTwo:
        {
            button: document.getElementById('casual'),
            label: document.getElementById('label-casual').innerHTML
        },
        deadEnd: document.querySelector('.question-three-dead').innerHTML,
        finish: document.querySelector('.finish').innerHTML
    }

};
let i = 0;
let key = Object.keys(storyObjects.firstDecision.choiceOne.label)[0];
value = storyObjects.firstDecision.choiceOne.label[key]
console.log(key,value);

/*
* https://weblog.west-wind.com/posts/2017/mar/04/getting-javascript-properties-for-object-maps-by-index-or-name
    for (let i = 0; i < storyObjects.length; i++) {
        let key = Object.keys(storyObjects)[i];
        value = storyObjects[key]
        document.write(key,value);
    }*/


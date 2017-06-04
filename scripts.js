var $upperKeyboard = $('#keyboard-upper-container');
var $lowerKeyboard = $('#keyboard-lower-container');

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$upperKeyboard.hide();

function shiftToggle() {
    $lowerKeyboard.toggle();
    $upperKeyboard.toggle();
}

function keyHighlight(keyActive) {
    keyActive.toggleClass('highlight');
}

$(document).keydown(function(event){
    switch (event.which) {
        case 16:
            shiftToggle();
            break;
        default:
            break;
    }
});

$(document).keyup(function(event){
    switch (event.which) {
        case 16:
            shiftToggle();
            break;
        default:
            break;
    }
});

$(document).keypress(function(event){
    var $key = $('#' + event.which);

    switch (event.which) {
        case event.which:
            keyHighlight($key);
            if (event.which === firstSentence[0].charCodeAt(0)) {
                isRight();
            } else {
                isWrong();
            }
            break;
        default:
            break;
    }
});

var firstSentence = sentences[0].split('');

function displayFirst() {
    $('#sentence').text(sentences[0]);
    $('#target-letter').text(firstSentence[0]);
}

displayFirst();

function isRight() {
    var $greenOk = $('<span class="glyphicon-ok"></span>');
    $('#feedback').append($greenOk);
    firstSentence.shift();
    $('#target-letter').text(firstSentence[0]);
    //set up an if statement to go on to the next sentence
}

function isWrong() {
    var $redIncorrect = $('<span class="glyphicon-remove"></span>');
    $('#feedback').append($redIncorrect);
}

var testArray = [];
console.log(testArray.length);
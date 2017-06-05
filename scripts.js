var $upperKeyboard = $('#keyboard-upper-container');
var $lowerKeyboard = $('#keyboard-lower-container');
var activeSentence;
var index = 0;
var letter = 0;
//original total of 54
//Written out as an expression in case sentences are modified in code
var numberOfWords = 11 + 11 + 10 + 10 + 12;
var numberOfMistakes = 0;
var startTime = new Date().getMinutes();

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
                'Too ato too nOt enot one totA not anot tOO aNot',
                'oat itain oat tain nate eate tea anne inant nean',
                'itant eate anot eat nato inate eat anot tain eat',
                'nee ene ate ite tent tiet ent ine ene ete ene ate'];

function shiftToggle() {
    $lowerKeyboard.toggle();
    $upperKeyboard.toggle();
}

function keyHighlight(keyActive) {
    keyActive.addClass('highlight');
}

function displaySentence(indexNum) {
    $('#sentence').text(sentences[indexNum]);   
}

function activeLetter(indexNum, letterNum) {
    activeSentence = sentences[indexNum].split('');
    $('#target-letter').text(activeSentence[letterNum]);
}

function isRight() {
    var $greenOk = $('<span class="glyphicon-ok">&#10003;</span>');

    $('#feedback').append($greenOk);
    
    if (index === sentences.length - 1 && letter === activeSentence.length - 1) {
        $('#target-letter').text('');
        wordsPerMinute(startTime);
    } else if (letter === activeSentence.length - 1) {
        $('#feedback').text('');
        index++;
        displaySentence(index);
        letter = 0;
        activeLetter(index, letter);
    } else {
        letter++;
        activeLetter(index, letter);
        //work on highlight nudge math
        // $('#yellow-block').css('left', 1 * letter + 'em');
    }
}

function isWrong() {
    var $redIncorrect = $('<span class="glyphicon-remove">&#10007;</span>');
    $('#feedback').append($redIncorrect);
    numberOfMistakes++;
}

function wordsPerMinute(start) {
    var endTime = new Date().getMinutes();
    var wpm = numberOfWords / (endTime - start) - 2 * numberOfMistakes;
    $('#feedback').text('Your Words Per Minute is: ' + wpm);
}

function startGame() {
    index = 0;
    letter = 0;
    displaySentence(index);
    activeLetter(index, letter);
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
    $('.highlight').removeClass('highlight');
});

$(document).keypress(function(event){
    var $key = $('#' + event.which);

    switch (event.which) {
        case event.which:
            keyHighlight($key);
            if (event.which === activeSentence[letter].charCodeAt(0)) {
                isRight();
            } else {
                isWrong();
            }
            break;
        default:
            break;
    }
});

$upperKeyboard.hide();

startGame();
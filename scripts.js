var $upperKeyboard = $('#keyboard-upper-container');
var $lowerKeyboard = $('#keyboard-lower-container');
var activeSentence;
var index = 0;
var letter = 0;

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
            if (event.which === activeSentence[letter].charCodeAt(0)) {
                isRight();
                console.log(activeSentence[letter].charCodeAt(0));
            } else {
                isWrong();
            }
            break;
        default:
            break;
    }
});

function displaySentence(indexNum) {
    $('#sentence').text(sentences[indexNum]);   
}

function activeLetter(indexNum, letterNum) {
    activeSentence = sentences[indexNum].split('');
    $('#target-letter').text(activeSentence[letterNum]);
}

displaySentence(index);
activeLetter(index, letter);

function isRight() {
    var $greenOk = $('<span class="glyphicon-ok"></span>');

    $('#feedback').append($greenOk);
    
    // if (letter === activeSentence.length - 1) {
    //     $('#feedback').text('');
    //     index++;
    //     displaySentence(index);
    //     letter = 0;
    //     activeLetter(index, letter);
    // } else {
    //     letter++;
    //     activeLetter(index, letter);
    // }

    if (index === sentences.length - 1 && letter === activeSentence.length - 1) {
        console.log('all done');
        $('#target-letter').text('');
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
    var $redIncorrect = $('<span class="glyphicon-remove"></span>');
    $('#feedback').append($redIncorrect);
}
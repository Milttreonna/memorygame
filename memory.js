var clicks = 0; //counts how may picks have been made in each turn
var firstchoice; //stores index of first card selected
var secondchoice; //stores index of second card selected

var match = 0; //counts matches made
var backcard = "back.png"; //shows back of card when turned over

var faces = []; //array to store card images
faces[0] = 'mint.png';
faces[1] = 'yellow.png';
faces[2] = 'mint.png';
faces[3] = 'pink.png';
faces[4] = 'yellow.png';
faces[5] = 'pink.png';

function choose(card) {
        if (clicks == 2) {
            return;
        }
        if (clicks == 0) {
            firstchoice = card;
            document.images[card].src = faces[card];
            clicks = 1;
        } else {
            clicks = 2;
            secondchoice = card;
            document.images[card].src = faces[card];
            timer = setInterval("check()", 1000);
        }
    }
    /* Check to see if a match is made */

function check() {
    clearInterval(timer); //stop timer
    if (faces[secondchoice] == faces[firstchoice]) {
        match++;
        document.getElementById("matches").innerHTML = match;
    } else {
        document.images[firstchoice].src = backcard;
        document.images[secondchoice].src = backcard;
        clicks = 0;
        return;
    }
}

var clicks = 0;
var firstchoice;
var secondchoice;

var match = 0;
var backcard = "back.png";

var faces = [];
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
            secondchoice = card;``
            document.images[card].src = faces[card];
            timer = setInterval("check()", 1000);
        }
    }


function check() {
    clearInterval(timer);
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


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(faces);

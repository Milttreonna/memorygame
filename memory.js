var clicks = 0;
var firstchoice;
var secondchoice;

var match = 0;
var backcard = "back.png";

var faces = [];
faces[0] = 'mint.png';
faces[1] = 'mint.png';
faces[2] = 'blue.png';
faces[3] = 'blue.png';
faces[4] = 'green.png';
faces[5] = 'green.png';
faces[6] = 'orange.png';
faces[7] = 'orange.png';
faces[8] = 'pink.jpg';
faces[9] = 'pink.jpg';
faces[10] = 'purple.png';
faces[11] = 'purple.png';
faces[12] = 'red.png';
faces[13] = 'red.png';
faces[14] = 'violet.png';
faces[15] = 'violet.png';
faces[16] = 'white.png';
faces[17] = 'white.png';
faces[18] = 'yellow.png';
faces[19] = 'yellow.png';

function choose(card) {
        if (clicks == 2) {
          clicks=0;
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
            timer = setInterval("check()", 500);
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

var clicks = 0;
var firstchoice;
var secondchoice;

var match = 0;
var backcard = "img/back.png";

var faces = [];
faces[0] = 'img/mint.png';
faces[1] = 'img/mint.png';
faces[2] = 'img/blue.png';
faces[3] = 'img/blue.png';
faces[4] = 'img/green.png';
faces[5] = 'img/green.png';
faces[6] = 'img/orange.png';
faces[7] = 'img/orange.png';
faces[8] = 'img/pink.jpg';
faces[9] = 'img/pink.jpg';
faces[10] = 'img/purple.png';
faces[11] = 'img/purple.png';
faces[12] = 'img/red.png';
faces[13] = 'img/red.png';
faces[14] = 'img/violet.png';
faces[15] = 'img/violet.png';
faces[16] = 'img/white.png';
faces[17] = 'img/white.png';
faces[18] = 'img/yellow.png';
faces[19] = 'img/yellow.png';

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
            timer = setInterval("check()", 300);
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
    if (match == 10) {
      swal({   title: "Congratulations!",   text: "You Win!.",   imageUrl: "img/thumbs_up.jpg" },
      function(){
       location.reload();
   }
);
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

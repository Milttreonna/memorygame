var clicks = 0;
var firstchoice;
var secondchoice;
var choices = [];

var match = 0;
var backcard = "img/back.png";
var solved = [];

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
    if (solved.includes(card)) {
        return;
    }
    if (choices.length === 0) {
        choices.push(card);
        document.images[choices[0]].src = faces[choices[0]];
    } else if (choices.length === 1 && card != choices[0]) {
        choices.push(card);
        document.images[choices[1]].src = faces[choices[1]];
        if (faces[choices[0]] === faces[choices[1]]) {
            solved.push(choices[0]);
            solved.push(choices[1]);
            match++;
            document.getElementById("matches").innerHTML = match;
            if (match === 10) {
                swal({
                    title: "Congratulations!",
                    text: "You Win!",
                    imageUrl: "img/thumbs_up.jpg"
                }, function(){
                       location.reload();
                   } );
            }
        } else {
            var i = choices[0];
            var j = choices[1];
            setTimeout(function() {
                document.images[i].src = backcard;
                document.images[j].src = backcard;
            }, 500);
        }
        choices = [];
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

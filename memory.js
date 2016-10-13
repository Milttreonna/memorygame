var memory_array = ["yellow", "yellow", "mint", "mint", "pink", "pink"];
var memory_values = [];
var memory_tiles_id = [];
var tiles_clicked_ids = 0;
Array.prototype.memory_tile_shuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] - temp;
    }
}

function newBoard() {
    tiles_clicked = 0;
    var output = "";
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
    }
    document.getElementById('box').innerHTML = output;
}

'use strict';
/* Memory Game Models and Business Logic */

function Tile(tile) {
    this.title = tile.name;
    this.text = tile.text;
    this.movie = tile.movie;
    this.textTitle = tile.textTitle;
    this.flipped = false;
}

Tile.prototype.flip = function() {
    this.flipped = !this.flipped;
}



function Game(tileNames, title) {
    var tileDeck = makeDeck(tileNames);
    this.title = title;
    this.grid = makeGrid(tileDeck);
    this.message = Game.MESSAGE_CLICK;
    this.unmatchedPairs = tileNames.length;

    this.flipTile = function(tile) {
        if (tile.flipped) {
            return;
        }

        tile.flip();

        if (!this.firstPick || this.secondPick) {
            if (this.secondPick) {
                this.firstPick.flip();
                this.secondPick.flip();
                this.firstPick = this.secondPick = undefined;
            }

            this.firstPick = tile;
            this.message = Game.MESSAGE_ONE_MORE;

        } else {

            if (this.firstPick.title === tile.title) {
                this.unmatchedPairs--;
                this.openDialog(tile.title, tile.text, tile.movie, tile.textTitle);
                this.message = (this.unmatchedPairs > 0) ? Game.MESSAGE_MATCH : Game.MESSAGE_WON;
                this.firstPick = this.secondPick = undefined;
            } else {
                this.secondPick = tile;
                this.message = Game.MESSAGE_MISS;
            }
        }
    }
}

Game.MESSAGE_CLICK = 'Klik op een kaart.';
Game.MESSAGE_ONE_MORE = 'Kies nog een kaart.'
Game.MESSAGE_MISS = 'Probeer het nog een keer.';
Game.MESSAGE_MATCH = 'Goed gedaan! En blijven gaan!';
Game.MESSAGE_WON = 'Je hebt gewonnen!';



/* Create an array with two of each tileName in it */
function makeDeck(tileNames) {
    var tileDeck = [];
    tileNames.forEach(function(name) {
        tileDeck.push(new Tile(name));
        tileDeck.push(new Tile(name));
    });

    return tileDeck;
}


function makeGrid(tileDeck) {
    var gridDimension = Math.sqrt(tileDeck.length),
        grid = [];

    for (var row = 0; row < gridDimension; row++) {
        grid[row] = [];
        for (var col = 0; col < gridDimension; col++) {
            grid[row][col] = removeRandomTile(tileDeck);
        }
    }

    return grid;
}


function removeRandomTile(tileDeck) {
    var i = Math.floor(Math.random() * tileDeck.length);
    return tileDeck.splice(i, 1)[0];
}
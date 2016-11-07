function Tile(tile) {
    this.name = tile.name;
    this.text = tile.text;
    this.movie = tile.movie;
    this.flipped = false;
}

Tile.prototype.flip = function() {
    this.flipped = !this.flipped;
};


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



/* Create an array with two of each tileName in it */
function makeDeck(tileNames) {
    var tileDeck = [];
    tileNames.forEach(function(name) {
        tileDeck.push(new Tile(name));
        tileDeck.push(new Tile(name));
    });
    

    return tileDeck;
}



function Game(tileNames) {
    this.tilesSimple = tileNames;
    var tileDeck = shuffle(makeDeck(tileNames));
    this.message = Game.MESSAGE_CLICK;
    this.unmatchedPairs = tileNames.length;
    this.tileDeck = tileDeck;

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

            if (this.firstPick.name === tile.name) {
                this.unmatchedPairs--;
                this.openDialog(tile.name, tile.text);
                this.message = (this.unmatchedPairs > 0) ? Game.MESSAGE_MATCH : Game.MESSAGE_WON;
                this.firstPick = this.secondPick = undefined;
            } else {
                this.secondPick = tile;
                this.message = Game.MESSAGE_MISS;
            }
        }
    };
}

Game.MESSAGE_CLICK = 'Klik op een kaart.';
Game.MESSAGE_ONE_MORE = 'Kies nog een kaart.';
Game.MESSAGE_MISS = 'Probeer het nog een keer.';
Game.MESSAGE_MATCH = 'Goed gedaan! En blijven gaan!';
Game.MESSAGE_WON = 'Je hebt gewonnen!';
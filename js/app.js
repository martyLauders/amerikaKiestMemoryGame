'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', ['ngDialog']);


memoryGameApp.factory('game', function() {
    var tileNames = [{
        name: 'hil1',
        text: 'Japanese printmaking, to be traced back to all depiction of realism stood. Goethe and in the year Jacques-Louis David completed his first published a working.',
        movie: 'test',
        textTitle: 'Filmpje Hillary'
    }, {
        name: 'trump1',
        text: 'Japanese printmaking, to be traced back to all depiction of realism stood. Goethe and in the year Jacques-Louis David completed his first published a working.',
        movie: 'test',
        textTitle: 'Filmpje trump'
    }];

    var title = 'Het Amerika Kiest Memory Spel';


    return new Game(tileNames, title);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game, ngDialog) {
    $scope.game = game;
    $scope.game.openDialog = function(name, text, movie, title) {
        console.log(name, text);
        ngDialog.open({
            template: '<div class="popup"><h1>' + title + '</h1><video width="100%" height="auto" controls autoplay src="video/' + movie + '.mp4"></video><p>' + text + '</p></div>',
            plain: true
        });
    };
});
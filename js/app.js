'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', ['ngDialog']);


memoryGameApp.factory('game', function() {
    var tileNames = [{
        name: 'hil1',
        text: 'uitleg tekstje Hillary 1'
    }, {
        name: 'trump1',
        text: 'uitleg tekstje Trump 1'
    }];

    return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game, ngDialog) {
    $scope.game = game;
    $scope.game.openDialog = function(name, text) {
      console.log(name, text);
        ngDialog.open({
            template: '<img src="img/' + name + '.gif"><p>'+text+'</p>',
            plain: true
        });
    };
});
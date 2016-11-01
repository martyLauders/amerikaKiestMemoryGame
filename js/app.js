'use strict';


/* Todo

timeout op popup
css breakpoints

*/




var memoryGameApp = angular.module('memoryGameApp', ['ngDialog']);


memoryGameApp.factory('game', function() {
    var tileNames = [{
            name: 'hillary1',
            text: 'Tijdens de herdenking van 9/11 wordt Hillary Clinton onwel.  De geruchtenmolen rond haar gezondheidstoestand komt weer op gang.',
        },
        {
            name: 'trump1',
            text: 'Donald Trump laat in het midden of hij de verkiezingsuitslag zal aanvaarden. Dat gaat in tegen de traditie. Later stelt Trump dat hij de uitslag zal aanvaarden “als hij wint”.',
        },


        {
            name: 'hillary2',
            text: 'Tijdens het eerste debat countert Clinton de opmerking van Trump dat ze nergens te bespeuren viel in de dagen voor het debat.',
        },
        {
            name: 'trump2',
            text: 'Een expliciet geluidsfragment van elf jaar oud lekt uit en beschadigt de campagne van Trump. Daarna volgen vele getuigenissen over de vrouwonvriendelijkheid van de presidentskandidaat. ',
        },


        {
            name: 'hillary3',
            text: 'Verlaag je best niet tot het niveau van mensen die zich laatdunkend over jou uitlaten, zei Michelle Obama tijdens de campagne. Clinton recycleert de quote gretig in haar voordeel.',
        },
        {
            name: 'trump3',
            text: 'Wanneer Trump zich kandidaat stelt voor de Republikeinse nominatie, zegt hij een muur te willen bouwen op de grens met Mexico. Hij noemt hij alle Mexicaanse immigranten drugsverslaafden, criminelen en verkrachters.',
        },


        {
            name: 'hillary4',
            text: 'Clinton stelt dat de helft van de Trump-supporters deel uitmaakt van een bende betreurenswaardige individuen. Later zegt ze spijt te hebben van die uitspraak.',
        },
        {
            name: 'trump4',
            text: 'Na de recente golf van terreuraanslagen in Europa en in de VS roept Trump op tot een volledige ban op immigratie van moslims.',
        },


        {
            name: 'hillary5',
            text: 'Volgens Bernie Sanders is het Amerikaanse volk het beu om over e-mails te praten en zou het veel beter over de toekomst van het land gaan. Toch blijft het ‘e-mailschandaal’ Clinton achtervolgen. ',
        },
        {
            name: 'trump5',
            text: 'De hele campagne beledigt Trump geregeld zijn tegenstanders. Ook de ouders van de gesneuvelde soldaat Humayun Khan spaart hij niet.',
        }


    ];




    return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game, ngDialog) {
    $scope.game = game;
    $scope.play = true;
    $scope.game.openDialog = function(name, text) {

        ngDialog.open({
            template: '<div class="popup"><p>' + text + '</p><video width="100%" height="auto" controls autoplay src="assets/' + name + '.mp4"></video></div>',
            plain: true
        });
    };
});
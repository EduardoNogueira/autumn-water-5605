'use strict';

angular.module('twitch-finder', ['ngRoute', 'twitch-finder.services', 'twitch-finder.controllers'])
    .config(function($sceDelegateProvider, $routeProvider, $httpProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'http://player.twitch.tv/**',
            'self'
        ]);

        $routeProvider.when('/streams-list', {templateUrl: 'views/list.html', controller: 'TwitchFinderController'});
        $routeProvider.when('/stream-detail/:channel', {templateUrl: 'views/stream-detail.html', controller: 'StreamDetailController'});
        $routeProvider.otherwise({redirectTo: '/streams-list'});

        $httpProvider.defaults.headers.common["Client-ID"] = 'q9k2mh6i7wxofogt73wr69eihx41ft7';
    });

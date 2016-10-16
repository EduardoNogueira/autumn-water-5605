'use strict';

angular.module('twitch-finder', ['ngRoute', 'twitch-finder.services', 'twitch-finder.controllers'])
    .config(function($sceDelegateProvider, $routeProvider, $sceProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'http://player.twitch.tv/**',
            'self'
        ]);

        $routeProvider.when('/streams-list', {templateUrl: 'views/list.html', controller: 'TwitchFinderController'});
        $routeProvider.otherwise({redirectTo: '/streams-list'});
    });

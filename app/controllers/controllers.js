'use strict';

/* Controllers */

var app = angular.module('twitch-finder.controllers', []);

app.controller('TwitchFinderController', function ($scope, $http, StreamsFactory, $location) {
    $scope.search = function () {

        StreamsFactory.query({q: $scope.name}, function (data) {
            $scope.listStreams = data;
        });

    };

    $scope.streamDetail = function (channelName) {
        $location.path('/stream-detail/' + channelName);
    };

    $scope.getIframeSrc = function (channelName) {
        return 'http://player.twitch.tv/?channel=' + channelName;
    };
});

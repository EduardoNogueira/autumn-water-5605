'use strict';

/* Controllers */

var app = angular.module('twitch-finder.controllers', []);

app.controller('TwitchFinderController', function ($scope, $http, StreamsFactory, $location) {
    $scope.search = function () {

        $scope.loading = true;
        StreamsFactory.query({q: $scope.name}, function (data) {
            $scope.listStreams = data;
            $scope.loading = false;
        });
    };

    $scope.streamDetail = function (channelName) {
        $location.path('/stream-detail/' + channelName);
    };
});

app.controller('StreamDetailController', function ($scope, $http, StreamFactory, $routeParams) {
    StreamFactory.show({channel: $routeParams.channel}, function (data) {
        $scope.stream = data.stream;
    });

    $scope.getIframeSrc = function (channelName) {
        return 'http://player.twitch.tv/?channel=' + channelName;
    };
});
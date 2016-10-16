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
        /*
        var req = {
            method: 'GET',
            url: 'https://api.twitch.tv/kraken/search/streams?q=' + $scope.name,
            headers: {
                'Client-ID': 'q9k2mh6i7wxofogt73wr69eihx41ft7'
            }
        }
        $http(req).then(function successCallback(response) {
            $scope.listStreams = response.data;
        }, function errorCallback(response) {
            console.log(response)
        });
        */

    };

    $scope.streamDetail = function (channelName) {
        $location.path('/stream-detail/' + channelName);
    };
});

app.controller('StreamDetailController', function ($scope, $http, StreamFactory, $routeParams) {
    console.log("Stream Detalhe!");

    StreamFactory.show({channel: $routeParams.channel}, function (data) {
        $scope.stream = data.stream;
    });

    $scope.getIframeSrc = function (channelName) {
        return 'http://player.twitch.tv/?channel=' + channelName;
    };
});
'use strict';

var services = angular.module('twitch-finder.services', ['ngResource']);

var baseUrl = 'https://api.twitch.tv/kraken';

services.factory('StreamsFactory', function ($resource) {
    return $resource(baseUrl + '/search/streams?q=:q', {}, {
        query: {
            method: 'GET',
            headers: {'Client-ID': 'q9k2mh6i7wxofogt73wr69eihx41ft7'}
        }
    })
});


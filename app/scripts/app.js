"use strict";

var bmApp = angular.module('bmApp', ['ngRoute']);

bmApp.config(function ($routeProvider) {
    $routeProvider.when('/members/:name', {
        // templateUrl: 'templates/member_details_with_expressions.html',
        templateUrl: 'templates/member_details.html',
        controller: 'MemberDetailsCtrl'
    })
        .when('/members', {
            templateUrl: 'templates/member_list.html',
            controller: 'MemberListCtrl'
        })
        .otherwise({
            redirectTo: '/members'
        });
});

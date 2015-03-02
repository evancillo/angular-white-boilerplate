/**
 * Created by sergio on 14-11-14.
 */
'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl:'views/home.view.html',
            controller: 'HomeCtrl'
        })



}])
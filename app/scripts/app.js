'use strict';

/* 
 * It is needed to add the ui.bootstrap module 
 * as a dependency to the Angular modules.
 */
angular.module('appverseClientIncubatorApp', ['ui.bootstrap'])
        .config(function($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainShowIntro'
                    })
                    .when('/proactiveTechnologySelection', {
                        templateUrl: 'views/proactiveTechnologySelection/list.html',
                        controller: 'MainShowIntro'
                    })
                    .when('/proactiveTechnologySelection/detail/:id', {
                        templateUrl: 'views/proactiveTechnologySelection/detail.html',
                        controller: 'ShowDetail'
                    })
                    .when('/technologyStacks', {
                        templateUrl: 'views/technologyStacks/list.html',
                        controller: 'MainShowIntro'
                    })
                    .when('/technologyStacks/detail/:id', {
                        templateUrl: 'views/technologyStacks/detail.html',
                        controller: 'ShowDetail'
                    })
                    .when('/applicationPaterns', {
                        templateUrl: 'views/applicationPaterns/list.html',
                        controller: 'MainShowIntro'
                    })
                    .when('/applicationPaterns/detail/:id', {
                        templateUrl: 'views/applicationPaterns/detail.html',
                        controller: 'ShowDetail'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });

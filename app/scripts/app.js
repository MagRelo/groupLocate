'use strict';

angular.module('GroupLocate', ['ionic', 'GroupLocate.controllers', 'GroupLocate.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

      .state('tabs.list', {
        url: "/list",
        views: {
          'list-tab': {
            templateUrl: "templates/list.html",
            controller: 'ListTabCtrl'
          }
        }
      })

      .state('tabs.create', {
        url: "/create",
        views: {
          'create-tab': {
            templateUrl: "templates/create.html",
            controller: 'CreateTabCtrl'
          }
        }
      })

      .state('tabs.createBeacon', {
        url: "/createBeacon",
        views: {
          'create-tab': {
            templateUrl: "templates/createBeacon.html",
            controller: 'CreateBeaconCtrl'
          }
        }
      })

      .state('tabs.createGroup', {
        url: "/createGroup",
        views: {
          'create-tab': {
            templateUrl: "templates/createGroup.html",
            controller: 'CreateGroupCtrl'
          }
        }
      })

      .state('tabs.map', {
        url: "/map",
        views: {
          'map-tab': {
            templateUrl: "templates/map.html",
            controller: 'MapCtrl'
          }
        }
      })

    ;


    $urlRouterProvider.otherwise("/tab/list");

});

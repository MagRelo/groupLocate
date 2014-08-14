'use strict';

angular.module('GroupLocate',
  ['ionic',
    'GroupLocate.controllers',
    'GroupLocate.directives',
    'GroupLocate.beaconService'])

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

      .state('tabs.createBeacon', {
        url: "/createBeacon",
        views: {
          'create-tab': {
            templateUrl: "../templates/create.html",
            controller: 'CreateBeaconCtrl'
          }
        }
      })

      .state('tabs.viewGroups', {
        url: "/groups",
        views: {
          'view-groups': {
            templateUrl: "templates/viewGroups.html",
            controller: 'GroupCtrl'
          }
        }
      })

      .state('tabs.settings', {
        url: "/settings",
        views: {
          'settings': {
            templateUrl: "templates/settings.html",
            controller: 'SettingCtrl'
          }
        }
      })

    ;


    $urlRouterProvider.otherwise("/tab/list");

});

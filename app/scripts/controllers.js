'use strict';

angular.module('GroupLocate.controllers', [])

  .controller('MapCtrl', function($scope, $ionicLoading) {

    $scope.mapCreated = function(map) {
      $scope.map = map;
    };

    $scope.centerOnMe = function () {
      console.log('Centering');
      if (!$scope.map) {
        return;
      }

      $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('Got pos', pos);
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $ionicLoading.hide();
      }, function (error) {
        alert('Unable to get location: ' + error.message);
      });
    };


  })

  .controller('ListTabCtrl', function($scope){

    $scope.mapCreated = function(map) {
      $scope.map = map;

    };

    $scope.centerOnMe = function () {
      console.log('Centering');
      if (!$scope.map) {
        return;
      }

      $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('Got pos', pos);
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $ionicLoading.hide();
      }, function (error) {
        alert('Unable to get location: ' + error.message);
      });
    };

    $scope.list = [
      'hello', 'there', 'world'
    ];

  })

  .controller('CreateTabCtrl', function($scope){

    $scope.list = [
      'add', 'delete', 'edit'
    ];

  })

  .controller('CreateBeaconCtrl', function($scope){

    $scope.list = [
      'add', 'delete', 'edit'
    ];

  })

  .controller('CreateGroupCtrl', function($scope){

    $scope.list = [
      'add', 'delete', 'edit'
    ];

  })


;
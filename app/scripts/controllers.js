'use strict';

angular.module('GroupLocate.controllers', [])


  .controller('ListTabCtrl', function($scope, $ionicLoading){

    $scope.mapCreated = function(map) {
      $scope.map = map;
    };

    $scope.setCenter = function(lat, long){
      $scope.map.setCenter(new google.maps.LatLng(lat, long));
    };

    $scope.centerOnMe = function () {
      console.log('Centering');
      if (!$scope.map) { return; }

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
      {name: 'NYC', lat:'40.77', long:'-73.98'},
      {name: 'Vegas', lat:'35.59083403679774', long:'-105.22072448730468'},
      {name: 'Seattle', lat:'47.59721093820445', long:'-122.31860620117186'},
      {name: 'Miami', lat:'25.78909119411881', long:'-80.20172241210935'}
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
'use strict';

angular.module('GroupLocate.controllers', [])


  .controller('ListTabCtrl', function($scope, $ionicLoading, beacons){

    //map functions
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


    //get list of beacons
    $scope.list = beacons.list;

  })

  .controller('SettingCtrl', function($scope){

    $scope.notifications = [
      {name: 'new beacon', enabled: true},
      {name: 'new group member', enabled: true}
    ];

  })

  .controller('CreateBeaconCtrl', function($scope, beacons){

    //defaults
    $scope.newBeacon = {
      startDate: new Date().toISOString().split("T")[0],
      duration: 60
    };

    $scope.durationOptions = [
      {display: '15 min', min: '15'},
      {display: '30 min', min: '30'},
      {display: '45 min', min: 45},
      {display: '1 hour', min: 60},
      {display: '2 hours', min: 120},
      {display: '3 hours', min: 180}
    ];

    $scope.add = function(newBeacon){

      beacons.add(newBeacon);

    };

  })

  .controller('GroupCtrl', function($scope){

    $scope.groups = [
      {name: 'asdf', members:[], display: true},
      {name: 'basd', members:[], display: true},
      {name: 'coiu', members:[], display: false}
    ];

  })


;
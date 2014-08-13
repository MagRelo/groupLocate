/**
 * Created by mattlovan on 8/13/14.
 */

'use strict';


angular.module('GroupLocate.beaconService', [])

  .service('beacons', function(){

    this.list = [
      {name: 'NYC', lat:'40.77', long:'-73.98'},
      {name: 'Vegas', lat:'35.59083403679774', long:'-105.22072448730468'},
      {name: 'Seattle', lat:'47.59721093820445', long:'-122.31860620117186'},
      {name: 'Miami', lat:'25.78909119411881', long:'-80.20172241210935'}
    ];

  })

;

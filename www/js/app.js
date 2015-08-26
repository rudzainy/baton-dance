(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $level) {
    $scope.doSomething = function() {
      setTimeout(function() {
        ons.notification.alert({ message: 'tapped' });
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $level) {
    $scope.item = $level.selectedItem;
  });

  module.controller('MainController', function($scope, $level) {
    $scope.items = $level.items;

    $scope.showDetail = function(index) {
      var selectedItem = $level.items[index];
      $level.selectedItem = selectedItem;
      if (index == 0) {
        $scope.navi.pushPage('level1.html', {title : selectedItem.title});
      } else if (index == 1) {
        $scope.navi.pushPage('level2.html', {title : selectedItem.title});
      } else if (index == 2) {
        $scope.navi.pushPage('level3.html', {title : selectedItem.title});
      }
    };
  });

  module.factory('$level', function() {
      var level = {};

      level.items = [
          {
              title: 'Level 1',
              label: 'Beginner',
              desc: 'Low intense routines with long interval for beginners.'
          },
          {
              title: 'Level 2',
              label: 'Intermediate',
              desc: 'Medium intense routines with long interval.'
          },
          {
              title: 'Level 3',
              label: 'Advanced',
              desc: 'High intense routines with various intervals.'
          }
      ];

      return level;
  });

  module.controller('Level1Controller', function($scope, $routine1) {
    $scope.items = $routine1.items;

    $scope.showDetail = function(index) {
      var selectedItem = $routine1.items[index];
      $routine1.selectedItem = selectedItem;
      if (index == 0) {
        $scope.navi.pushPage('level1.html', {title : selectedItem.title});
      } else if (index == 1) {
        $scope.navi.pushPage('level2.html', {title : selectedItem.title});
      } else if (index == 2) {
        $scope.navi.pushPage('level3.html', {title : selectedItem.title});
      }
    };
  });

  module.factory('$routine1', function() {
      var routine1 = {};

      routine1.items = [
          {
              title: 'Warming Up',
              desc: 'Some text here'
          },
          {
              title: 'Station 1',
              desc: 'JAB War Stand'
          },
          {
              title: 'Station 2',
              desc: 'Knee Cross'
          },
          {
              title: 'Station 3',
              desc: 'Shoulder Press'
          },
          {
              title: 'Station 4',
              desc: 'Good Morning'
          },
          {
              title: 'Station 5',
              desc: 'Wall Push Up'
          },
          {
              title: 'Low Impact Aerobic',
              desc: 'Some text here'
          },
          {
              title: 'Cooling Down',
              desc: 'Some text here'
          }
      ];

      return routine1;
  });

  module.controller('Level2Controller', function($scope, $routine2) {
    $scope.items = $routine2.items;

    $scope.showDetail = function(index) {
      var selectedItem = $routine2.items[index];
      $routine2.selectedItem = selectedItem;
      if (index == 0) {
        $scope.navi.pushPage('level1.html', {title : selectedItem.title});
      } else if (index == 1) {
        $scope.navi.pushPage('level2.html', {title : selectedItem.title});
      } else if (index == 2) {
        $scope.navi.pushPage('level3.html', {title : selectedItem.title});
      }
    };
  });

  module.factory('$routine2', function() {
      var routine2 = {};

      routine2.items = [
          {
              title: 'Warming Up',
              desc: 'Some text here'
          },
          {
              title: 'Station 1',
              desc: 'Alternate Shoulder Raise'
          },
          {
              title: 'Station 2',
              desc: 'Sit Crunch'
          },
          {
              title: 'Station 3',
              desc: 'Standing Front Kick'
          },
          {
              title: 'Station 4',
              desc: 'Incline Push Up'
          },
          {
              title: 'Station 5',
              desc: 'Bird Dog'
          },
          {
              title: 'Low Impact Aerobic',
              desc: 'Some text here'
          },
          {
              title: 'Cooling Down',
              desc: 'Some text here'
          }
      ];

      return routine2;
  });

  module.controller('Level3Controller', function($scope, $routine3) {
    $scope.items = $routine3.items;

    $scope.showDetail = function(index) {
      var selectedItem = $routine3.items[index];
      $routine3.selectedItem = selectedItem;
      if (index == 0) {
        $scope.navi.pushPage('level1.html', {title : selectedItem.title});
      } else if (index == 1) {
        $scope.navi.pushPage('level2.html', {title : selectedItem.title});
      } else if (index == 2) {
        $scope.navi.pushPage('level3.html', {title : selectedItem.title});
      }
    };
  });

  module.factory('$routine3', function() {
      var routine3 = {};

      routine3.items = [
          {
              title: 'Warming Up',
              desc: 'Some text here'
          },
          {
              title: 'Station 1',
              desc: 'Staggered Push Up'
          },
          {
              title: 'Station 2',
              desc: 'Band Row'
          },
          {
              title: 'Station 3',
              desc: 'Shoulder Press (Squat Position)'
          },
          {
              title: 'Station 4',
              desc: 'Squat With Chair'
          },
          {
              title: 'Station 5',
              desc: 'Turkish Get Up (TGU)'
          },
          {
              title: 'Low Impact Aerobic',
              desc: 'Some text here'
          },
          {
              title: 'Cooling Down',
              desc: 'Some text here'
          }
      ];

      return routine3;
  });
})();


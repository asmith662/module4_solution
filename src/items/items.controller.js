(function() {
  'use strict';

  angular.module('MenuApp')
      .controller('itemsCtrl', itemsCtrl);

  itemsCtrl.$inject = ['$stateParams', 'MenuDataService', 'items']
  function itemsCtrl($stateParams, MenuDataService, items) {
      let ctrl = this;
      ctrl.items = items;
      ctrl.categoryName = $stateParams.categoryName;
  }
})();

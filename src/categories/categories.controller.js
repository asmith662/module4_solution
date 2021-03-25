(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesCtrl',CategoriesCtrl);

    CategoriesCtrl.$inject = ['MenuDataService', 'categories'];
    function CategoriesCtrl(MenuDataService, categories) {
        let ctrl = this;
        ctrl.categories = categories;
    }
})();

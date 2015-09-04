var ampApp = angular.module('ampApp', ['nvd3ChartDirectives']);



ampApp.controller('mainController', ['$scope', '$log', 'dummyDataService', function($scope, $log, dummyDataService) {

    $scope.data = dummyDataService.getData();
    
    $scope.extraData = dummyDataService.getTimeData();
    
    $scope.click = function(id){
        console.log("Machine ID: " + id);
    }
}]);



ampApp.directive("ampTable", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/table.html',
       replace: true
   }
});
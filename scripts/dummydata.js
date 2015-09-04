angular.module('ampApp').service('dummyDataService', ['$rootScope', function($rootScope) {

    var self = this;
    
    this.getData = function() {
        return [
                {
                    id: "Machine 1",
                    time: "11:40am"
                },
                {
                    id: "Machine 2",
                    time: "1:23pm"
                },
                {
                    id: "Machine 3",
                    time: "6:53am"
                } 
        ];
    
    };
    
    this.getTimeData = function(id) {
        return [{
            "key": "Machine 1",
            "values": [[1,0], [2,1], [3,2], [4,2], [5,1], [6,0]]
        }];
    };
    
 
}]);
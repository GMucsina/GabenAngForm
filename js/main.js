var moljs = angular.module("moljs", []);

moljs.controller("bodyController", ["$scope", function($scope) {

}]);

moljs.controller("tableController", ["$scope", "$http", function($scope, $http) {
    $scope.getJson = function() {
        return $http.get("json/user.json").then( function(res) {
            console.log("getJson", res.data);
            $scope.tableData = res.data;
        });
    };

    $scope.getJson();

    $scope.updateRow = function($index, row) {
        console.log("updateRow", $index, row);
        $http.post("api/api.php", {index: $index, row: row})
            .then( function(res) {
                console.log("PHP result: ", res.data);
            });
    };

    
}]);
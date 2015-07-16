var app = angular.module('myApp', []);
app.controller('myCtrl',function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.users= [ // Array als Eigenschaft
                   {name: "Cristian"},
                   {name: "Jochen"}
    ];
    
});

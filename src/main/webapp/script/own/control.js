/**
 * Created by root on 17-8-14.
 */
//登录界面
angular.module("app").controller('signinController', ['$scope','$http',function($scope,$http) {
    $scope.logindata = {};
    $scope.loginaction = function () {
        $http({
            method: 'POST',
            url: '/signin',
            data: angular.fromJson($scope.logindata)
        }).then(function successCallback(response) {
            console.log(response.data);
            if (!response.success) {
                $scope.errorName = response.errors.name;
                $scope.errorSuperhero = response.errors.superheroAlias;
            } else {
                $scope.message = response.message;
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
    }
}]);
//注册界面
angular.module("app").controller('signupController', ['$scope','$http',function($scope,$http) {
    $scope.signupdata = {};
    $scope.signupaction = function () {
        $http({
            method: 'POST',
            url: '/signup',
            data: angular.fromJson($scope.signupdata)
        }).then(function successCallback(response) {
            var signupResData = response.data;
            console.log(signupResData);
            if (!signupResData) {
                $scope.errorName = response.errors.name;
                $scope.errorSuperhero = response.errors.superheroAlias;
            } else {
                $scope.message = signupResData.message;
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
    }
}]);
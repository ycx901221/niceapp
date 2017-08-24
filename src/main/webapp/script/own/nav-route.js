/**
 * Created by root on 17-6-28.
 */
//登录界面
route.controller('signinController', ['$scope','$http',function($scope,$http) {
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
route.controller('signupController', ['$scope','$http',function($scope,$http) {
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
//路由映射
route.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/article', {template: '这是文章页面'})
        .when('/work', {template: '这是工作页面'})
        .when('/data', {template: '这是数据页面'})
        .when('/manage', {template: '这是管理页面'})
        .when('/signin', {templateUrl: '/template/signin.html',controller:'signinController'})
        .when('/signup', {templateUrl: '/template/signup.html',controller:'signupController'})
        .when('/signout', {template: '这是登出页面'})
}]);
route.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

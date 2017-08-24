/**
 * Created by root on 17-8-14.
 */
angular.module("app").config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/article', {template: '这是文章页面'})
        .when('/work', {template: '这是工作页面'})
        .when('/data', {template: '这是数据页面'})
        .when('/manage', {template: '这是管理页面'})
        .when('/signin', {templateUrl: '/template/signin.html',controller:'signinController'})
        .when('/signup', {templateUrl: '/template/signup.html',controller:'signupController'})
        .when('/signout', {template: '这是登出页面'})}]);

angular.module("app").config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
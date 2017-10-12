/**
 * Created by ChunXiao on 2017/8/15.
 */
//路由映射
angular.module('ngapp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/customer', {template: '这是客户页面'})
        .when('/product', {template: '这是产品页面'})
        .when('/enquirement', {template: '这是询价页面'})
        .when('/quotation', {template: '这是报价页面'})
        .when('/message', {template: '这是消息通知页面'})
        .when('/tools',{templateUrl:'/template/tools.html'})
        .when('/setting',{template:'这是设置页面'})
        .when('/signin', {templateUrl: '/template/signin.html',controller:'signinController'});
        // .when('/signup', {templateUrl: '/html/signup.html',controller:'signupController'})
        // .when('/signout', {template: '这是登出页面'})
}]);
angular.module('ngapp').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix("");
}]);
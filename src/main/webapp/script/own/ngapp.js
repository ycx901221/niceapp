/**
 * Created by ChunXiao on 2017/8/15.
 */
var app = angular.module('ngapp', ['ngRoute']);
app.service('Session', Session);
app.factory('AuthService', ['$location', '$http', 'Session', AuthService]);
/**
 * Session服务
 * @constructor
 */
function Session() {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
}

/**
 * 权限验证服务
 * @param $http
 * @param Session
 * @returns {{}}
 * @constructor
 */
function AuthService($location, $http, Session) {
    var authService = {};

    authService.login = login;

    authService.register = register;

    /**
     * 登录
     * @param credentials
     */
    function login(credentials) {
        var http = $http({
            method: 'POST', url: 'http://' + $location.host() + ':'
            + $location.port() + '/authority/signin',
            data: '{username: credentials.username, password: credentials.password}'
        });
        return http.then(function successCallback(res) {
            Session.create(res.data.sessionid, res.data.userid,
                res.data.role);
            console.log('AuthService login success');
            return res.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
            console.log('AuthService login fail');
            return res.data;
        });
    };

    /**
     * 注册
     * @param credentials 注册填写的数据
     */
    function register(credentials) {
        var http = $http({
            method: 'POST', url: 'http://' + $location.host() + ':'
            + $location.port() + '/authority/signup',
            data: JSON.stringify(credentials)
        });
        return http.then(function successCallback(res) {
            Session.create(res.data.sessionid, res.data.userid,
                res.data.role);
            console.log('AuthService signup success');
            return res.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
            console.log('AuthService signup fail');
            return res.data;
        });
    };

    /**
     * 是否登录
     * @returns {boolean}
     */
    authService.isAuthenticated = function () {
        return !!Session.userId;
    };

    /**
     * 角色是否有权限
     * @param authorizedRoles
     * @returns {boolean}
     */
    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
}
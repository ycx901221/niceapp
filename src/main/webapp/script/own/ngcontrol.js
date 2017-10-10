/**
 * Created by ChunXiao on 2017/8/15.
 */
//显示或隐藏登陆界面
(function () {
    angular.module('ngapp').controller('loginviewshowCtrl', loginviewshowCtrl);
    function loginviewshowCtrl() {
        var lsc = this;
        if (angular.isUndefined(lsc._isShowLogin)) {
            lsc._isShowLogin = true;
        }
        lsc.changeStatus = changeStatus;

        function changeStatus(status) {
            if (angular.equals(true, status)) {
                lsc._isShowLogin = true;
                return lsc._isShowLogin;
            }
            lsc._isShowLogin = false;
            return lsc._isShowLogin;
        }

        return lsc;
    }
})();

// 主页初始化控制
(function () {
    angular.module('ngapp').controller('initControl',
        ['AuthService', initControl]);
    function initControl(AuthService) {
        var ck = this;
        ck.islogin = AuthService.isAuthenticated;
        return ck;
    }
})();

/**
 * 保存当前用户信息
 */
(function () {
    angular.module('ngapp').controller('ApplicationController', ['$scope', 'USER_ROLES', 'AuthService', ApplicationController]);
    function ApplicationController($scope, USER_ROLES, AuthService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized($scope.userRoles);

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }
})();

//登录
(function () {
    angular.module('ngapp').controller('signinController', ['$scope', '$rootScope', '$http', 'AuthService', 'AUTH_EVENTS',
        function ($scope, $rootScope, $http, AuthService, AUTH_EVENTS) {
            $scope.credentials = {
                username: '',
                password: ''
            };
            $scope.login = function (credentials) {
                console.log('login', credentials);
                AuthService.login(credentials).then(function (user) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $scope.$parent.setCurrentUser(user);
                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            };
        }]);
})();
//注册
(function () {
angular.module('ngapp').controller('signupController', ['$scope', '$rootScope', '$http', 'AuthService', 'AUTH_EVENTS',
    function ($scope, $rootScope, $http, AuthService, AUTH_EVENTS) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.register = function (credentials) {
            console.log('register', credentials);
            AuthService.register(credentials).then(function (user) {
                var userjson = angular.toJson(user)
                console.log('register_res', userjson);
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                var parent = $scope.$parent;
                parent.setCurrentUser(userjson);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    }]);
})();
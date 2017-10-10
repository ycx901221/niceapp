/**
 * Created by ChunXiao on 2017/8/16.
 */
/**
 * 用户登录状态
 */
angular.module('ngapp').constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

/**
 * 用户角色
 */
angular.module('ngapp').constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    guest: 'guest'
})
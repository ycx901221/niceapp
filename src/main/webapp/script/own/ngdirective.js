/**
 * Created by ChunXiao on 2017/8/16.
 */
angular.module('ngapp').directive('loginDialog', ['AUTH_EVENTS',function (AUTH_EVENTS) {
    return {
        restrict: 'A',
        template: '<div ng-if="visible" ng-include="\'html/signin.html\'">',
        link: function (scope) {
            var showDialog = function () {
                scope.visible = true;
            };
            scope.visible = false;
            scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
            scope.$on(AUTH_EVENTS.sessionTimeout, showDialog)
        }
    };
}]);
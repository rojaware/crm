"use strict";

bmApp.controller('MemberDetailsCtrl',
function ($scope, $location, $routeParams, MemberDataService) {
    var name = $routeParams.name;
    console.log('current name in MemberDetailsCtrl = '+ name);
    $scope.member = MemberDataService.getMemberByName(name);

    $scope.goToListView = function() {
        $location.path('/members');
    };
});

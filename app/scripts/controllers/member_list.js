"use strict";

bmApp.controller('MemberListCtrl', function ($scope, MemberDataService) {
    $scope.getMemberOrder = function(member) {
        return member.name;
    };

    $scope.members = MemberDataService.getMembers();
});

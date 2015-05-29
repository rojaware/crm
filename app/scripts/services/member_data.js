"use strict";

bmApp.factory('MemberDataService', function() {
    var srv = {};

    srv._members = [
        {
            id : 1,
            name       : 'Scott',
            isMember    : true,
            english        : 'ielts 80',
            place    : 'Seoul',
            fee    : 200,
            graduated      : 'KangNam Univ',
            birthYear   : 1980
        }, 
        {
            id : 2,
            name       : 'Rufina',
            isMember    : false,
            english        : 'ielts 50',
            place    : 'Seoul',
            fee    : 0,
            graduated      : 'Seoul Univ',
            birthYear   : 1990
        }
    ];

    // Service implementation
    srv.getMemberByName = function(name) {
        console.log('current name in service = '+ name);
        for (var i = 0, n = srv._members.length; i < n; i++) {
            console.log('current srv._members['+i+'].name in service = '+ srv._members[i].name);
            if (name === srv._members[i].name) {
                console.log('Found ');
                return angular.copy(srv._members[i]);
            }
        }

        return null;
    };

    srv.getMembers = function() {
        // Copy the array in order not to expose internal data structures
        return angular.copy(srv._members);
    };

    // Public API
    return {
        getMemberByName: function(name) {
            return srv.getMemberByName(name);
        },
        getMembers: function() {
            return srv.getMembers();
        }
    };
});

"use strict";

describe("E2E: member list view", function () {

    // Define the array of members in the expected order.
    // Sorted by name.
    var expectedMembers = [
        {
            id : 2,
            name       : 'Rufina',
            isMember    : false,
            english        : 'ielts 50',
            place    : 'Seoul',
            fee    : 0,
            graduated      : 'Seoul Univ',
            birthYear   : 1990
        },
        {
            id : 1,
            name       : 'Scott',
            isMember    : true,
            english        : 'ielts 80',
            place    : 'Seoul',
            fee    : 200,
            graduated      : 'KangNam Univ',
            birthYear   : 1980
        }
        
    ];

    // Derive an array that only contains titles
    // for easier expectation checks.
    var orderedNames = expectedMembers.map(function(member) {
        return member.name;
    });

    beforeEach(function () {
        browser().navigateTo('#/members');
        browser().reload();
    });

    var selector = 'table.bm-member-list tr';

    it('should show the correct number of members', function () {
        expect(repeater(selector).count()).toEqual(expectedMembers.length);
    });

    it('should show the members in the proper order', function() {
        // Are they in the expected order (ascending sorted by name)?
        expect(repeater(selector).column('member.name')).toEqual(orderedNames);
    });

    it('should show the correct member information', function() {
        // Do the other member details (isbn, author) match?
        for (var i = 0, n = expectedMembers.length; i < n; i++) {
            expect(repeater(selector).row(i))
                .toEqual(
                    [
                        expectedMembers[i].name,
                        expectedMembers[i].isMember.toString(),
                        expectedMembers[i].fee.toString()
                    ]
                );
        }
    });

    it('should allow filtering by member name', function() {
        // Coffee
        var searchText = orderedNames[0].substr(0, 6);
        input('searchText').enter(searchText);
        expect(
            repeater(selector).column('member.name')
        ).toEqual([orderedNames[0]]);
    });

   

    it('should appropriately navigate to details view', function() {
        var i = 0,
            detailsLink = selector + ':nth-child('+ (i+1) +') a';
        element(detailsLink).click();

        expect(
            browser().location().path()
        ).toEqual('/members/' + expectedMembers[i].name);
    });

});
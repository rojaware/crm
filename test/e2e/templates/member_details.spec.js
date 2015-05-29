"use strict";

describe("E2E: member details view", function() {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should show the correct member details', function() {
        browser().navigateTo('#/members/Rufina');

        expect(element('.bm-member-name').html()).toBe(
            'Rufina'
        );
        expect(element('.bm-member-english').html()).toBe(
            'English: ielts 50'
        );
        expect(element('.bm-member-id').html()).toBe(
            '2'
        );
       
    });

    it('should appropriately navigate to list view', function() {
        browser().navigateTo('#/members/Rufina');

        element('.bm-list-view-btn').click();

        expect(
            browser().location().path()
        ).toEqual('/members');
    });

});
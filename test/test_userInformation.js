var chai = require('chai');
var wkw = require('./../src/wkw');
var assert = chai.assert;

describe('UserInformation', function() {
    var testUser = new wkw.user('bbf426d6937cbb77d9f908c08d90c3ce');
    testUser.getUserInformation();

    it('should not have requested_information', function() {
       assert.isNull(testUser.requested_information);
    });

    it('should have a username', function() {
        assert.isNotNull(testUser.userInformation);
        assert.isNotNull(testUser.username);
    });

    // it('should have a level', function() {
    //     assert.isNotNull(testUser.level);
    // });

    // it('should have a title', function() {
    //     assert.isNotNull(testUser.title);
    // });

    // it('should have topics_count', function() {
    //     assert.isNotNull(testUser.topics_count);
    // });

    // it('should have posts_count', function() {
    //     assert.isNotNull(testUser.posts_count);
    // });

    // it('should have a creation_date', function() {
    //     assert.isNotNull(testUser.creation_date);
    // });
});
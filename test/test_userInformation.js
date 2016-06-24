var chai = require('chai');
var wkw = require('./../src/wkw');
var assert = chai.assert;

describe('UserInformation', function() {
    var testUser = new wkw.user('bbf426d6937cbb77d9f908c08d90c3ce');

    it('should not have requested_information', function() {
       assert.isNull(testUser.requested_information);
    });

    it('should have a valid username', function() {
        assert.isNotNull(testUser.username);
        assert.isAbove(testUser.username.length, 0);
    });

    it('should have a valid level', function() {
        assert.isNotNull(testUser.level);
        assert.isNumber(testUser.level);
        assert.isAtLeast(testUser.level, 1);
    });

    it('should have a valid title', function() {
        assert.isNotNull(testUser.title);
        assert.isAbove(testUser.title, 0);
    });

    it('should have topics_count', function() {
        assert.isNotNull(testUser.topics_count);
        assert.isNumber(testUser.topics_count);
        assert.isAtLeast(testUser.topics_count, 0);
    });

    it('should have posts_count', function() {
        assert.isNotNull(testUser.posts_count);
        assert.isNumber(testUser.posts_count);
        assert.isAtLeast(testUser.posts_count, 0);
    });

    it('should have a creation_date', function() {
        assert.isNotNull(testUser.creation_date);
    });
});
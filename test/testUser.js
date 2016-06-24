var assert = chai.assert;

describe('User', function() {
    var testUser = new wkw.user('bbf426d6937cbb77d9f908c08d90c3ce');

    it('should not be null', function() {
        assert.isNotNull(testUser);
    });

    it('should have a 32-digit hexadecimal API key', function() {
        assert.equal(testUser.key, 'bbf426d6937cbb77d9f908c08d90c3ce');
        assert.equal(testUser.key.length, 32);
    });
});
var assert = chai.assert;

describe('Cache', function() {
    var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
    testUser.user_information = new Proto(1000, "", "user_information");

    it('should expire after 1 second', function(done) {
        this.timeout(4000);
        // testUser.user_information["isExpired"] =
        setTimeout(function() {
            assert.isTrue(testUser.user_information.isExpired());
            done();
        },2000);
    });
});
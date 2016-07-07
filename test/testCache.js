var assert = chai.assert;

describe('Cache', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');

    // not visible so re-create proto here
    var cacheProto = function(expirationTime, apiResourceLoc, userResourceLoc) {
        this.time = expirationTime;
        this.isEmpty = true;
        this.apiResourceLoc = apiResourceLoc;
        this.userResourceLoc = userResourceLoc;
        this.expiration = new Date();
    };
    cacheProto.prototype.isExpired = function() { return new Date() - this.expiration > this.time; };

    testUser.user_information = new cacheProto(1000, "", "user_information");

    it('should expire after 1 second', function(done) {
        this.timeout(4000);
        // testUser.user_information["isExpired"] =
        setTimeout(function() {
            assert.isTrue(testUser.user_information.isExpired());
            done();
        },2000);
    });
});
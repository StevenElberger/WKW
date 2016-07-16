var assert = chai.assert;

describe('Rate Limiting', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax([
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/",
            proxy: "./mocks/userInformation.json"
        }
    ]);
    
    it('should be kept track of after each call', function(done) {
        testUser.getUserInformation().then(function() {
            assert.isNotNull(testUser.num_requests_made);
            assert.isNumber(testUser.num_requests_made);
            assert.equal(testUser.num_requests_made, 1);
            done();
        });
    });

    it('should not increment counters if the API is not called', function() {
        testUser.getUserInformation().then(function() {
            // already cached so expect the same number as last call
            assert.isNotNull(testUser.num_requests_made);
            assert.isNumber(testUser.num_requests_made);
            assert.equal(testUser.num_requests_made, 1);
        });
    });

    it('should prevent a call to the API if >= 100 are made within an hour', function() {
        testUser.num_requests_made = 100;
        // use the force boolean to ignore rate limiting
        testUser.getUserInformation(true).then(function() {
            assert.isNotNull(testUser.num_requests_made);
            assert.isNumber(testUser.num_requests_made);
            assert.equal(testUser.num_requests_made, 101);
        });
    });
});
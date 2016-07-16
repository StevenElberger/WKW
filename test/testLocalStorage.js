var assert = chai.assert;

describe('LocalStorage', function() {
    
    before(function() {
        // clear storage in case there's any data
        localStorage.removeItem("WKW");
    });

    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');

    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/",
        proxy: "./mocks/userInformation.json"
    });

    it('should be updated after a user\'s data is refreshed', function() {
        testUser.getUserInformation().then(function() {
            assert.isNotNull(localStorage.getItem("WKW"));
        });
    });

    it('should be queried initially and correctly instantiate stored users', function(done) {
        // overwrite the internal users
        // array with data in local storage
        // this is called here to simulate a page refresh
        WKW.getStoredData();
        // this is the user just retrieved from local storage
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // the user should have data from the previous 'it'
        assert.isNotNull(testUser);
        assert.isNotNull(testUser.user_information);
        assert.equal(testUser.user_information.username, "TestUser");
        done();
    });
});
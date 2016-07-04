var assert = chai.assert;

describe('Errors', function() {

    describe('with user information', function() {
        var testUser = new User('1234567890abcdefghijk1234567890a');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/1234567890abcdefghijk1234567890a/",
            responseText: {
                "error": {
                    "code": "user_not_found",
                    "message": "User does not exist."
                }
            }
        });

        it('should return an error object with user not found', function(done) {
            testUser.getUserInformation(function(error) {
                assert.isDefined(error);
                assert.isNotNull(error);
                assert.isDefined(error.error);
                assert.isNotNull(error.error);
                assert.isDefined(error.error.code);
                assert.isNotNull(error.error.code);
                assert.equal(error.error.code, "user_not_found");
                assert.isDefined(error.error.message);
                assert.isNotNull(error.error.message);
                assert.equal(error.error.message, "User does not exist.");
                done();
            });
        });
    });

    describe('with the radicals list', function() {
        var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/radicals/-1",
            responseText: {
                "error": {
                    "code": "invalid_arguments",
                    "message": "Levels requested invalid."
                }
            }
        });

        it('should return an error object with invalid_arguments', function(done) {
            // remove error checking and just make a direct call so we can
            // get the error object
            testUser.getRadicals = function(levels, callback) {
                retrieveObjectData(this, this.radicals, callback, levels);
            };

            testUser.getRadicals(-1, function(error) {
                assert.isDefined(error);
                assert.isNotNull(error);
                assert.isDefined(error.error);
                assert.isNotNull(error.error);
                assert.isDefined(error.error.code);
                assert.isNotNull(error.error.code);
                assert.equal(error.error.code, "invalid_arguments");
                assert.isDefined(error.error.message);
                assert.isNotNull(error.error.message);
                assert.equal(error.error.message, "Levels requested invalid.");
                done();
            });
        });
    });

    describe('with the kanji list', function() {
        var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/kanji/-1",
            responseText: {
                "error": {
                    "code": "invalid_arguments",
                    "message": "Levels requested invalid."
                }
            }
        });

        it('should return an error object with invalid_arguments', function(done) {
            // remove error checking and just make a direct call so we can
            // get the error object
            testUser.getKanji = function(levels, callback) {
                retrieveObjectData(this, this.radicals, callback, levels);
            };

            testUser.getKanji(-1, function(error) {
                assert.isDefined(error);
                assert.isNotNull(error);
                assert.isDefined(error.error);
                assert.isNotNull(error.error);
                assert.isDefined(error.error.code);
                assert.isNotNull(error.error.code);
                assert.equal(error.error.code, "invalid_arguments");
                assert.isDefined(error.error.message);
                assert.isNotNull(error.error.message);
                assert.equal(error.error.message, "Levels requested invalid.");
                done();
            });
        });
    });

    describe('with the vocabulary list', function() {
        var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary/-1",
            responseText: {
                "error": {
                    "code": "invalid_arguments",
                    "message": "Levels requested invalid."
                }
            }
        });

        it('should return an error object with invalid_arguments', function(done) {
            // remove error checking and just make a direct call so we can
            // get the error object
            testUser.getVocabulary = function(levels, callback) {
                retrieveObjectData(this, this.radicals, callback, levels);
            };

            testUser.getVocabulary(-1, function(error) {
                assert.isDefined(error);
                assert.isNotNull(error);
                assert.isDefined(error.error);
                assert.isNotNull(error.error);
                assert.isDefined(error.error.code);
                assert.isNotNull(error.error.code);
                assert.equal(error.error.code, "invalid_arguments");
                assert.isDefined(error.error.message);
                assert.isNotNull(error.error.message);
                assert.equal(error.error.message, "Levels requested invalid.");
                done();
            });
        });
    });
});
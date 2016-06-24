var assert = chai.assert;

describe('UserInformation', function() {
    var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce",
        responseText: {
            "user_information": {
                "username": "TestUser",
                "gravatar": "bbf426d6937cbb77d9f908c08d90c3ce",
                "level": 30,
                "title": "Turtles",
                "about": "",
                "website": null,
                "twitter": null,
                "topics_count": 0,
                "posts_count": 0,
                "creation_date": 1388623423,
                "vacation_date": null
            },
            "requested_information": null
        }
    });

    it('should have a valid username', function(done) {
        testUser.getUserInformation(function() {
            assert.isNotNull(testUser.user_information.username);
            assert.isAbove(testUser.user_information.username.length, 0);
            done();
        });
    });

    it('should have a valid level', function() {
        testUser.getUserInformation(function() {
            assert.isNotNull(testUser.user_information.level);
            assert.isNumber(testUser.user_information.level);
            assert.isAtLeast(testUser.user_information.level, 1);
        });
    });

    it('should have a valid title', function() {
        testUser.getUserInformation(function() {
            assert.isNotNull(testUser.user_information.title);
            assert.isAbove(testUser.user_information.title.length, 0);
        });
    });

    it('should have topics_count', function() {
        testUser.getUserInformation(function() {
            assert.isNotNull(testUser.user_information.topics_count);
            assert.isNumber(testUser.user_information.topics_count);
            assert.isAtLeast(testUser.user_information.topics_count, 0);
        });
    });

    it('should have posts_count', function() {
        testUser.getUserInformation(function() {
            assert.isNotNull(testUser.user_information.posts_count);
            assert.isNumber(testUser.user_information.posts_count);
            assert.isAtLeast(testUser.user_information.posts_count, 0);
        });
    });

    it('should have a creation_date', function() {
        testUser.getUserInformation(function() {
            assert.isNotNull(testUser.user_information.creation_date);
        });
    });
});
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
    // make the call to get data
    testUser.getUserInformation();

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
var assert = chai.assert;

describe('RecentUnlocksList', function() {
    var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/recent-unlocks",
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
            "requested_information": [
                {
                    "type": "vocabulary",
                    "character": "懐かしい",
                    "kana": "なつかしい",
                    "meaning": "nostalgic, nostalgia",
                    "level": 30,
                    "unlocked_date": 1464643035
                },
                {
                    "type": "radical",
                    "character": "北",
                    "meaning": "north",
                    "image": null,
                    "level": 30,
                    "unlocked_date": 1464105337
                },
                {
                    "type": "kanji",
                    "character": "更",
                    "meaning": "again",
                    "onyomi": "こう",
                    "kunyomi": "さら, ふ",
                    "nanori": null,
                    "important_reading": "onyomi",
                    "level": 30,
                    "unlocked_date": 1464105336
                }
            ]
        }
    });

    it('should have three different types', function(done) {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks);
            assert.isNotNull(testUser.recent_unlocks[0].type);
            assert.isNotNull(testUser.recent_unlocks[1].type);
            assert.isNotNull(testUser.recent_unlocks[2].type);
            done();
        });
    });

    it('should have vocabulary, radical, and kanji', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[0].type);
            assert.isNotNull(testUser.recent_unlocks[1].type);
            assert.isNotNull(testUser.recent_unlocks[2].type);
            assert.equal(testUser.recent_unlocks[0].type, "vocabulary");
            assert.equal(testUser.recent_unlocks[1].type, "radical");
            assert.equal(testUser.recent_unlocks[2].type, "kanji");
        });
    });

    it('should have valid characters for each type', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[0].character);
            assert.isNotNull(testUser.recent_unlocks[1].character);
            assert.isNotNull(testUser.recent_unlocks[2].character);
            assert.isString(testUser.recent_unlocks[0].character);
            assert.isString(testUser.recent_unlocks[1].character);
            assert.isString(testUser.recent_unlocks[2].character);
        });
    });

    it('should have valid meaning for each type', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[0].meaning);
            assert.isString(testUser.recent_unlocks[0].meaning);
            assert.isNotNull(testUser.recent_unlocks[1].meaning);
            assert.isString(testUser.recent_unlocks[1].meaning);
            assert.isNotNull(testUser.recent_unlocks[2].meaning);
            assert.isString(testUser.recent_unlocks[2].meaning);
        });
    });

    it('should have valid level for each type', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[0].level);
            assert.isNotNull(testUser.recent_unlocks[1].level);
            assert.isNotNull(testUser.recent_unlocks[2].level);
            assert.isNumber(testUser.recent_unlocks[0].level);
            assert.isNumber(testUser.recent_unlocks[1].level);
            assert.isNumber(testUser.recent_unlocks[2].level);
        });
    });

    it('should have valid unlocked date for each type', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[0].unlocked_date);
            assert.isNotNull(testUser.recent_unlocks[1].unlocked_date);
            assert.isNotNull(testUser.recent_unlocks[2].unlocked_date);
            assert.isNumber(testUser.recent_unlocks[0].unlocked_date);
            assert.isNumber(testUser.recent_unlocks[1].unlocked_date);
            assert.isNumber(testUser.recent_unlocks[2].unlocked_date);
        });
    });

    it('should have valid kana for vocabulary', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[0].kana);
            assert.isString(testUser.recent_unlocks[0].kana);
        });
    });

    it('should have valid onyomi for kanji', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[2].onyomi);
            assert.isString(testUser.recent_unlocks[2].onyomi);
        });
    });

    it('should have valid kunyomi for kanji', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[2].kunyomi);
            assert.isString(testUser.recent_unlocks[2].kunyomi);
        });
    });

    it('should have valid nanori for kanji', function() {
        testUser.getRecentUnlocksList(function() {
            assert.isDefined(testUser.recent_unlocks[2].nanori);
        });
    });

    it('should have valid important reading for kanji', function() {
       testUser.getRecentUnlocksList(function() {
            assert.isNotNull(testUser.recent_unlocks[2].important_reading);
            assert.isString(testUser.recent_unlocks[2].important_reading);
       });
    });
});
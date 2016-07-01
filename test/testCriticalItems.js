var assert = chai.assert;

describe('RecentUnlocksList', function() {
    var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/critical-items",
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
                  "type": "radical",
                  "character": "大",
                  "meaning": "big",
                  "image": null,
                  "level": 1,
                  "percentage": "83"
                },
                {
                  "type": "vocabulary",
                  "character": "一つ",
                  "kana": "ひとつ",
                  "meaning": "one thing",
                  "level": 1,
                  "percentage": "84"
                },
                {
                  "type": "kanji",
                  "character": "七",
                  "meaning": "seven",
                  "onyomi": "しち",
                  "kunyomi": "なな.*",
                  "nanori": null,
                  "important_reading": "onyomi",
                  "level": 1,
                  "percentage": "93"
                }
            ]
        }
    });

    it('should have three different types', function(done) {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items);
            assert.isNotNull(testUser.critical_items[0].type);
            assert.isNotNull(testUser.critical_items[1].type);
            assert.isNotNull(testUser.critical_items[2].type);
            done();
        });
    });

    it('should have vocabulary, radical, and kanji', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[0].type);
            assert.isNotNull(testUser.critical_items[1].type);
            assert.isNotNull(testUser.critical_items[2].type);
            assert.equal(testUser.critical_items[0].type, "radical");
            assert.equal(testUser.critical_items[1].type, "vocabulary");
            assert.equal(testUser.critical_items[2].type, "kanji");
        });
    });

    it('should have valid characters for each type', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[0].character);
            assert.isNotNull(testUser.critical_items[1].character);
            assert.isNotNull(testUser.critical_items[2].character);
            assert.isString(testUser.critical_items[0].character);
            assert.isString(testUser.critical_items[1].character);
            assert.isString(testUser.critical_items[2].character);
        });
    });

    it('should have valid meaning for each type', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[0].meaning);
            assert.isString(testUser.critical_items[0].meaning);
            assert.isNotNull(testUser.critical_items[1].meaning);
            assert.isString(testUser.critical_items[1].meaning);
            assert.isNotNull(testUser.critical_items[2].meaning);
            assert.isString(testUser.critical_items[2].meaning);
        });
    });

    it('should have valid level for each type', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[0].level);
            assert.isNotNull(testUser.critical_items[1].level);
            assert.isNotNull(testUser.critical_items[2].level);
            assert.isNumber(testUser.critical_items[0].level);
            assert.isNumber(testUser.critical_items[1].level);
            assert.isNumber(testUser.critical_items[2].level);
        });
    });

    it('should have valid percentage for each type', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[0].percentage);
            assert.isNotNull(testUser.critical_items[1].percentage);
            assert.isNotNull(testUser.critical_items[2].percentage);
            assert.isNumber(parseInt(testUser.critical_items[0].percentage));
            assert.isNumber(parseInt(testUser.critical_items[1].percentage));
            assert.isNumber(parseInt(testUser.critical_items[2].percentage));
        });
    });

    it('should have valid kana for vocabulary', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[1].kana);
            assert.isString(testUser.critical_items[1].kana);
        });
    });

    it('should have valid onyomi for kanji', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[2].onyomi);
            assert.isString(testUser.critical_items[2].onyomi);
        });
    });

    it('should have valid kunyomi for kanji', function() {
        testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[2].kunyomi);
            assert.isString(testUser.critical_items[2].kunyomi);
        });
    });

    it('should have valid nanori for kanji', function() {
        testUser.getCriticalItemsList(function() {
            assert.isDefined(testUser.critical_items[2].nanori);
        });
    });

    it('should have valid important reading for kanji', function() {
       testUser.getCriticalItemsList(function() {
            assert.isNotNull(testUser.critical_items[2].important_reading);
            assert.isString(testUser.critical_items[2].important_reading);
       });
    });
});
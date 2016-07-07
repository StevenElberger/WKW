var assert = chai.assert;

describe('LevelProgression', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    //mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/level-progression",
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
            "requested_information": {
                "radicals_progress": 0,
                "radicals_total": 26,
                "kanji_progress": 0,
                "kanji_total": 0
            }
        }
    });

    it('should have a valid number of radicals_progress', function(done) {
        testUser.getLevelProgression(function() {
            assert.isNotNull(testUser.level_progression.radicals_progress);
            assert.isNumber(testUser.level_progression.radicals_progress);
            assert.isAtLeast(testUser.level_progression.radicals_progress, 0);
            assert.isBelow(testUser.level_progression.radicals_progress, 100);
            done();
        });
    });

    it('should have a valid number of radicals_total', function() {
        testUser.getLevelProgression(function() {
            assert.isNotNull(testUser.level_progression.radicals_total);
            assert.isNumber(testUser.level_progression.radicals_total);
            assert.isAtLeast(testUser.level_progression.radicals_total, 0);
            assert.isBelow(testUser.level_progression.radicals_total, 100);
        });
    });

    it('should have a valid number of kanji_progress', function() {
        testUser.getLevelProgression(function() {
            assert.isNotNull(testUser.level_progression.kanji_progress);
            assert.isNumber(testUser.level_progression.kanji_progress);
            assert.isAtLeast(testUser.level_progression.kanji_progress, 0);
            assert.isBelow(testUser.level_progression.kanji_progress, 100);
        });
    });

    it('shouldh ave a valid number of kanji_total', function() {
        testUser.getLevelProgression(function() {
            assert.isNotNull(testUser.level_progression.kanji_total);
            assert.isNumber(testUser.level_progression.kanji_total);
            assert.isAtLeast(testUser.level_progression.kanji_total, 0);
            assert.isBelow(testUser.level_progression.kanji_total, 100);
        });
    });
});
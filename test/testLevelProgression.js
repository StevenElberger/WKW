var assert = chai.assert;

describe('LevelProgression', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    //mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/level-progression",
        proxy: "./mocks/levelProgression.json"
    });

    it('should have a valid number of radicals_progress', function(done) {
        testUser.getLevelProgression().then(function() {
            assert.isNotNull(testUser.level_progression.radicals_progress);
            assert.isNumber(testUser.level_progression.radicals_progress);
            assert.isAtLeast(testUser.level_progression.radicals_progress, 0);
            assert.isBelow(testUser.level_progression.radicals_progress, 100);
            done();
        });
    });

    it('should have a valid number of radicals_total', function() {
        testUser.getLevelProgression().then(function() {
            assert.isNotNull(testUser.level_progression.radicals_total);
            assert.isNumber(testUser.level_progression.radicals_total);
            assert.isAtLeast(testUser.level_progression.radicals_total, 0);
            assert.isBelow(testUser.level_progression.radicals_total, 100);
        });
    });

    it('should have a valid number of kanji_progress', function() {
        testUser.getLevelProgression().then(function() {
            assert.isNotNull(testUser.level_progression.kanji_progress);
            assert.isNumber(testUser.level_progression.kanji_progress);
            assert.isAtLeast(testUser.level_progression.kanji_progress, 0);
            assert.isBelow(testUser.level_progression.kanji_progress, 100);
        });
    });

    it('shouldh ave a valid number of kanji_total', function() {
        testUser.getLevelProgression().then(function() {
            assert.isNotNull(testUser.level_progression.kanji_total);
            assert.isNumber(testUser.level_progression.kanji_total);
            assert.isAtLeast(testUser.level_progression.kanji_total, 0);
            assert.isBelow(testUser.level_progression.kanji_total, 100);
        });
    });
});
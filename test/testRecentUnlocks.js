var assert = chai.assert;

describe('RecentUnlocksList', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/recent-unlocks",
        proxy: "./mocks/recentUnlocks.json"
    });

    it('should have three different types', function(done) {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks);
            assert.isNotNull(testUser.recent_unlocks[0].type);
            assert.isNotNull(testUser.recent_unlocks[1].type);
            assert.isNotNull(testUser.recent_unlocks[2].type);
            done();
        });
    });

    it('should have vocabulary, radical, and kanji', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[0].type);
            assert.isNotNull(testUser.recent_unlocks[1].type);
            assert.isNotNull(testUser.recent_unlocks[2].type);
            assert.equal(testUser.recent_unlocks[0].type, "vocabulary");
            assert.equal(testUser.recent_unlocks[1].type, "radical");
            assert.equal(testUser.recent_unlocks[2].type, "kanji");
        });
    });

    it('should have valid characters for each type', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[0].character);
            assert.isNotNull(testUser.recent_unlocks[1].character);
            assert.isNotNull(testUser.recent_unlocks[2].character);
            assert.isString(testUser.recent_unlocks[0].character);
            assert.isString(testUser.recent_unlocks[1].character);
            assert.isString(testUser.recent_unlocks[2].character);
        });
    });

    it('should have valid meaning for each type', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[0].meaning);
            assert.isString(testUser.recent_unlocks[0].meaning);
            assert.isNotNull(testUser.recent_unlocks[1].meaning);
            assert.isString(testUser.recent_unlocks[1].meaning);
            assert.isNotNull(testUser.recent_unlocks[2].meaning);
            assert.isString(testUser.recent_unlocks[2].meaning);
        });
    });

    it('should have valid level for each type', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[0].level);
            assert.isNotNull(testUser.recent_unlocks[1].level);
            assert.isNotNull(testUser.recent_unlocks[2].level);
            assert.isNumber(testUser.recent_unlocks[0].level);
            assert.isNumber(testUser.recent_unlocks[1].level);
            assert.isNumber(testUser.recent_unlocks[2].level);
        });
    });

    it('should have valid unlocked date for each type', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[0].unlocked_date);
            assert.isNotNull(testUser.recent_unlocks[1].unlocked_date);
            assert.isNotNull(testUser.recent_unlocks[2].unlocked_date);
            assert.isNumber(testUser.recent_unlocks[0].unlocked_date);
            assert.isNumber(testUser.recent_unlocks[1].unlocked_date);
            assert.isNumber(testUser.recent_unlocks[2].unlocked_date);
        });
    });

    it('should have valid kana for vocabulary', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[0].kana);
            assert.isString(testUser.recent_unlocks[0].kana);
        });
    });

    it('should have valid onyomi for kanji', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[2].onyomi);
            assert.isString(testUser.recent_unlocks[2].onyomi);
        });
    });

    it('should have valid kunyomi for kanji', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[2].kunyomi);
            assert.isString(testUser.recent_unlocks[2].kunyomi);
        });
    });

    it('should have valid nanori for kanji', function() {
        testUser.getRecentUnlocksList().then(function() {
            assert.isDefined(testUser.recent_unlocks[2].nanori);
        });
    });

    it('should have valid important reading for kanji', function() {
       testUser.getRecentUnlocksList().then(function() {
            assert.isNotNull(testUser.recent_unlocks[2].important_reading);
            assert.isString(testUser.recent_unlocks[2].important_reading);
       });
    });

    it('should allow retrieval specified by type', function() {
        testUser.getRecentUnlocksList().then(function() {
            var radArray = testUser.recent_unlocks.getRadicals(),
                kanjiArray = testUser.recent_unlocks.getKanji(),
                vocabArray = testUser.recent_unlocks.getVocabulary();
            assert.isNotNull(radArray);
            assert.equal(radArray.length, 1);
            assert.equal(radArray[0].type, "radical");
            assert.isNotNull(kanjiArray);
            assert.equal(kanjiArray.length, 1);
            assert.equal(kanjiArray[0].type, "kanji");
            assert.isNotNull(vocabArray);
            assert.equal(vocabArray.length, 1);
            assert.equal(vocabArray[0].type, "vocabulary");
        });
    });

    it('should allow retrieval specified by character', function() {
        testUser.getRecentUnlocksList().then(function() {
            var resultArray = testUser.recent_unlocks.getByCharacter("北");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].character, "北");
        });
    });

    it('should allow retrieval specified by meaning', function() {
        testUser.getRecentUnlocksList().then(function() {
            var resultArray = testUser.recent_unlocks.getByMeaning("again");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].meaning, "again");
        });
    });

    it('should allow retrieval specified by level', function() {
        testUser.getRecentUnlocksList().then(function() {
            var resultArray = testUser.recent_unlocks.getByLevel(30);
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 3);
            assert.equal(resultArray[2].level, 30);
        });
    });

    it('should allow retrieval specified by unlocked date', function() {
        testUser.getRecentUnlocksList().then(function() {
            var resultArray = testUser.recent_unlocks.getByUnlockedDate(1464105337);
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].unlocked_date, 1464105337);
        });
    });
});
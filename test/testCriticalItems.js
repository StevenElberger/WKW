var assert = chai.assert;

describe('CriticalItemsList', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/critical-items",
        responseText: window.__mocks__["test/mocks/criticalItems"]
    });

    it('should have three different types', function(done) {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items);
            assert.isNotNull(testUser.critical_items[0].type);
            assert.isNotNull(testUser.critical_items[1].type);
            assert.isNotNull(testUser.critical_items[2].type);
            done();
        });
    });

    it('should have vocabulary, radical, and kanji', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[0].type);
            assert.isNotNull(testUser.critical_items[1].type);
            assert.isNotNull(testUser.critical_items[2].type);
            assert.equal(testUser.critical_items[0].type, "radical");
            assert.equal(testUser.critical_items[1].type, "vocabulary");
            assert.equal(testUser.critical_items[2].type, "kanji");
        });
    });

    it('should have valid characters for each type', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[0].character);
            assert.isNotNull(testUser.critical_items[1].character);
            assert.isNotNull(testUser.critical_items[2].character);
            assert.isString(testUser.critical_items[0].character);
            assert.isString(testUser.critical_items[1].character);
            assert.isString(testUser.critical_items[2].character);
        });
    });

    it('should have valid meaning for each type', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[0].meaning);
            assert.isString(testUser.critical_items[0].meaning);
            assert.isNotNull(testUser.critical_items[1].meaning);
            assert.isString(testUser.critical_items[1].meaning);
            assert.isNotNull(testUser.critical_items[2].meaning);
            assert.isString(testUser.critical_items[2].meaning);
        });
    });

    it('should have valid level for each type', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[0].level);
            assert.isNotNull(testUser.critical_items[1].level);
            assert.isNotNull(testUser.critical_items[2].level);
            assert.isNumber(testUser.critical_items[0].level);
            assert.isNumber(testUser.critical_items[1].level);
            assert.isNumber(testUser.critical_items[2].level);
        });
    });

    it('should have valid percentage for each type', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[0].percentage);
            assert.isNotNull(testUser.critical_items[1].percentage);
            assert.isNotNull(testUser.critical_items[2].percentage);
            assert.isNumber(parseInt(testUser.critical_items[0].percentage));
            assert.isNumber(parseInt(testUser.critical_items[1].percentage));
            assert.isNumber(parseInt(testUser.critical_items[2].percentage));
        });
    });

    it('should have valid kana for vocabulary', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[1].kana);
            assert.isString(testUser.critical_items[1].kana);
        });
    });

    it('should have valid onyomi for kanji', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[2].onyomi);
            assert.isString(testUser.critical_items[2].onyomi);
        });
    });

    it('should have valid kunyomi for kanji', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[2].kunyomi);
            assert.isString(testUser.critical_items[2].kunyomi);
        });
    });

    it('should have valid nanori for kanji', function() {
        testUser.getCriticalItemsList().then(function() {
            assert.isDefined(testUser.critical_items[2].nanori);
        });
    });

    it('should have valid important reading for kanji', function() {
       testUser.getCriticalItemsList().then(function() {
            assert.isNotNull(testUser.critical_items[2].important_reading);
            assert.isString(testUser.critical_items[2].important_reading);
       });
    });

    it('should allow retrieval specified by type', function() {
        testUser.getCriticalItemsList().then(function() {
            var radArray = testUser.critical_items.getRadicals(),
                kanjiArray = testUser.critical_items.getKanji(),
                vocabArray = testUser.critical_items.getVocabulary();
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
        testUser.getCriticalItemsList().then(function() {
            var resultArray = testUser.critical_items.getByCharacter("大");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].character, "大");
        });
    });

    it('should allow retrieval specified by meaning', function() {
        testUser.getCriticalItemsList().then(function() {
            var resultArray = testUser.critical_items.getByMeaning("big");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].meaning, "big");
        });
    });

    it('should allow retrieval specified by level', function() {
        testUser.getCriticalItemsList().then(function() {
            var resultArray = testUser.critical_items.getByLevel(1);
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 3);
            assert.equal(resultArray[2].level, 1);
        });
    });

    it('should allow retrieval specified by percentage', function() {
        testUser.getCriticalItemsList().then(function() {
            var resultArray = testUser.critical_items.getByPercentage("93");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].percentage, "93");
        });
    });
});
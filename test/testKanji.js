var assert = chai.assert;

describe('Kanji', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/kanji",
        proxy: "./mocks/kanji.json"
    });

    it('should have a kanji list', function(done) {
        testUser.getKanjiList(function() {
            assert.isNotNull(testUser.kanji);
            assert.isNotNull(testUser.kanji[0]);
            assert.isNotNull(testUser.kanji[1]);
            done();
        });
    });

    it('should have kanji with valid characters', function() {
        testUser.getKanjiList(function() {
            assert.isDefined(testUser.kanji[0].character);
            assert.isDefined(testUser.kanji[1].character);
        });
    });

    it('should have kanji with meanings', function() {
        testUser.getKanjiList(function() {
            assert.isDefined(testUser.kanji[0].meaning);
            assert.isDefined(testUser.kanji[1].meaning);
            assert.isNotNull(testUser.kanji[0].meaning);
            assert.isNotNull(testUser.kanji[1].meaning);
            assert.isString(testUser.kanji[0].meaning);
            assert.isString(testUser.kanji[1].meaning);
            assert.equal(testUser.kanji[0].meaning, "mouth");
            assert.equal(testUser.kanji[1].meaning, "above, up, over");
        });
    });

    it('should have kanji with valid levels', function() {
        testUser.getKanjiList(function() {
            assert.isDefined(testUser.kanji[0].level);
            assert.isDefined(testUser.kanji[1].level);
            assert.isNotNull(testUser.kanji[0].level);
            assert.isNotNull(testUser.kanji[1].level);
            assert.isNumber(testUser.kanji[0].level);
            assert.isNumber(testUser.kanji[1].level);
        });
    });

    it('should have kanji with user_specific objects', function() {
        testUser.getKanjiList(function() {
            assert.isDefined(testUser.kanji[0].user_specific);
            assert.isDefined(testUser.kanji[1].user_specific);
            assert.isNotNull(testUser.kanji[0].user_specific);
            assert.isNotNull(testUser.kanji[1].user_specific);
        });
    });

    it('should allow retrieval specified by character', function() {
        testUser.getKanjiList(function() {
            var resultArray = testUser.kanji.getByCharacter("口");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].character, "口");
        });
    });

    it('should allow retrieval specified by meaning', function() {
        testUser.getKanjiList(function() {
            var resultArray = testUser.kanji.getByMeaning("above, up, over");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].meaning, "above, up, over");
        });
    });

    it('should allow retrieval specified by important reading', function() {
        testUser.getKanjiList(function() {
            var resultArray = testUser.kanji.getByImportantReading("onyomi");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 2);
            assert.equal(resultArray[0].important_reading, "onyomi");
        });
    });

    it('should allow retrieval specified by level', function() {
        testUser.getKanjiList(function() {
            var resultArray = testUser.kanji.getByLevel(1);
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 2);
            assert.equal(resultArray[1].level, 1);
        });
    });

    describe('user_specific objects', function() {

        it('should have a valid srs property', function() {
            testUser.getKanjiList(function() {
                assert.isDefined(testUser.kanji[0].user_specific.srs);
                assert.isDefined(testUser.kanji[1].user_specific.srs);
                assert.isNotNull(testUser.kanji[0].user_specific.srs);
                assert.isNotNull(testUser.kanji[1].user_specific.srs);
                assert.isString(testUser.kanji[0].user_specific.srs);
                assert.isString(testUser.kanji[1].user_specific.srs);
            });
        });

        it('should have a valid srs_numeric property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.srs_numeric);
            assert.isDefined(testUser.kanji[1].user_specific.srs_numeric);
            assert.isNotNull(testUser.kanji[0].user_specific.srs_numeric);
            assert.isNotNull(testUser.kanji[1].user_specific.srs_numeric);
            assert.isNumber(testUser.kanji[0].user_specific.srs_numeric);
            assert.isNumber(testUser.kanji[1].user_specific.srs_numeric);
        });

        it('should have a valid unlocked_date property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.unlocked_date);
            assert.isDefined(testUser.kanji[1].user_specific.unlocked_date);
            assert.isNotNull(testUser.kanji[0].user_specific.unlocked_date);
            assert.isNotNull(testUser.kanji[1].user_specific.unlocked_date);
            assert.isNumber(testUser.kanji[0].user_specific.unlocked_date);
            assert.isNumber(testUser.kanji[1].user_specific.unlocked_date);
        });

        it('should have a valid available_date property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.available_date);
            assert.isDefined(testUser.kanji[1].user_specific.available_date);
            assert.isNotNull(testUser.kanji[0].user_specific.available_date);
            assert.isNotNull(testUser.kanji[1].user_specific.available_date);
            assert.isNumber(testUser.kanji[0].user_specific.available_date);
            assert.isNumber(testUser.kanji[1].user_specific.available_date);
        });

        it('should have a valid burned property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.burned);
            assert.isDefined(testUser.kanji[1].user_specific.burned);
            assert.isNotNull(testUser.kanji[0].user_specific.burned);
            assert.isNotNull(testUser.kanji[1].user_specific.burned);
            assert.isBoolean(testUser.kanji[0].user_specific.burned);
            assert.isBoolean(testUser.kanji[1].user_specific.burned);
        });

        it('should have a valid burned_date property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.burned_date);
            assert.isDefined(testUser.kanji[1].user_specific.burned_date);
            assert.isNotNull(testUser.kanji[0].user_specific.burned_date);
            assert.isNotNull(testUser.kanji[1].user_specific.burned_date);
            assert.isNumber(testUser.kanji[0].user_specific.burned_date);
            assert.isNumber(testUser.kanji[1].user_specific.burned_date);
        });

        it('should have a valid meaning_correct property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.meaning_correct);
            assert.isDefined(testUser.kanji[1].user_specific.meaning_correct);
            assert.isNotNull(testUser.kanji[0].user_specific.meaning_correct);
            assert.isNotNull(testUser.kanji[1].user_specific.meaning_correct);
            assert.isNumber(testUser.kanji[0].user_specific.meaning_correct);
            assert.isNumber(testUser.kanji[1].user_specific.meaning_correct);
        });

        it('should have a valid meaning_incorrect property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.meaning_incorrect);
            assert.isDefined(testUser.kanji[1].user_specific.meaning_incorrect);
            assert.isNotNull(testUser.kanji[0].user_specific.meaning_incorrect);
            assert.isNotNull(testUser.kanji[1].user_specific.meaning_incorrect);
            assert.isNumber(testUser.kanji[0].user_specific.meaning_incorrect);
            assert.isNumber(testUser.kanji[1].user_specific.meaning_incorrect);
        });

        it('should have a valid meaning_max_streak property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.meaning_max_streak);
            assert.isDefined(testUser.kanji[1].user_specific.meaning_max_streak);
            assert.isNotNull(testUser.kanji[0].user_specific.meaning_max_streak);
            assert.isNotNull(testUser.kanji[1].user_specific.meaning_max_streak);
            assert.isNumber(testUser.kanji[0].user_specific.meaning_max_streak);
            assert.isNumber(testUser.kanji[1].user_specific.meaning_max_streak);
        });

        it('should have a valid meaning_current_streak property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.meaning_current_streak);
            assert.isDefined(testUser.kanji[1].user_specific.meaning_current_streak);
            assert.isNotNull(testUser.kanji[0].user_specific.meaning_current_streak);
            assert.isNotNull(testUser.kanji[1].user_specific.meaning_current_streak);
            assert.isNumber(testUser.kanji[0].user_specific.meaning_current_streak);
            assert.isNumber(testUser.kanji[1].user_specific.meaning_current_streak);
        });

        it('should have a valid reading_correct property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.reading_correct);
            assert.isDefined(testUser.kanji[1].user_specific.reading_correct);
        });

        it('should have a valid reading_incorrect property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.reading_incorrect);
            assert.isDefined(testUser.kanji[1].user_specific.reading_incorrect);
        });

        it('should have a valid reading_max_streak property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.reading_max_streak);
            assert.isDefined(testUser.kanji[1].user_specific.reading_max_streak);
        });

        it('should have a valid reading_current_streak property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.reading_current_streak);
            assert.isDefined(testUser.kanji[1].user_specific.reading_current_streak);
        });

        it('should have a valid meaning_note property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.meaning_note);
            assert.isDefined(testUser.kanji[1].user_specific.meaning_note);
        });

        it('should have a valid user_synonyms property', function() {
            assert.isDefined(testUser.kanji[0].user_specific.user_synonyms);
            assert.isDefined(testUser.kanji[1].user_specific.user_synonyms);
        });
    });

    describe('Kanji By Level', function() {
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/kanji/1",
            proxy: "./mocks/kanji.json"
        });

        it('should be able to take a single digit parameter', function(done) {
            testUser.getKanjiList(1, function() {
                assert.isDefined(testUser.kanji);
                assert.isNotNull(testUser.kanji);
                assert.isNotNull(testUser.kanji[0]);
                assert.isNotNull(testUser.kanji[1]);
                done();
            });
        });
    });

    describe('Kanji By levels', function() {
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/kanji/1,3",
            proxy: "./mocks/kanjiLevel.json"
        });

        it('should be able to take a comma separated string of parameters', function(done) {
            testUser.getKanjiList("1,3", function() {
                assert.isDefined(testUser.kanji);
                assert.isNotNull(testUser.kanji);
                assert.equal(testUser.kanji[3].level, 3);
                done();
            });
        });
    });
});
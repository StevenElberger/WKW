var assert = chai.assert;

describe('Vocabulary', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary",
        responseText: window.__mocks__["test/mocks/vocabulary"]
    });

    it('should have a vocabulary list', function() {
        testUser.getVocabularyList().then(function() {
            assert.isNotNull(testUser.vocabulary);
            assert.isNotNull(testUser.vocabulary[0]);
            assert.isNotNull(testUser.vocabulary[1]);
        });
    });

    it('should have vocabulary with valid characters', function() {
        testUser.getVocabularyList().then(function() {
            assert.isDefined(testUser.vocabulary[0].character);
            assert.isDefined(testUser.vocabulary[1].character);
        });
    });

    it('should have vocabulary with valid kana', function() {
        testUser.getVocabularyList().then(function() {
            assert.isDefined(testUser.vocabulary[0].kana);
            assert.isDefined(testUser.vocabulary[1].kana);
            assert.isNotNull(testUser.vocabulary[0].kana);
            assert.isNotNull(testUser.vocabulary[1].kana);
            assert.isString(testUser.vocabulary[0].kana);
            assert.isString(testUser.vocabulary[1].kana);
        });
    });

    it('should have vocabulary with meanings', function() {
        testUser.getVocabularyList().then(function() {
            assert.isDefined(testUser.vocabulary[0].meaning);
            assert.isDefined(testUser.vocabulary[1].meaning);
            assert.isNotNull(testUser.vocabulary[0].meaning);
            assert.isNotNull(testUser.vocabulary[1].meaning);
            assert.isString(testUser.vocabulary[0].meaning);
            assert.isString(testUser.vocabulary[1].meaning);
            assert.equal(testUser.vocabulary[0].meaning, "two");
            assert.equal(testUser.vocabulary[1].meaning, "ten");
        });
    });

    it('should have vocabulary with valid levels', function() {
        testUser.getVocabularyList().then(function() {
            assert.isDefined(testUser.vocabulary[0].level);
            assert.isDefined(testUser.vocabulary[1].level);
            assert.isNotNull(testUser.vocabulary[0].level);
            assert.isNotNull(testUser.vocabulary[1].level);
            assert.isNumber(testUser.vocabulary[0].level);
            assert.isNumber(testUser.vocabulary[1].level);
        });
    });

    it('should have vocabulary with user_specific objects', function() {
        testUser.getVocabularyList().then(function() {
            assert.isDefined(testUser.vocabulary[0].user_specific);
            assert.isDefined(testUser.vocabulary[1].user_specific);
            assert.isNotNull(testUser.vocabulary[0].user_specific);
            assert.isNotNull(testUser.vocabulary[1].user_specific);
        });
    });

    it('should allow retrieval specified by character', function() {
        testUser.getVocabularyList().then(function() {
            var resultArray = testUser.vocabulary.getByCharacter("二");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].character, "二");
        });
    });

    it('should allow retrieval specified by meaning', function() {
        testUser.getVocabularyList().then(function() {
            var resultArray = testUser.vocabulary.getByMeaning("ten");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].meaning, "ten");
        });
    });

    it('should allow retrieval specified by kana', function() {
        testUser.getVocabularyList().then(function() {
            var resultArray = testUser.vocabulary.getByKana("に");
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 1);
            assert.equal(resultArray[0].kana, "に");
        });
    });

    it('should allow retrieval specified by level', function(done) {
        testUser.getVocabularyList().then(function() {
            var resultArray = testUser.vocabulary.getByLevel(1);
            assert.isNotNull(resultArray);
            assert.equal(resultArray.length, 2);
            assert.equal(resultArray[1].level, 1);
            done();
        });
    });

    describe('user_specific objects', function() {

        it('should have a valid srs property', function() {
            testUser.getKanjiList().then(function() {
                assert.isDefined(testUser.vocabulary[0].user_specific.srs);
                assert.isDefined(testUser.vocabulary[1].user_specific.srs);
                assert.isNotNull(testUser.vocabulary[0].user_specific.srs);
                assert.isNotNull(testUser.vocabulary[1].user_specific.srs);
                assert.isString(testUser.vocabulary[0].user_specific.srs);
                assert.isString(testUser.vocabulary[1].user_specific.srs);
            });
        });

        it('should have a valid srs_numeric property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.srs_numeric);
            assert.isDefined(testUser.vocabulary[1].user_specific.srs_numeric);
            assert.isNotNull(testUser.vocabulary[0].user_specific.srs_numeric);
            assert.isNotNull(testUser.vocabulary[1].user_specific.srs_numeric);
            assert.isNumber(testUser.vocabulary[0].user_specific.srs_numeric);
            assert.isNumber(testUser.vocabulary[1].user_specific.srs_numeric);
        });

        it('should have a valid unlocked_date property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.unlocked_date);
            assert.isDefined(testUser.vocabulary[1].user_specific.unlocked_date);
            assert.isNotNull(testUser.vocabulary[0].user_specific.unlocked_date);
            assert.isNotNull(testUser.vocabulary[1].user_specific.unlocked_date);
            assert.isNumber(testUser.vocabulary[0].user_specific.unlocked_date);
            assert.isNumber(testUser.vocabulary[1].user_specific.unlocked_date);
        });

        it('should have a valid available_date property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.available_date);
            assert.isDefined(testUser.vocabulary[1].user_specific.available_date);
            assert.isNotNull(testUser.vocabulary[0].user_specific.available_date);
            assert.isNotNull(testUser.vocabulary[1].user_specific.available_date);
            assert.isNumber(testUser.vocabulary[0].user_specific.available_date);
            assert.isNumber(testUser.vocabulary[1].user_specific.available_date);
        });

        it('should have a valid burned property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.burned);
            assert.isDefined(testUser.vocabulary[1].user_specific.burned);
            assert.isNotNull(testUser.vocabulary[0].user_specific.burned);
            assert.isNotNull(testUser.vocabulary[1].user_specific.burned);
            assert.isBoolean(testUser.vocabulary[0].user_specific.burned);
            assert.isBoolean(testUser.vocabulary[1].user_specific.burned);
        });

        it('should have a valid burned_date property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.burned_date);
            assert.isDefined(testUser.vocabulary[1].user_specific.burned_date);
            assert.isNotNull(testUser.vocabulary[0].user_specific.burned_date);
            assert.isNotNull(testUser.vocabulary[1].user_specific.burned_date);
            assert.isNumber(testUser.vocabulary[0].user_specific.burned_date);
            assert.isNumber(testUser.vocabulary[1].user_specific.burned_date);
        });

        it('should have a valid meaning_correct property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.meaning_correct);
            assert.isDefined(testUser.vocabulary[1].user_specific.meaning_correct);
            assert.isNotNull(testUser.vocabulary[0].user_specific.meaning_correct);
            assert.isNotNull(testUser.vocabulary[1].user_specific.meaning_correct);
            assert.isNumber(testUser.vocabulary[0].user_specific.meaning_correct);
            assert.isNumber(testUser.vocabulary[1].user_specific.meaning_correct);
        });

        it('should have a valid meaning_incorrect property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.meaning_incorrect);
            assert.isDefined(testUser.vocabulary[1].user_specific.meaning_incorrect);
            assert.isNotNull(testUser.vocabulary[0].user_specific.meaning_incorrect);
            assert.isNotNull(testUser.vocabulary[1].user_specific.meaning_incorrect);
            assert.isNumber(testUser.vocabulary[0].user_specific.meaning_incorrect);
            assert.isNumber(testUser.vocabulary[1].user_specific.meaning_incorrect);
        });

        it('should have a valid meaning_max_streak property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.meaning_max_streak);
            assert.isDefined(testUser.vocabulary[1].user_specific.meaning_max_streak);
            assert.isNotNull(testUser.vocabulary[0].user_specific.meaning_max_streak);
            assert.isNotNull(testUser.vocabulary[1].user_specific.meaning_max_streak);
            assert.isNumber(testUser.vocabulary[0].user_specific.meaning_max_streak);
            assert.isNumber(testUser.vocabulary[1].user_specific.meaning_max_streak);
        });

        it('should have a valid meaning_current_streak property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.meaning_current_streak);
            assert.isDefined(testUser.vocabulary[1].user_specific.meaning_current_streak);
            assert.isNotNull(testUser.vocabulary[0].user_specific.meaning_current_streak);
            assert.isNotNull(testUser.vocabulary[1].user_specific.meaning_current_streak);
            assert.isNumber(testUser.vocabulary[0].user_specific.meaning_current_streak);
            assert.isNumber(testUser.vocabulary[1].user_specific.meaning_current_streak);
        });

        it('should have a valid reading_correct property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.reading_correct);
            assert.isDefined(testUser.vocabulary[1].user_specific.reading_correct);
        });

        it('should have a valid reading_incorrect property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.reading_incorrect);
            assert.isDefined(testUser.vocabulary[1].user_specific.reading_incorrect);
        });

        it('should have a valid reading_max_streak property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.reading_max_streak);
            assert.isDefined(testUser.vocabulary[1].user_specific.reading_max_streak);
        });

        it('should have a valid reading_current_streak property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.reading_current_streak);
            assert.isDefined(testUser.vocabulary[1].user_specific.reading_current_streak);
        });

        it('should have a valid meaning_note property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.meaning_note);
            assert.isDefined(testUser.vocabulary[1].user_specific.meaning_note);
        });

        it('should have a valid user_synonyms property', function() {
            assert.isDefined(testUser.vocabulary[0].user_specific.user_synonyms);
            assert.isDefined(testUser.vocabulary[1].user_specific.user_synonyms);
        });
    });

    describe('Vocabulary By Level', function() {
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary/1",
            responseText: window.__mocks__["test/mocks/vocabulary"]
        });

        it('should be able to take a single digit parameter', function(done) {
            testUser.getVocabularyList(1).then(function() {
                assert.isDefined(testUser.vocabulary);
                assert.isNotNull(testUser.vocabulary);
                assert.isNotNull(testUser.vocabulary[0]);
                assert.isNotNull(testUser.vocabulary[1]);
                done();
            });
        });
    });

    describe('Vocabulary By levels', function() {
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary/1,3",
            responseText: window.__mocks__["test/mocks/vocabularyLevel"]
        });

        it('should be able to take a comma separated string of parameters', function(done) {
            testUser.getVocabularyList("1,3").then(function() {
                assert.isDefined(testUser.vocabulary);
                assert.isNotNull(testUser.vocabulary);
                assert.equal(testUser.vocabulary[3].level, 3);
                done();
            });
        });
    });
});
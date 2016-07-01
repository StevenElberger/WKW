var assert = chai.assert;

describe('Vocabulary', function() {
    var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary",
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
                  "character": "二",
                  "kana": "に",
                  "meaning": "two",
                  "level": 1,
                  "user_specific": {
                    "srs": "burned",
                    "srs_numeric": 9,
                    "unlocked_date": 1389657096,
                    "available_date": 1428974100,
                    "burned": true,
                    "burned_date": 1428977926,
                    "meaning_correct": 8,
                    "meaning_incorrect": 0,
                    "meaning_max_streak": 8,
                    "meaning_current_streak": 8,
                    "reading_correct": 8,
                    "reading_incorrect": 0,
                    "reading_max_streak": 8,
                    "reading_current_streak": 8,
                    "meaning_note": null,
                    "user_synonyms": null,
                    "reading_note": null
                  }
                },
                {
                  "character": "十",
                  "kana": "じゅう",
                  "meaning": "ten",
                  "level": 1,
                  "user_specific": {
                    "srs": "burned",
                    "srs_numeric": 9,
                    "unlocked_date": 1389657099,
                    "available_date": 1415812500,
                    "burned": true,
                    "burned_date": 1415816187,
                    "meaning_correct": 8,
                    "meaning_incorrect": 0,
                    "meaning_max_streak": 8,
                    "meaning_current_streak": 8,
                    "reading_correct": 8,
                    "reading_incorrect": 0,
                    "reading_max_streak": 8,
                    "reading_current_streak": 8,
                    "meaning_note": null,
                    "user_synonyms": null,
                    "reading_note": null
                  }
                }
            ]
        }
    });

    it('should have a vocabulary list', function(done) {
        testUser.getVocabularyList(function() {
            assert.isNotNull(testUser.vocabulary);
            assert.isNotNull(testUser.vocabulary[0]);
            assert.isNotNull(testUser.vocabulary[1]);
            done();
        });
    });

    it('should have vocabulary with valid characters', function() {
        testUser.getVocabularyList(function() {
            assert.isDefined(testUser.vocabulary[0].character);
            assert.isDefined(testUser.vocabulary[1].character);
        });
    });

    it('should have vocabulary with valid kana', function() {
        testUser.getVocabularyList(function() {
            assert.isDefined(testUser.vocabulary[0].kana);
            assert.isDefined(testUser.vocabulary[1].kana);
            assert.isNotNull(testUser.vocabulary[0].kana);
            assert.isNotNull(testUser.vocabulary[1].kana);
            assert.isString(testUser.vocabulary[0].kana);
            assert.isString(testUser.vocabulary[1].kana);
        });
    });

    it('should have vocabulary with meanings', function() {
        testUser.getVocabularyList(function() {
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
        testUser.getVocabularyList(function() {
            assert.isDefined(testUser.vocabulary[0].level);
            assert.isDefined(testUser.vocabulary[1].level);
            assert.isNotNull(testUser.vocabulary[0].level);
            assert.isNotNull(testUser.vocabulary[1].level);
            assert.isNumber(testUser.vocabulary[0].level);
            assert.isNumber(testUser.vocabulary[1].level);
        });
    });

    it('should have kanji with user_specific objects', function() {
        testUser.getKanjiList(function() {
            assert.isDefined(testUser.vocabulary[0].user_specific);
            assert.isDefined(testUser.vocabulary[1].user_specific);
            assert.isNotNull(testUser.vocabulary[0].user_specific);
            assert.isNotNull(testUser.vocabulary[1].user_specific);
        });
    });

    describe('user_specific objects', function() {

        it('should have a valid srs property', function() {
            testUser.getKanjiList(function() {
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
});
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
                      "character": "口",
                      "meaning": "mouth",
                      "onyomi": "こう, く",
                      "kunyomi": "くち",
                      "nanori": null,
                      "important_reading": "onyomi",
                      "level": 1,
                      "user_specific": {
                        "srs": "burned",
                        "srs_numeric": 9,
                        "unlocked_date": 1389199901,
                        "available_date": 1428127200,
                        "burned": true,
                        "burned_date": 1428131059,
                        "meaning_correct": 14,
                        "meaning_incorrect": 0,
                        "meaning_max_streak": 14,
                        "meaning_current_streak": 14,
                        "reading_correct": 14,
                        "reading_incorrect": 3,
                        "reading_max_streak": 7,
                        "reading_current_streak": 7,
                        "meaning_note": null,
                        "user_synonyms": null,
                        "reading_note": null
                      }
                    },
                    {
                      "character": "上",
                      "meaning": "above, up, over",
                      "onyomi": "じょう",
                      "kunyomi": "うえ, あ, のぼ, うわ",
                      "nanori": null,
                      "important_reading": "onyomi",
                      "level": 1,
                      "user_specific": {
                        "srs": "burned",
                        "srs_numeric": 9,
                        "unlocked_date": 1389199891,
                        "available_date": 1443235500,
                        "burned": true,
                        "burned_date": 1443239479,
                        "meaning_correct": 25,
                        "meaning_incorrect": 0,
                        "meaning_max_streak": 25,
                        "meaning_current_streak": 25,
                        "reading_correct": 25,
                        "reading_incorrect": 8,
                        "reading_max_streak": 6,
                        "reading_current_streak": 4,
                        "meaning_note": null,
                        "user_synonyms": null,
                        "reading_note": null
                      }
                    }
                ]
            }
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
                      "character": "口",
                      "meaning": "mouth",
                      "onyomi": "こう, く",
                      "kunyomi": "くち",
                      "nanori": null,
                      "important_reading": "onyomi",
                      "level": 1,
                      "user_specific": {
                        "srs": "burned",
                        "srs_numeric": 9,
                        "unlocked_date": 1389199901,
                        "available_date": 1428127200,
                        "burned": true,
                        "burned_date": 1428131059,
                        "meaning_correct": 14,
                        "meaning_incorrect": 0,
                        "meaning_max_streak": 14,
                        "meaning_current_streak": 14,
                        "reading_correct": 14,
                        "reading_incorrect": 3,
                        "reading_max_streak": 7,
                        "reading_current_streak": 7,
                        "meaning_note": null,
                        "user_synonyms": null,
                        "reading_note": null
                      }
                    },
                    {
                      "character": "上",
                      "meaning": "above, up, over",
                      "onyomi": "じょう",
                      "kunyomi": "うえ, あ, のぼ, うわ",
                      "nanori": null,
                      "important_reading": "onyomi",
                      "level": 1,
                      "user_specific": {
                        "srs": "burned",
                        "srs_numeric": 9,
                        "unlocked_date": 1389199891,
                        "available_date": 1443235500,
                        "burned": true,
                        "burned_date": 1443239479,
                        "meaning_correct": 25,
                        "meaning_incorrect": 0,
                        "meaning_max_streak": 25,
                        "meaning_current_streak": 25,
                        "reading_correct": 25,
                        "reading_incorrect": 8,
                        "reading_max_streak": 6,
                        "reading_current_streak": 4,
                        "meaning_note": null,
                        "user_synonyms": null,
                        "reading_note": null
                      }
                    },
                    {
                        "character":"兄",
                        "meaning":"older brother, big brother, elder brother",
                        "onyomi":"きょう",
                        "kunyomi":"あに",
                        "nanori":null,
                        "important_reading":"kunyomi",
                        "level":3,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1391668493,
                            "available_date":1428822000,
                            "burned":true,
                            "burned_date":1428825960,
                            "meaning_correct":10,
                            "meaning_incorrect":1,
                            "meaning_max_streak":10,
                            "meaning_current_streak":10,
                            "reading_correct":10,
                            "reading_incorrect":3,
                            "reading_max_streak":9,
                            "reading_current_streak":9,
                            "meaning_note":null,
                            "user_synonyms":null,
                            "reading_note":null
                        }
                    },
                    {
                        "character":"内",
                        "meaning":"inside, within",
                        "onyomi":"ない",
                        "kunyomi":"うち",
                        "nanori":null,
                        "important_reading":"onyomi",
                        "level":3,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1391668493,
                            "available_date":1429723800,
                            "burned":true,
                            "burned_date":1429728148,
                            "meaning_correct":8,
                            "meaning_incorrect":0,
                            "meaning_max_streak":8,
                            "meaning_current_streak":8,
                            "reading_correct":8,
                            "reading_incorrect":0,
                            "reading_max_streak":8,
                            "reading_current_streak":8,
                            "meaning_note":null,
                            "user_synonyms":null,
                            "reading_note":null
                        }
                    }
                ]
            }
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
var assert = chai.assert;

describe('Radicals', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/radicals",
        proxy: "./mocks/radicals.json"
    });

    it('should have a radicals list', function(done) {
        testUser.getRadicalsList(function() {
            assert.isNotNull(testUser.radicals);
            assert.isNotNull(testUser.radicals[0]);
            assert.isNotNull(testUser.radicals[1]);
            done();
        });
    });

    it('should have radicals with valid characters', function() {
        testUser.getRadicalsList(function() {
            assert.isDefined(testUser.radicals[0].character);
            assert.isDefined(testUser.radicals[1].character);
        });
    });

    it('should have radicals with meanings', function() {
        testUser.getRadicalsList(function() {
            assert.isDefined(testUser.radicals[0].meaning);
            assert.isDefined(testUser.radicals[1].meaning);
            assert.isNotNull(testUser.radicals[0].meaning);
            assert.isNotNull(testUser.radicals[1].meaning);
            assert.isString(testUser.radicals[0].meaning);
            assert.isString(testUser.radicals[1].meaning);
            assert.equal(testUser.radicals[0].meaning, "stick");
            assert.equal(testUser.radicals[1].meaning, "gun");
        });
    });

    it('should have radicals with valid images', function() {
        testUser.getRadicalsList(function() {
            assert.isDefined(testUser.radicals[0].image);
            assert.isDefined(testUser.radicals[1].image);
            assert.isNotNull(testUser.radicals[0].image);
            assert.isNotNull(testUser.radicals[1].image);
            assert.isString(testUser.radicals[0].image);
            assert.isString(testUser.radicals[1].image);
            assert.equal(testUser.radicals[0].image, "https://s3.amazonaws.com/s3.wanikani.com/images/radicals/802e9542627291d4282601ded41ad16ce915f60f.png");
            assert.equal(testUser.radicals[1].image, "https://s3.amazonaws.com/s3.wanikani.com/images/radicals/80fff71b321c8cee57db7224f5fe1daa331128b5.png");
        });
    });

    it('should have radicals with valid levels', function() {
        testUser.getRadicalsList(function() {
            assert.isDefined(testUser.radicals[0].level);
            assert.isDefined(testUser.radicals[1].level);
            assert.isNotNull(testUser.radicals[0].level);
            assert.isNotNull(testUser.radicals[1].level);
            assert.isNumber(testUser.radicals[0].level);
            assert.isNumber(testUser.radicals[1].level);
        });
    });

    it('should have radicals with user_specific objects', function() {
        testUser.getRadicalsList(function() {
            assert.isDefined(testUser.radicals[0].user_specific);
            assert.isDefined(testUser.radicals[1].user_specific);
            assert.isNotNull(testUser.radicals[0].user_specific);
            assert.isNotNull(testUser.radicals[1].user_specific);
        });
    });

    describe('user_specific objects', function() {

        it('should have a valid srs property', function() {
            testUser.getRadicalsList(function() {
                assert.isDefined(testUser.radicals[0].user_specific.srs);
                assert.isDefined(testUser.radicals[1].user_specific.srs);
                assert.isNotNull(testUser.radicals[0].user_specific.srs);
                assert.isNotNull(testUser.radicals[1].user_specific.srs);
                assert.isString(testUser.radicals[0].user_specific.srs);
                assert.isString(testUser.radicals[1].user_specific.srs);
            });
        });

        it('should have a valid srs_numeric property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.srs_numeric);
            assert.isDefined(testUser.radicals[1].user_specific.srs_numeric);
            assert.isNotNull(testUser.radicals[0].user_specific.srs_numeric);
            assert.isNotNull(testUser.radicals[1].user_specific.srs_numeric);
            assert.isNumber(testUser.radicals[0].user_specific.srs_numeric);
            assert.isNumber(testUser.radicals[1].user_specific.srs_numeric);
        });

        it('should have a valid unlocked_date property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.unlocked_date);
            assert.isDefined(testUser.radicals[1].user_specific.unlocked_date);
            assert.isNotNull(testUser.radicals[0].user_specific.unlocked_date);
            assert.isNotNull(testUser.radicals[1].user_specific.unlocked_date);
            assert.isNumber(testUser.radicals[0].user_specific.unlocked_date);
            assert.isNumber(testUser.radicals[1].user_specific.unlocked_date);
        });

        it('should have a valid available_date property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.available_date);
            assert.isDefined(testUser.radicals[1].user_specific.available_date);
            assert.isNotNull(testUser.radicals[0].user_specific.available_date);
            assert.isNotNull(testUser.radicals[1].user_specific.available_date);
            assert.isNumber(testUser.radicals[0].user_specific.available_date);
            assert.isNumber(testUser.radicals[1].user_specific.available_date);
        });

        it('should have a valid burned property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.burned);
            assert.isDefined(testUser.radicals[1].user_specific.burned);
            assert.isNotNull(testUser.radicals[0].user_specific.burned);
            assert.isNotNull(testUser.radicals[1].user_specific.burned);
            assert.isBoolean(testUser.radicals[0].user_specific.burned);
            assert.isBoolean(testUser.radicals[1].user_specific.burned);
        });

        it('should have a valid burned_date property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.burned_date);
            assert.isDefined(testUser.radicals[1].user_specific.burned_date);
            assert.isNotNull(testUser.radicals[0].user_specific.burned_date);
            assert.isNotNull(testUser.radicals[1].user_specific.burned_date);
            assert.isNumber(testUser.radicals[0].user_specific.burned_date);
            assert.isNumber(testUser.radicals[1].user_specific.burned_date);
        });

        it('should have a valid meaning_correct property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.meaning_correct);
            assert.isDefined(testUser.radicals[1].user_specific.meaning_correct);
            assert.isNotNull(testUser.radicals[0].user_specific.meaning_correct);
            assert.isNotNull(testUser.radicals[1].user_specific.meaning_correct);
            assert.isNumber(testUser.radicals[0].user_specific.meaning_correct);
            assert.isNumber(testUser.radicals[1].user_specific.meaning_correct);
        });

        it('should have a valid meaning_incorrect property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.meaning_incorrect);
            assert.isDefined(testUser.radicals[1].user_specific.meaning_incorrect);
            assert.isNotNull(testUser.radicals[0].user_specific.meaning_incorrect);
            assert.isNotNull(testUser.radicals[1].user_specific.meaning_incorrect);
            assert.isNumber(testUser.radicals[0].user_specific.meaning_incorrect);
            assert.isNumber(testUser.radicals[1].user_specific.meaning_incorrect);
        });

        it('should have a valid meaning_max_streak property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.meaning_max_streak);
            assert.isDefined(testUser.radicals[1].user_specific.meaning_max_streak);
            assert.isNotNull(testUser.radicals[0].user_specific.meaning_max_streak);
            assert.isNotNull(testUser.radicals[1].user_specific.meaning_max_streak);
            assert.isNumber(testUser.radicals[0].user_specific.meaning_max_streak);
            assert.isNumber(testUser.radicals[1].user_specific.meaning_max_streak);
        });

        it('should have a valid meaning_current_streak property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.meaning_current_streak);
            assert.isDefined(testUser.radicals[1].user_specific.meaning_current_streak);
            assert.isNotNull(testUser.radicals[0].user_specific.meaning_current_streak);
            assert.isNotNull(testUser.radicals[1].user_specific.meaning_current_streak);
            assert.isNumber(testUser.radicals[0].user_specific.meaning_current_streak);
            assert.isNumber(testUser.radicals[1].user_specific.meaning_current_streak);
        });

        it('should have a valid reading_correct property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.reading_correct);
            assert.isDefined(testUser.radicals[1].user_specific.reading_correct);
        });

        it('should have a valid reading_incorrect property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.reading_incorrect);
            assert.isDefined(testUser.radicals[1].user_specific.reading_incorrect);
        });

        it('should have a valid reading_max_streak property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.reading_max_streak);
            assert.isDefined(testUser.radicals[1].user_specific.reading_max_streak);
        });

        it('should have a valid reading_current_streak property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.reading_current_streak);
            assert.isDefined(testUser.radicals[1].user_specific.reading_current_streak);
        });

        it('should have a valid meaning_note property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.meaning_note);
            assert.isDefined(testUser.radicals[1].user_specific.meaning_note);
        });

        it('should have a valid user_synonyms property', function() {
            assert.isDefined(testUser.radicals[0].user_specific.user_synonyms);
            assert.isDefined(testUser.radicals[1].user_specific.user_synonyms);
        });
    });

    describe('Radicals By Level', function() {
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/radicals/1",
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
                        "character":null,
                        "meaning":"stick",
                        "image":"https://s3.amazonaws.com/s3.wanikani.com/images/radicals/802e9542627291d4282601ded41ad16ce915f60f.png",
                        "level":1,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1388623423,
                            "available_date":1415811600,
                            "burned":true,
                            "burned_date":1415816017,
                            "meaning_correct":8,
                            "meaning_incorrect":0,
                            "meaning_max_streak":8,
                            "meaning_current_streak":8,
                            "reading_correct":null,
                            "reading_incorrect":null,
                            "reading_max_streak":null,
                            "reading_current_streak":null,
                            "meaning_note":null,
                            "user_synonyms":null
                        }
                    },
                    {
                        "character":null,
                        "meaning":"gun",
                        "image":"https://s3.amazonaws.com/s3.wanikani.com/images/radicals/80fff71b321c8cee57db7224f5fe1daa331128b5.png",
                        "level":1,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1388623423,
                            "available_date":1416249900,
                            "burned":true,
                            "burned_date":1416254179,
                            "meaning_correct":8,
                            "meaning_incorrect":0,
                            "meaning_max_streak":8,
                            "meaning_current_streak":8,
                            "reading_correct":null,
                            "reading_incorrect":null,
                            "reading_max_streak":null,
                            "reading_current_streak":null,
                            "meaning_note":null,
                            "user_synonyms":null
                        }
                    }
                ]
            }
        });

        it('should be able to take a single digit parameter', function(done) {
            testUser.getRadicalsList(1, function() {
                assert.isDefined(testUser.radicals);
                assert.isNotNull(testUser.radicals);
                assert.isNotNull(testUser.radicals[0]);
                assert.isNotNull(testUser.radicals[1]);
                done();
            });
        });
    });

    describe('Radicals By levels', function() {
        var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
        // mock the service
        $.mockjax({
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/radicals/1,3",
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
                        "character":null,
                        "meaning":"stick",
                        "image":"https://s3.amazonaws.com/s3.wanikani.com/images/radicals/802e9542627291d4282601ded41ad16ce915f60f.png",
                        "level":1,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1388623423,
                            "available_date":1415811600,
                            "burned":true,
                            "burned_date":1415816017,
                            "meaning_correct":8,
                            "meaning_incorrect":0,
                            "meaning_max_streak":8,
                            "meaning_current_streak":8,
                            "reading_correct":null,
                            "reading_incorrect":null,
                            "reading_max_streak":null,
                            "reading_current_streak":null,
                            "meaning_note":null,
                            "user_synonyms":null
                        }
                    },
                    {
                        "character":null,
                        "meaning":"gun",
                        "image":"https://s3.amazonaws.com/s3.wanikani.com/images/radicals/80fff71b321c8cee57db7224f5fe1daa331128b5.png",
                        "level":1,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1388623423,
                            "available_date":1416249900,
                            "burned":true,
                            "burned_date":1416254179,
                            "meaning_correct":8,
                            "meaning_incorrect":0,
                            "meaning_max_streak":8,
                            "meaning_current_streak":8,
                            "reading_correct":null,
                            "reading_incorrect":null,
                            "reading_max_streak":null,
                            "reading_current_streak":null,
                            "meaning_note":null,
                            "user_synonyms":null
                        }
                    },
                    {
                        "character":"父",
                        "meaning":"father",
                        "image":null,
                        "level":3,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1391668493,
                            "available_date":1426808700,
                            "burned":true,
                            "burned_date":1426812535,
                            "meaning_correct":8,
                            "meaning_incorrect":0,
                            "meaning_max_streak":8,
                            "meaning_current_streak":8,
                            "reading_correct":null,
                            "reading_incorrect":null,
                            "reading_max_streak":null,
                            "reading_current_streak":null,
                            "meaning_note":null,
                            "user_synonyms":null
                        }
                    },
                    {
                        "character":"用",
                        "meaning":"elephant",
                        "image":null,
                        "level":3,
                        "user_specific":{
                            "srs":"burned",
                            "srs_numeric":9,
                            "unlocked_date":1391668493,
                            "available_date":1427766300,
                            "burned":true,
                            "burned_date":1427769954,
                            "meaning_correct":10,
                            "meaning_incorrect":2,
                            "meaning_max_streak":9,
                            "meaning_current_streak":9,
                            "reading_correct":null,
                            "reading_incorrect":null,
                            "reading_max_streak":null,
                            "reading_current_streak":null,
                            "meaning_note":null,
                            "user_synonyms":null
                        }
                    }
                ]
            }
        });

        it('should be able to take a comma separated string of parameters', function(done) {
            testUser.getRadicalsList("1,3", function() {
                assert.isDefined(testUser.radicals);
                assert.isNotNull(testUser.radicals);
                assert.equal(testUser.radicals[3].level, 3);
                done();
            });
        });
    });
});
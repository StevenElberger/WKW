var assert = chai.assert;

describe('StudyQueue', function() {
    var testUser = new User('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/srs-distribution",
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
                "apprentice": {
                  "radicals": 6,
                  "kanji": 24,
                  "vocabulary": 108,
                  "total": 138
                },
                "guru": {
                  "radicals": 15,
                  "kanji": 98,
                  "vocabulary": 416,
                  "total": 529
                },
                "master": {
                  "radicals": 25,
                  "kanji": 116,
                  "vocabulary": 464,
                  "total": 605
                },
                "enlighten": {
                  "radicals": 63,
                  "kanji": 277,
                  "vocabulary": 907,
                  "total": 1247
                },
                "burned": {
                  "radicals": 271,
                  "kanji": 486,
                  "vocabulary": 1333,
                  "total": 2090
                }
            }
        }
    });

    it('should have an object for each level', function(done) {
        testUser.getSRSDistribution(function() {
            assert.isNotNull(testUser.srs_distribution);
            assert.isNotNull(testUser.srs_distribution.apprentice);
            assert.isNotNull(testUser.srs_distribution.guru);
            assert.isNotNull(testUser.srs_distribution.master);
            assert.isNotNull(testUser.srs_distribution.enlighten);
            assert.isNotNull(testUser.srs_distribution.burned);
            done();
        });
    });

    it('should have a valid number of items for apprentice level', function() {
        testUser.getStudyQueue(function() {
            assert.isNumber(testUser.srs_distribution.apprentice.radicals);
            assert.isAtLeast(testUser.srs_distribution.apprentice.radicals,0);
            assert.isNumber(testUser.srs_distribution.apprentice.kanji);
            assert.isAtLeast(testUser.srs_distribution.apprentice.kanji,0);
            assert.isNumber(testUser.srs_distribution.apprentice.vocabulary);
            assert.isAtLeast(testUser.srs_distribution.apprentice.vocabulary,0);
            assert.isNumber(testUser.srs_distribution.apprentice.total);
            assert.isAtLeast(testUser.srs_distribution.apprentice.total,0);
        });
    });

    it('should have a valid number of items for guru level', function() {
        testUser.getStudyQueue(function() {
            assert.isNumber(testUser.srs_distribution.guru.radicals);
            assert.isAtLeast(testUser.srs_distribution.guru.radicals,0);
            assert.isNumber(testUser.srs_distribution.guru.kanji);
            assert.isAtLeast(testUser.srs_distribution.guru.kanji,0);
            assert.isNumber(testUser.srs_distribution.guru.vocabulary);
            assert.isAtLeast(testUser.srs_distribution.guru.vocabulary,0);
            assert.isNumber(testUser.srs_distribution.guru.total);
            assert.isAtLeast(testUser.srs_distribution.guru.total,0);
        });
    });

    it('should have a valid number of items for master level', function() {
        testUser.getStudyQueue(function() {
            assert.isNumber(testUser.srs_distribution.master.radicals);
            assert.isAtLeast(testUser.srs_distribution.master.radicals,0);
            assert.isNumber(testUser.srs_distribution.master.kanji);
            assert.isAtLeast(testUser.srs_distribution.master.kanji,0);
            assert.isNumber(testUser.srs_distribution.master.vocabulary);
            assert.isAtLeast(testUser.srs_distribution.master.vocabulary,0);
            assert.isNumber(testUser.srs_distribution.master.total);
            assert.isAtLeast(testUser.srs_distribution.master.total,0);
        });
    });

    it('should have a valid number of items for enlighten level', function() {
        testUser.getStudyQueue(function() {
            assert.isNumber(testUser.srs_distribution.enlighten.radicals);
            assert.isAtLeast(testUser.srs_distribution.enlighten.radicals,0);
            assert.isNumber(testUser.srs_distribution.enlighten.kanji);
            assert.isAtLeast(testUser.srs_distribution.enlighten.kanji,0);
            assert.isNumber(testUser.srs_distribution.enlighten.vocabulary);
            assert.isAtLeast(testUser.srs_distribution.enlighten.vocabulary,0);
            assert.isNumber(testUser.srs_distribution.enlighten.total);
            assert.isAtLeast(testUser.srs_distribution.enlighten.total,0);
        });
    });

    it('should have a valid number of items for burned level', function() {
        testUser.getStudyQueue(function() {
            assert.isNumber(testUser.srs_distribution.burned.radicals);
            assert.isAtLeast(testUser.srs_distribution.burned.radicals,0);
            assert.isNumber(testUser.srs_distribution.burned.kanji);
            assert.isAtLeast(testUser.srs_distribution.burned.kanji,0);
            assert.isNumber(testUser.srs_distribution.burned.vocabulary);
            assert.isAtLeast(testUser.srs_distribution.burned.vocabulary,0);
            assert.isNumber(testUser.srs_distribution.burned.total);
            assert.isAtLeast(testUser.srs_distribution.burned.total,0);
        });
    });
});
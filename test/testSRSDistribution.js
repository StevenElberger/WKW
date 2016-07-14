var assert = chai.assert;

describe('SRSDistribution', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/srs-distribution",
        proxy: "./mocks/srsDistribution.json"
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
        testUser.getSRSDistribution(function() {
            assert.isNotNull(testUser.srs_distribution.apprentice.radicals);
            assert.isNotNull(testUser.srs_distribution.apprentice.kanji);
            assert.isNotNull(testUser.srs_distribution.apprentice.vocabulary);
            assert.isNotNull(testUser.srs_distribution.apprentice.total);
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
        testUser.getSRSDistribution(function() {
            assert.isNotNull(testUser.srs_distribution.guru.radicals);
            assert.isNotNull(testUser.srs_distribution.guru.kanji);
            assert.isNotNull(testUser.srs_distribution.guru.vocabulary);
            assert.isNotNull(testUser.srs_distribution.guru.total);
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
        testUser.getSRSDistribution(function() {
            assert.isNotNull(testUser.srs_distribution.master.radicals);
            assert.isNotNull(testUser.srs_distribution.master.kanji);
            assert.isNotNull(testUser.srs_distribution.master.vocabulary);
            assert.isNotNull(testUser.srs_distribution.master.total);
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
        testUser.getSRSDistribution(function() {
            assert.isNotNull(testUser.srs_distribution.enlighten.radicals);
            assert.isNotNull(testUser.srs_distribution.enlighten.kanji);
            assert.isNotNull(testUser.srs_distribution.enlighten.vocabulary);
            assert.isNotNull(testUser.srs_distribution.enlighten.total);
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
        testUser.getSRSDistribution(function() {
            assert.isNotNull(testUser.srs_distribution.burned.radicals);
            assert.isNotNull(testUser.srs_distribution.burned.kanji);
            assert.isNotNull(testUser.srs_distribution.burned.vocabulary);
            assert.isNotNull(testUser.srs_distribution.burned.total);
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

    it('should provide sums of each type of object', function() {
        testUser.getSRSDistribution(function() {
            assert.equal(testUser.srs_distribution.totalRadicals(), 380);
            assert.equal(testUser.srs_distribution.totalKanji(), 1001);
            assert.equal(testUser.srs_distribution.totalVocabulary(), 3228);
            assert.equal(testUser.srs_distribution.totalItems(), 4609);
        });
    });
});
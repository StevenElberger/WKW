var assert = chai.assert;

describe('The getAll function', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax([
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/",
            proxy: "./mocks/userInformation.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/study-queue",
            proxy: "./mocks/studyQueue.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/level-progression",
            proxy: "./mocks/levelProgression.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/srs-distribution",
            proxy: "./mocks/srsDistribution.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/recent-unlocks",
            proxy: "./mocks/recentUnlocks.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/critical-items",
            proxy: "./mocks/criticalItems.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/radicals",
            proxy: "./mocks/radicals.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/kanji",
            proxy: "./mocks/kanji.json"
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary",
            proxy: "./mocks/vocabulary.json"
        }
    ]);
    
    it('should populate all data structures', function(done) {
        this.timeout(10000);
        testUser.getAllData(function(success, errors) {
            assert.isTrue(success);
            assert.isNotNull(testUser.user_information.username);
            assert.isNotNull(testUser.study_queue.lessons_available);
            assert.isNotNull(testUser.level_progression.radicals_progress);
            assert.isNotNull(testUser.srs_distribution.apprentice);
            assert.isNotNull(testUser.recent_unlocks[0]);
            assert.isNotNull(testUser.critical_items[0]);
            assert.isNotNull(testUser.radicals[0]);
            assert.isNotNull(testUser.kanji[0]);
            assert.isNotNull(testUser.vocabulary[0]);
            done();
        });
    });
});
var assert = chai.assert;

describe('The getAll function', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax([
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/",
            responseText: window.__mocks__["test/mocks/userInformation"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/study-queue",
            responseText: window.__mocks__["test/mocks/studyQueue"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/level-progression",
            responseText: window.__mocks__["test/mocks/levelProgression"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/srs-distribution",
            responseText: window.__mocks__["test/mocks/srsDistribution"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/recent-unlocks",
            responseText: window.__mocks__["test/mocks/recentUnlocks"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/critical-items",
            responseText: window.__mocks__["test/mocks/criticalItems"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/radicals",
            responseText: window.__mocks__["test/mocks/radicals"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/kanji",
            responseText: window.__mocks__["test/mocks/kanji"]
        },
        {
            url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/vocabulary",
            responseText: window.__mocks__["test/mocks/vocabulary"]
        }
    ]);
    
    it('should populate all data structures', function(done) {
        this.timeout(10000);
        testUser.getAllData().then(function() {
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
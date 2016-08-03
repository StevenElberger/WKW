var assert = chai.assert;

describe('StudyQueue', function() {
    var testUser = WKW.getUser('bbf426d6937cbb77d9f908c08d90c3ce');
    // mock the service
    $.mockjax({
        url: "https://www.wanikani.com/api/user/bbf426d6937cbb77d9f908c08d90c3ce/study-queue",
        responseText: window.__mocks__["test/mocks/studyQueue"]
    });

    it('should have a valid number of lessons_available', function(done) {
        testUser.getStudyQueue().then(function() {
            assert.isNotNull(testUser.study_queue.lessons_available);
            assert.isNumber(testUser.study_queue.lessons_available);
            assert.isAtLeast(testUser.study_queue.lessons_available,0);
            done();
        });
    });

    it('should have a valid number of reviews available', function() {
        testUser.getStudyQueue().then(function() {
            assert.isNotNull(testUser.study_queue.reviews_available);
            assert.isNumber(testUser.study_queue.reviews_available);
            assert.isAtLeast(testUser.study_queue.reviews_available, 0);
        });
    });

    it('should have a valid next review date', function() {
        testUser.getStudyQueue().then(function() {
            assert.isDefined(testUser.study_queue.next_review_date);
        });
    });

    it('should have a valid number of reviews available for next hour', function() {
        testUser.getStudyQueue().then(function() {
            assert.isNotNull(testUser.study_queue.reviews_available_next_hour);
            assert.isNumber(testUser.study_queue.reviews_available_next_hour);
            assert.isAtLeast(testUser.study_queue.reviews_available_next_hour, 0);
        });
    });

    it('should have a valid number of reviews available for next day', function() {
        testUser.getStudyQueue().then(function() {
            assert.isNotNull(testUser.study_queue.reviews_available_next_day);
            assert.isNumber(testUser.study_queue.reviews_available_next_day);
            assert.isAtLeast(testUser.study_queue.reviews_available_next_day, 0);
        });
    });
});
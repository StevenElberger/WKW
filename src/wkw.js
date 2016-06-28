// WKW - Client Side JS Wrapper for WaniKani API


// User Information Prototype (user.user_information)
// @time - time limit before data is expired
// @expiration (Number) - unix timestamp for last refresh
// @username (String) - username
// @gravatar (String) - md5 gravatar
// @level (Number) - user's level
// @title (String) - user's title
// @about (String) - user's about me
// @website (String) - link to user's website
// @twitter (String) - user's twitter handle
// @topics_count (Number) - number of topics on message board
// @posts_count (Number) - number of posts made by user
// @creation_date (Number) - unix timestamp for account creation
// @vacation_date (Number or null) - unix timestamp for vacation setting
var UserInformation = {
    "time": 21600000,
    "expiration": new Date(),
    isExpired() { return new Date() - this.expiration > this.time; }
};

// Study Queue Prototype (user.study_queue)
// @time - time limit before data is expired
// @expiration (Number) - unix timestamp for last refresh
// @lessons_available (Number) - number of lessons currently available
// @reviews_available (Number) - number of reviews currently available
// @next_review_date (Number or null) - unix timestamp for next review (or null if vacation mode)
// @reviews_available_next_hour (Number) - number of reviews available within the next hour
// @reviews_available_next_day (Number) - number of reviews available within the next day
var StudyQueue = {
    "time": 900000,
    "expiration": new Date(),
    isExpired() { return new Date() - this.expiration > this.time; }
};

// Level Progression Prototype (user.level_progression)
// @time - time limit before data is expired
// @expiration (Number) - unix timestamp for last refresh
// @radicals_progress (Number) - number of radicals completed for the current level
// @radicals_total (Number) - total number of radicals for this level
// @kanji_progress (Number) - number of kanji completed for the current level
// @kanji_total (Number) - total number of kanji for this level
var LevelProgression = {
    "time": 900000,
    "expiration": new Date(),
    isExpired() { return new Date() - this.expiration > this.time; }
};

// Retrieves the user's information.
// @param callback (fn) - callback function
var getUserInformation = function(callback) {
    if (!this.user_information.isExpired() && this.user_information.username != null) { callback(); }
    var that = this;
    var wk_url = "https://www.wanikani.com/api/user/" + this.key;
    $.getJSON(wk_url, function(data) {
        for (var d in data.user_information)
            that.user_information[d] = data.user_information[d];
        callback();
    });
};

// Retrieves the user's study queue.
// @param callback (fn) - callback function
var getStudyQueue = function(callback) {
    if (!this.study_queue.isExpired() && this.study_queue.lessons_available != null) { callback(); }
    var that = this;
    var wk_url = "https://www.wanikani.com/api/user/" + this.key + "/study-queue";
    $.getJSON(wk_url, function(data) {
        for (var d in data.requested_information)
            that.study_queue[d] = data.requested_information[d];
        callback();
    });
};

// Retrieves the user's level progression.
// @param callback (fn) - callback function.
var getLevelProgression = function(callback) {
    if (!this.level_progression.isExpired() && this.level_progression.radicals_progress != null) { callback(); }
    var that = this;
    var wk_url = "https://www.wanikani.com/api/user/" + this.key + "/level-progression";
    $.getJSON(wk_url, function(data) {
        for (var d in data.level_progression)
            that.level_progression[d] = data.level_progression[d];
        callback();
    });
};

// Constructor for user objects.
// @key (Number) - user's WK API key
// @getUserInformation(callback) - retrieves the user's information
// @getStudyQueue(callback) - retrieves the user's study queue
function User(api_key) {
    var resultUser = {
        key: api_key,
    };
    resultUser.user_information = new Object(UserInformation);
    resultUser.study_queue = new Object(StudyQueue);
    resultUser.getUserInformation = getUserInformation;
    resultUser.getStudyQueue = getStudyQueue;
    return resultUser;
}
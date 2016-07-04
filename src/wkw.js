// WKW - Client Side JS Wrapper for WaniKani API


// Prototype object for all other object prototypes.
// Contains basic state and functionality (e.g., expiration and emptiness)
// @time (Number) - the expiration time for this data type
// @isEmpty (Boolean) - whether or not this object is "empty"
// @apiResourceLoc (String) - the location of this data type from the API's URL
// @userResourceLoc (String) - the name of this data type's key in the user object
// @expiration (Number) - unix timestamp for account creation
// @isExpired (fn) - returns whether or not this data has expired
function Proto(expirationTime, apiResourceLoc, userResourceLoc) {
    this.time = expirationTime;
    this.isEmpty = true;
    this.apiResourceLoc = apiResourceLoc;
    this.userResourceLoc = userResourceLoc;
    this.expiration = new Date();
    this.isExpired = function() { return new Date() - this.expiration > this.time; };
};

// User Information Prototype (user.user_information)
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


// Study Queue Prototype (user.study_queue)
// @lessons_available (Number) - number of lessons currently available
// @reviews_available (Number) - number of reviews currently available
// @next_review_date (Number or null) - unix timestamp for next review (or null if vacation mode)
// @reviews_available_next_hour (Number) - number of reviews available within the next hour
// @reviews_available_next_day (Number) - number of reviews available within the next day


// Level Progression Prototype (user.level_progression)
// @radicals_progress (Number) - number of radicals completed for the current level
// @radicals_total (Number) - total number of radicals for this level
// @kanji_progress (Number) - number of kanji completed for the current level
// @kanji_total (Number) - total number of kanji for this level


// SRS Distribution Prototype (user.srs_distribution)
// @apprentice (Object) - items at apprentice level
// --@radicals (Number) - the number of radicals
// --@kanji (Number) - the number of kanji
// --@vocabulary (Number) - the number of vocabulary
// --@total (Number) - the total number of items
// @guru (Object) - items at guru level (same structure as apprentice)
// @master (Object) - items at master level (same structure as apprentice)
// @enlighten (Object) - items at enlighten level (same structure as apprentice)
// @burned (Object) - items at burned level (same structure as apprentice)


// Recent Unlocks List Prototype (user.recent_unlocks)
// 3 different types of objects in here
// --Common attributes--
// @type (String) - type of item in list
// @character (String) - the character(s) for this item
// @meaning (String) - comma separated string of meanings
// @level (Number) - the level at which this item was unlocked
// @unlocked_date (Number) - unix timestamp for when this item was unlocked
// --Vocabulary--
// @kana (String) - the katakana or hiragana representation for this word
// --Radical--
// @image (String or null) - the URL of the image, if any (otherwise null)
// --Kanji--
// @onyomi (String) - the on'yomi reading for this kanji
// @kunyomi (String) - the kun'yomi reading for this kanji
// @nanori (String or null) - the nanori reading for this kanji
// @important_reading (String) - which reading is important (onyomi, kunyomi, or nanori)


// Critical Items List Prototype (user.critical_items)
// 3 different types of objects in here
// --Common attributes--
// @type (String) - type of item in list
// @character (String) - the character(s) for this item
// @meaning (String) - comma separated string of meanings
// @level (Number) - the level at which this item was unlocked
// @percentage (Number) - what percentage this item has been reviewed correctly
// --Vocabulary--
// @kana (String) - the katakana or hiragana for this item
// --Radical--
// @image (String) - the url for this item
// --Kanji--
// @onyomi (String) - the on'yomi reading for this kanji
// @kunyomi (String) - the kun'yomi reading for this kanji
// @nanori (String or null) - the nanori reading for this kanji
// @important_reading (String) - which reading is important (onyomi, kunyomi, or nanori)


// Radicals List Prototype (user.radicals)
// @character (String or null) - the character for this radical
// @meaning (String) - the meaning of this radical
// @image (String) - url for the image of this radical
// @level (Number) - the level at which this radical was unlocked
// @user_specific (Object) - user specific information
// -- @srs (String) - the group this item is in (apprentice, guru, etc.)
// -- @srs_numeric (Number) - tbd
// -- @unlocked_date (Number) - unix timestamp for when this item was unlocked
// -- @available_date (Number) - unix timestamp for when this item will be reviewed again
// -- @burned (Boolean) - whether or not this item is burned
// -- @burned_date (Number) - unix timestamp for when this item was burned (0 if not)
// -- @meaning_correct (Number) - number of times meaning was answered correctly
// -- @meaning_incorrect (Number) - number of times meaning was answered incorrectly
// -- @meaning_max_streak (Number) - highest number of times meaning was answered correctly consecutively
// -- @meaning_current_streak (Number) - current streak of consecutively correct answers
// -- @reading_correct (Number or null) - number of times reading was answered correctly
// -- @reading_incorrect (Number or null) - number of times reading was answered incorrectly
// -- @reading_max_streak (Number or null) - highest number of times meaning was answered correctly consecutively
// -- @reading_current_streak (Number or null) - current number of times meaning was answered correctly consecutively
// -- @meaning_note (String or null) - user-created notes for meaning
// -- @user_synonyms (Array or null) - user-created synonyms for this item

// Kanji List Prototype (user.kanji)
// @character (String) - character for this kanji
// @meaning (String) - meaning(s) of this kanji
// @onyomi (String) - on'yomi reading for this kanji
// @kunyomi (String) - kun'yomi reading for this kanji
// @nanori (String) - nanori reading for this kanji
// @important_reading (String) - which reading is important (onyomi, kunyomi, or nanori)
// @level (Number) - level at which this kanji was unlocked
// @user_specific (Object) - user specific information (see user.radicals.user_specific)


// Vocabulary List Prototype (user.vocabulary)
// @character (String) - character for this word
// @kana (String) - hiragana or katakana for this word
// @meaning (String) - meaning(s) of this word
// @level (Number) - level at which this item was unlocked
// @user_specific (Object) - user specific information (see user.radicals.user_specific)


// Retrieves data for given object.
// @user (object) - the user object
// @obj (object) - the object whose data needs to be retrieved
// @callback (fn) - the callback function
// @param (Number) - optional parameter
function retrieveObjectData(user, obj, callback, param) {
    if (!isExpiredOrEmpty(obj) && typeof param === "undefined") { callback(); }
    var wk_url = "https://www.wanikani.com/api/user/" + user.key + "/" + obj.apiResourceLoc;
    if (typeof param !== "undefined") { wk_url += "/" + param; }
    $.getJSON(wk_url, function(data) {
        if (data.error) { callback(data); }
        if (obj.userResourceLoc === "user_information") {
            for (var d in data.user_information)
                user["user_information"][d] = data.user_information[d];
        } else {
            for (var d in data.requested_information)
                user[obj.userResourceLoc][d] = data.requested_information[d];
        }
        obj.isEmpty = false;
        obj.expiration = new Date();
        callback();
    });
};

// Checks if an object is expired or empty.
// @obj (Object) - object to check
function isExpiredOrEmpty(obj) {
    return obj.isExpired() || obj.isEmpty;
};

// Checks if given levels are valid for
// radicals, vocabulary, or kanji lists.
// @levels (String or Number) - levels requested
function levelsAreValid(levels) {
    if (typeof levels === "number" && levels >= 1 && levels <= 60) {
        return true;
    } else if (typeof levels === "string") {
        var givenLevels = levels.split(",");
        var validLevels = true;
        for (var lvl in givenLevels) {
            if (givenLevels[lvl] < 1 || givenLevels[lvl] > 60) {
                validLevels = false;
                break;
            }
        }
        return validLevels;
    }
    return false;
}

// Retrieves the user's information.
// @callback (fn) - callback function
var getUserInformation = function(callback) { retrieveObjectData(this, this.user_information, callback); };

// Retrieves the user's study queue.
// @callback (fn) - callback function
var getStudyQueue = function(callback) { retrieveObjectData(this, this.study_queue, callback); };

// Retrieves the user's level progression.
// @callback (fn) - callback function.
var getLevelProgression = function(callback) { retrieveObjectData(this, this.level_progression, callback); };

// Retrieves the user's SRS distribution.
// @callback (fn) - callback function.
var getSRSDistribution = function(callback) { retrieveObjectData(this, this.srs_distribution, callback); };

// Retrieves the user's recent unlocks list.
// @callback (fn) - callback function.
// @limit (Number) - limit for number of items returned
var getRecentUnlocksList = function(limit, callback) {
    if (typeof limit === "function") // no limit, this is the callback
        retrieveObjectData(this, this.recent_unlocks, limit);
    else
        if (typeof limit === "number" && limit >= 1 && limit <= 100)
            retrieveObjectData(this, this.recent_unlocks, callback, limit);
        else
            retrieveObjectData(this, this.recent_unlocks, callback);
};

// Retrieves the user's critical items list.
// @callback (fn) - callback function.
// @percentage (Number) - percentage correct
var getCriticalItemsList = function(percentage, callback) {
    if (typeof percentage === "function") // no percentage, this is the callback
        retrieveObjectData(this, this.critical_items, percentage);
    else
        if (typeof percentage === "number" && percentage >= 0 && percentage <= 100)
            retrieveObjectData(this, this.critical_items, callback, percentage);
        else
            retrieveObjectData(this, this.critical_items, callback);
};

// Retrieves the user's radicals list.
// @callback (fn) - callback function.
// @levels (String or Number) - radicals of given level(s)
var getRadicalsList = function(levels, callback) {
    if (typeof levels === "function") // no levels, this is the callback
        retrieveObjectData(this, this.radicals, levels);
    else
        if (levelsAreValid(levels))
            retrieveObjectData(this, this.radicals, callback, levels);
        else
            retrieveObjectData(this, this.radicals, callback);
};

// Retrieves the user's kanji list.
// @callback (fn) - callback function.
// @levels (String or Number) - kanji of given level(s)
var getKanjiList = function(levels, callback) {
    if (typeof levels === "function") // no levels, this is the callback
        retrieveObjectData(this, this.kanji, levels);
    else
        if (levelsAreValid(levels))
            retrieveObjectData(this, this.kanji, callback, levels);
        else
            retrieveObjectData(this, this.kanji, callback);
};

// Retrieves the user's voabulary list.
// @callback (fn) - callback function.
// @levels (String or Number) - vocabulary of given level(s)
var getVocabularyList = function(levels, callback) {
    if (typeof levels === "function") // no levels, this is the callback
        retrieveObjectData(this, this.vocabulary, levels);
    else
        if (levelsAreValid(levels))
            retrieveObjectData(this, this.vocabulary, callback, levels);
        else
            retrieveObjectData(this, this.vocabulary, callback);
};


// Constructor for user objects.
// @key (Number) - user's WK API key<F12>
// @getUserInformation(callback) - retrieves the user's information
// @getStudyQueue(callback) - retrieves the user's study queue
function User(api_key) {
    var resultUser = {
        key: api_key,
    };
    resultUser.user_information = new Proto(21600000, "", "user_information");
    resultUser.study_queue = new Proto(900000, "study-queue", "study_queue");
    resultUser.level_progression = new Proto(900000, "level-progression", "level_progression");
    resultUser.srs_distribution = new Proto(900000, "srs-distribution", "srs_distribution");
    resultUser.recent_unlocks = new Proto(900000, "recent-unlocks", "recent_unlocks");
    resultUser.critical_items = new Proto(900000, "critical-items", "critical_items");
    resultUser.radicals = new Proto(900000, "radicals", "radicals");
    resultUser.kanji = new Proto(900000, "kanji", "kanji");
    resultUser.vocabulary = new Proto(900000, "vocabulary", "vocabulary");
    resultUser.getUserInformation = getUserInformation;
    resultUser.getStudyQueue = getStudyQueue;
    resultUser.getLevelProgression = getLevelProgression;
    resultUser.getSRSDistribution = getSRSDistribution;
    resultUser.getRecentUnlocksList = getRecentUnlocksList;
    resultUser.getCriticalItemsList = getCriticalItemsList;
    resultUser.getRadicalsList = getRadicalsList;
    resultUser.getKanjiList = getKanjiList;
    resultUser.getVocabularyList = getVocabularyList;
    return resultUser;
};

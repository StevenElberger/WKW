// WKW - Client Side JS Wrapper for WaniKani API
var WKW = (function(global) {
    var debug_mode = false;
    if (global.wkw_debug) { debug_mode = true; }
    // Prototype for user's data objects.
    // Contains basic state and functionality (e.g., expiration and emptiness)
    // @time (Number) - the expiration time for this data type
    // @isEmpty (Boolean) - whether or not this object is "empty"
    // @apiResourceLoc (String) - the location of this data type from the API's URL
    // @userResourceLoc (String) - the name of this data type's key in the user object
    // @expiration (Number) - unix timestamp for account creation
    // @isExpired (fn) - returns whether or not this data has expired
    var proto = {
        time: 900000,
        isEmpty: true,
        apiResourceLoc: "",
        userResourceLoc: "",
        expiration: new Date(),
        isExpired: function() { return new Date() - this.expiration > this.time; }
    };

    // factory function for proto-based objects
    // @overrides (object) - properties to overwrite in this object's prototype
    var makeProto = function(overrides) {
        var key, result, spec = {};
        for (key in overrides) {
            spec[key] = { value: overrides[key] };
        }
        result = Object.create(proto, spec);
        return result;
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
    var userInformationProto = makeProto({ apiResourceLoc: "", userResourceLoc: "user_information" });
    userInformationProto.getAvatar = function() {
        return "https://gravatar.com/avatar/" + this.gravatar;
    };

    // Study Queue Prototype (user.study_queue)
    // @lessons_available (Number) - number of lessons currently available
    // @reviews_available (Number) - number of reviews currently available
    // @next_review_date (Number or null) - unix timestamp for next review (or null if vacation mode)
    // @reviews_available_next_hour (Number) - number of reviews available within the next hour
    // @reviews_available_next_day (Number) - number of reviews available within the next day
    var studyQueueProto = makeProto({ apiResourceLoc: "study-queue", userResourceLoc: "study_queue" });

    // Level Progression Prototype (user.level_progression)
    // @radicals_progress (Number) - number of radicals completed for the current level
    // @radicals_total (Number) - total number of radicals for this level
    // @kanji_progress (Number) - number of kanji completed for the current level
    // @kanji_total (Number) - total number of kanji for this level
    var levelProgressionProto = makeProto({ apiResourceLoc: "level-progression", userResourceLoc: "level_progression" });

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
    var srsDistributionProto = makeProto({ apiResourceLoc: "srs-distribution", userResourceLoc: "srs_distribution" });
    var sumByItem = function(item) {
        var type, sum = 0;
        for (type in this) {
            if (this.hasOwnProperty(type) && typeof this[type] === "object") {
                if (this[type][item]) {
                    sum += this[type][item];
                }
            }
        }
        return sum;
    };
    // need to overwrite the function, can't bind the prototype object here
    srsDistributionProto.totalRadicals = function() { 
        this.totalRadicals = sumByItem.bind(this, "radicals");
        return sumByItem.call(this, "radicals");
    };
    srsDistributionProto.totalKanji = function() {
        this.totalKanji = sumByItem.bind(this, "kanji");
        return sumByItem.call(this, "kanji");
    };
    srsDistributionProto.totalVocabulary = function() {
        this.totalVocabulary = sumByItem.bind(this, "vocabulary");
        return sumByItem.call(this, "vocabulary");
    };
    srsDistributionProto.totalItems = function() {
        this.totalItems = sumByItem.bind(this, "total");
        return sumByItem.call(this, "total");
    };

    // Simple list interface object that provides useful functionality
    // to list data objects.
    var listInterface = {
        // Returns an array of objects whose specified properties
        // have the specified value.
        // @prop (String) - the property of each object to look under
        // @value (String) - the value to look for of said property
        getBy: function(prop, value) {
            var item, result = [];
            for (item in this) {
                if (this.hasOwnProperty(item) && typeof this[item] === "object") {
                    if (this[item][prop] && this[item][prop] === value) {
                        result.push(this[item]);
                    }
                }
            }
            return result;
        }
    };

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
    var recentUnlocksProto = makeProto({ apiResourceLoc: "recent-unlocks", userResourceLoc: "recent_unlocks" });
    recentUnlocksProto.getRadicals = function() {
        this.getRadicals = listInterface.getBy.bind(this, "type", "radical");
        return listInterface.getBy.call(this, "type", "radical");
    };
    recentUnlocksProto.getKanji = function() {
        this.getKanji = listInterface.getBy.bind(this, "type", "kanji");
        return listInterface.getBy.call(this, "type", "kanji");
    };
    recentUnlocksProto.getVocabulary = function() {
        this.getVocabulary = listInterface.getBy.bind(this, "type", "vocabulary");
        return listInterface.getBy.call(this, "type", "vocabulary");
    };
    recentUnlocksProto.getByCharacter = function(character) {
        this.getByCharacter = listInterface.getBy.bind(this, "character");
        return listInterface.getBy.call(this, "character", character);
    };
    recentUnlocksProto.getByMeaning = function(meaning) {
        this.getByMeaning = listInterface.getBy.bind(this, "meaning");
        return listInterface.getBy.call(this, "meaning", meaning);
    };
    recentUnlocksProto.getByLevel = function(level) {
        this.getByLevel = listInterface.getBy.bind(this, "level");
        return listInterface.getBy.call(this, "level", level);
    };
    recentUnlocksProto.getByUnlockedDate = function(unlocked_date) {
        this.getByUnlockedDate = listInterface.getBy.bind(this, "unlocked_date");
        return listInterface.getBy.call(this, "unlocked_date", unlocked_date);
    };

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
    var criticalItemsProto = makeProto({ apiResourceLoc: "critical-items", userResourceLoc: "critical_items" });
    criticalItemsProto.getRadicals = function() {
        this.getRadicals = listInterface.getBy.bind(this, "type", "radical");
        return listInterface.getBy.call(this, "type", "radical");
    };
    criticalItemsProto.getKanji = function() {
        this.getKanji = listInterface.getBy.bind(this, "type", "kanji");
        return listInterface.getBy.call(this, "type", "kanji");
    };
    criticalItemsProto.getVocabulary = function() {
        this.getVocabulary = listInterface.getBy.bind(this, "type", "vocabulary");
        return listInterface.getBy.call(this, "type", "vocabulary");
    };
    criticalItemsProto.getByCharacter = function(character) {
        this.getByCharacter = listInterface.getBy.bind(this, "character");
        return listInterface.getBy.call(this, "character", character);
    };
    criticalItemsProto.getByMeaning = function(meaning) {
        this.getByMeaning = listInterface.getBy.bind(this, "meaning");
        return listInterface.getBy.call(this, "meaning", meaning);
    };
    criticalItemsProto.getByLevel = function(level) {
        this.getByLevel = listInterface.getBy.bind(this, "level");
        return listInterface.getBy.call(this, "level", level);
    };
    criticalItemsProto.getByPercentage = function(percentage) {
        this.getByPercentage = listInterface.getBy.bind(this, "percentage");
        return listInterface.getBy.call(this, "percentage", percentage);
    };

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
    var radicalsProto = makeProto({ apiResourceLoc: "radicals", userResourceLoc: "radicals" });
    radicalsProto.getByCharacter = function(character) {
        this.getByCharacter = listInterface.getBy.bind(this, "character");
        return listInterface.getBy.call(this, "character", character);
    };
    radicalsProto.getByMeaning = function(meaning) {
        this.getByMeaning = listInterface.getBy.bind(this, "meaning");
        return listInterface.getBy.call(this, "meaning", meaning);
    };
    radicalsProto.getByImage = function(image) {
        this.getByImage = listInterface.getBy.bind(this, "image");
        return listInterface.getBy.call(this, "image", image);
    };
    radicalsProto.getByLevel = function(level) {
        this.getByLevel = listInterface.getBy.bind(this, "level");
        return listInterface.getBy.call(this, "level", level);
    };

    // Kanji List Prototype (user.kanji)
    // @character (String) - character for this kanji
    // @meaning (String) - meaning(s) of this kanji
    // @onyomi (String) - on'yomi reading for this kanji
    // @kunyomi (String) - kun'yomi reading for this kanji
    // @nanori (String) - nanori reading for this kanji
    // @important_reading (String) - which reading is important (onyomi, kunyomi, or nanori)
    // @level (Number) - level at which this kanji was unlocked
    // @user_specific (Object) - user specific information (see user.radicals.user_specific)
    var kanjiProto = makeProto({ apiResourceLoc: "kanji", userResourceLoc: "kanji" });
    kanjiProto.getByCharacter = function(character) {
        this.getByCharacter = listInterface.getBy.bind(this, "character");
        return listInterface.getBy.call(this, "character", character);
    };
    kanjiProto.getByMeaning = function(meaning) {
        this.getByMeaning = listInterface.getBy.bind(this, "meaning");
        return listInterface.getBy.call(this, "meaning", meaning);
    };
    kanjiProto.getByImportantReading = function(important_reading) {
        this.getByImportantReading = listInterface.getBy.bind(this, "important_reading");
        return listInterface.getBy.call(this, "important_reading", important_reading);
    };
    kanjiProto.getByLevel = function(level) {
        this.getByLevel = listInterface.getBy.bind(this, "level");
        return listInterface.getBy.call(this, "level", level);
    };

    // Vocabulary List Prototype (user.vocabulary)
    // @character (String) - character for this word
    // @kana (String) - hiragana or katakana for this word
    // @meaning (String) - meaning(s) of this word
    // @level (Number) - level at which this item was unlocked
    // @user_specific (Object) - user specific information (see user.radicals.user_specific)
    var vocabularyProto = makeProto({ apiResourceLoc: "vocabulary", userResourceLoc: "vocabulary" });
    vocabularyProto.getByCharacter = function(character) {
        this.getByCharacter = listInterface.getBy.bind(this, "character");
        return listInterface.getBy.call(this, "character", character);
    };
    vocabularyProto.getByKana = function(kana) {
        this.getByKana = listInterface.getBy.bind(this, "kana");
        return listInterface.getBy.call(this, "kana", kana);
    };
    vocabularyProto.getByMeaning = function(meaning) {
        this.getByMeaning = listInterface.getBy.bind(this, "meaning");
        return listInterface.getBy.call(this, "meaning", meaning);
    };
    vocabularyProto.getByLevel = function(level) {
        this.getByLevel = listInterface.getBy.bind(this, "level");
        return listInterface.getBy.call(this, "level", level);
    };


    // Performs a deep copy on parent over to child.
    // Catches objects / arrays.
    var deepCopy = function(parent, child) {
        var i,
            toStr = Object.prototype.toString,
            astr = "[object Array]";

        child = child || {};

        for (i in parent) {
            if (parent.hasOwnProperty(i)) {
                if (typeof parent[i] === "object") {
                    child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                    deepCopy(parent[i], child[i]);
                } else {
                    child[i] = parent[i];
                }
            }
        }
    };

    // Updates rate limiting information
    // before making a request to the API.
    // @user (object) - the user object
    var updateRateLimiting = function updateRateLimiting(user) {
        if (new Date() - user.first_request_date >= 3600000) { // past an hour, so reset
            user.first_request_date = new Date();
            user.num_requests_made = 1;
        } else {
            user.num_requests_made += 1;
        }
    };

    // Retrieves data for given object.
    // Takes a spec object with the following
    // attributes:
    // @spec (object) - spec object for passing params
    // --@user (object) - the user object
    // --@obj (object) - the object whose data needs to be retrieved
    // --@callback (fn) - the callback function
    // --@param (number) - optional parameter
    // --@force (boolean) - optional param to force the api call regardless of rate limiting
    //var retrieveObjectData = function(user, obj, callback, param) {
    var retrieveObjectData = function(spec) {
        // no need to refresh so callback
        if (!isExpiredOrEmpty(spec.obj) && typeof spec.param === "undefined" && !spec.force) { spec.callback(); }
        // callback if rate limited
        if (spec.user.isRateLimited() && !spec.force) {
            var error = {
                "error": {
                    "code": "rate_limited",
                    "message": "403 Forbidden (Rate Limit Exceeded)"
                }
            };
            spec.callback(error);
        }
        updateRateLimiting(spec.user);
        var wk_url = "https://www.wanikani.com/api/user/" + spec.user.key + "/" + spec.obj.apiResourceLoc;
        if (typeof spec.param !== "undefined") { wk_url += "/" + spec.param; }   
        $.getJSON(wk_url + (debug_mode ? "" : "?callback=?"), function(data) {
            var d;
            if (data.error) {
                spec.callback(data);
            } else {
                if (spec.obj.userResourceLoc === "user_information") {
                    deepCopy(data.user_information, spec.user.user_information);
                } else {
                    deepCopy(data.requested_information, spec.user[spec.obj.userResourceLoc]);
                }
                spec.obj.isEmpty = false;
                spec.obj.expiration = new Date();
                spec.callback();
            }
        });
    };

    // Checks if an object is expired or empty.
    // @obj (Object) - object to check
    var isExpiredOrEmpty = function(obj) {
        return obj.isExpired() || obj.isEmpty;
    };

    // Checks if given numbers are valid for
    // certain parameters. E.g., levels, percentages, etc.
    // @numbers (String or Number) - numbers requested
    var numbersAreValid = function(numbers, min, max) {
        var givenNumbers,
            numsAreValid,
            num;
        if (typeof numbers === "number" && numbers >= min && numbers <= max) {
            return true;
        } else if (typeof numbers === "string") {
            givenNumbers = numbers.split(",");
            numsAreValid = true;
            for (num in givenNumbers) {
                if (givenNumbers[num] < min || givenNumbers[num] > max) {
                    numsAreValid = false;
                    break;
                }
            }
            return numsAreValid;
        }
        return false;
    };

    // Returns a spec object for any given getter method
    // which should be handed over to retrieveObjectData.
    var getSpecObject = function getSpecObject() {
        var args = Array.prototype.slice.call(arguments),
            // data type is always the last argument
            type = args.pop(),
            // callback is always 2nd to last argument
            callback = args.pop(),
            param = (args[0] && typeof args[0] === "string") ? args[0] : null,
            force,
            spec;
        if (param) {
            force = (args[1] && typeof args[1] === "boolean") ? args[1] : null;
        } else {
            force = (args[0] && typeof args[0] === "boolean") ? args[0] : null;
        }
        spec = {
            "user": this,
            "obj": this[type],
            "callback": callback,
            "force": force
        };
        // add optional param if valid
        switch (type) {
        case "recent_unlocks":
            if (numbersAreValid(param, 1, 100)) { spec.param = param; }
            break;
        case "critical_items":
            if (numbersAreValid(param, 0, 100)) { spec.param = param; }
            break;
        case "radicals":
            if (numbersAreValid(param, 1, 60)) { spec.param = param; }
            break;
        case "kanji":
            if (numbersAreValid(param, 1, 60)) { spec.param = param; }
            break;
        case "vocabulary":
            if (numbersAreValid(param, 1, 60)) { spec.param = param; }
            break;
        default:
            break;
        }
        return spec;
    };

    // prototype object for users
    var user = {
        // Returns true if the user is rate limited, false otherwise.
        isRateLimited: function isRateLimited() {
            if (this.first_request_date === 0) { return false; } // never made a request
            if (this.num_requests_made >= 100) { return true; } // over the limit
        },

        // Retrieves the user's information.
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function
        getUserInformation: function getUserInformation(callback) {
            // add type to arguments before getting spec
            [].push.call(arguments, "user_information");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's study queue.
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function
        getStudyQueue: function getStudyQueue(callback) {
            // add type to arguments before getting spec
            [].push.call(arguments, "study_queue");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's level progression.
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getLevelProgression: function getLevelProgression(callback) {
            // add type to arguments before getting spec
            [].push.call(arguments, "level_progression");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's SRS distribution.
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getSRSDistribution: function getSRSDistribution(callback) {
            // add type to arguments before getting spec
            [].push.call(arguments, "srs_distribution");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's recent unlocks list.
        // @limit (string) - limit for number of items returned
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getRecentUnlocksList: function getRecentUnlocksList() {
            // add type to arguments before getting spec
            [].push.call(arguments, "recent_unlocks");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's critical items list.
        // @percentage (string) - percentage correct
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getCriticalItemsList: function getCriticalItemsList() {
            // add type to arguments before getting spec
            [].push.call(arguments, "critical_items");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's radicals list.
        // @levels (string) - radicals of given level(s)
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getRadicalsList: function getRadicalsList() {
            // add type to arguments before getting spec
            [].push.call(arguments, "radicals");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's kanji list.
        // @levels (string) - kanji of given level(s)
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getKanjiList: function getKanjiList() {
            // add type to arguments before getting spec
            [].push.call(arguments, "kanji");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves the user's voabulary list.
        // @levels (String or Number) - vocabulary of given level(s)
        // @force (boolean) - whether or not to force the call to the api
        // @callback (fn) - callback function.
        getVocabularyList: function getVocabularyList() {
            // add type to arguments before getting spec
            [].push.call(arguments, "vocabulary");
            var spec = getSpecObject.apply(this, arguments);
            retrieveObjectData(spec);
        },

        // Retrieves all data for the user.
        // Returns a success status (true if all calls passed w/o errors, false otherwise).
        // Also returns an array of all error objects, if any.
        // @callback (fn) - callback function
        getAllData: function getAllData(callback) {
            var name,
                errors = [],
                success = true,
                callsFinished = 0,
                funcNames = ["getUserInformation", "getStudyQueue",
                            "getLevelProgression", "getSRSDistribution", 
                            "getRecentUnlocksList", "getCriticalItemsList", 
                            "getRadicalsList", "getKanjiList", "getVocabularyList"];

            // called at the end of each function that retrieves data
            var finished = function finished(error) {
                callsFinished += 1;
                if (error) {
                    success = false;
                    errors.push(error);
                }
                if (callsFinished === funcNames.length) {
                    callback(success, errors);
                }
            };
            for (name in funcNames) {
                this[funcNames[name]](finished);
            }
        }
    };


    // Factory for user objects.
    // @key (Number) - user's WK API key
    var getUser = function(api_key) {
        var result = Object.create(user);
        result.key = api_key;
        result.first_request_date = 0;
        result.num_requests_made = 0;
        result.user_information = Object.create(userInformationProto);
        result.study_queue = Object.create(studyQueueProto);
        result.level_progression = Object.create(levelProgressionProto);
        result.srs_distribution = Object.create(srsDistributionProto);
        result.recent_unlocks = Object.create(recentUnlocksProto);
        result.critical_items = Object.create(criticalItemsProto);
        result.radicals = Object.create(radicalsProto);
        result.kanji = Object.create(kanjiProto);
        result.vocabulary = Object.create(vocabularyProto);
        return result;
    };

    return {
        getUser: getUser
    };

}(this));
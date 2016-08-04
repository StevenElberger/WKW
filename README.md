[![Build Status](https://travis-ci.org/StevenElberger/WKW.svg?branch=master)](https://travis-ci.org/StevenElberger/WKW)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c32206ead0d043d2b3afde4fc151c996)](https://www.codacy.com/app/stevenelberger/WKW?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=StevenElberger/WKW&amp;utm_campaign=Badge_Grade)
# WKW

WKW - Client Side JS Wrapper for WaniKani API

**Properties**

-   `getUser` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** takes an api key and returns a user object

# proto

Prototype for user's data objects.
Contains basic state and functionality (e.g., expiration and emptiness).

**Properties**

-   `time` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the expiration time for this data type
-   `isEmpty` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not this object is "empty"
-   `apiResourceLoc` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the location of this data type from the API's URL
-   `userResourceLoc` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of this data type's key in the user object
-   `expiration` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** unix timestamp for when this object was created
-   `isExpired` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** returns whether or not this data has expired

# makeProto

Factory function for objects that have proto as their prototype.

**Parameters**

-   `overrides` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** properties to overwrite in this object's prototype

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** an object whose prototype is proto

# userInformationProto

User information prototype (user.user_information)

**Properties**

-   `username` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** user's username
-   `gravatar` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** md5 gravatar hash for user's avatar
-   `level` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** user's level
-   `title` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** user's title
-   `about` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** user's about me
-   `website` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** user's website URL
-   `twitter` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** user's twitter handle
-   `topics_count` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of topics on message board
-   `posts_count` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of posts made by user
-   `creation_date` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** unix timestamp for account creation
-   `vacation_date` **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | null)** unix timestamp for vacation setting

# studyQueueProto

Study queue prototype (user.study_queue)

**Properties**

-   `lessons_available` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of lessons currently available
-   `reviews_available` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of reviews currently available
-   `next_review_date` **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | null)** unix timestamp for next review (or null if vacation mode)
-   `reviews_available_next_hour` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of reviews available within the next hour
-   `reviews_available_next_day` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of reviews available within the next day

# levelProgressionProto

Level progression prototype (user.level_progression)

**Properties**

-   `radicals_progress` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of radicals completed for the current level
-   `radicals_total` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** total number of radicals for this level
-   `kanji_progress` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of kanji completed for the current level
-   `kanji_total` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** total number of kanji for this level

# srsDistributionProto

SRS distribution prototype (user.srs_distribution)

**Properties**

-   `apprentice` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** items at apprentice level
    -   `apprentice.radicals` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of radicals
    -   `apprentice.kanji` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of kanji
    -   `apprentice.vocabulary` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of vocabulary
    -   `apprentice.total` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the total number of items
-   `guru` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** items at guru level (same structure as apprentice)
-   `master` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** items at master level (same structure as apprentice)
-   `enlighten` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** items at enlighten level (same structure as apprentice)
-   `burned` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** items at burned level (same structure as apprentice)

# listInterface

Simple list interface object that provides useful functionality
to list data objects.

## getBy

Returns an array of objects whose specified properties
have the specified value.

**Parameters**

-   `prop` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the property of each object to look under
-   `value` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the value to look for of said property

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** contains objects whose `prop` are `value`

# recentUnlocksProto

Recent unlocks list prototype (user.recent_unlocks)
3 different types of objects in here
For an example of the objects stored, please see the [WaniKani API](http://wanikani.com/api).

## getBy

See [listInterface](#listinterface)

## getRadicals

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all radicals in this

## getKanji

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all kanji in this

## getVocabulary

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all vocabulary in this

## getByCharacter

**Parameters**

-   `character` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired character

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given character

## getByMeaning

**Parameters**

-   `meaning` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired meaning

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given meaning

## getByLevel

**Parameters**

-   `level` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired level

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given level

## getByUnlockedDate

**Parameters**

-   `unlocked_date` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired unlocked_date

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given unlocked date

# criticalItemsProto

Critical items list prototype (user.critical_items)
3 different types of objects in here
For an example of the objects stored, please see the [WaniKani API](http://wanikani.com/api).

## getBy

See [listInterface](#listinterface)

## getRadicals

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all radicals in this

## getKanji

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all kanji in this

## getVocabulary

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all vocabulary in this

## getByCharacter

**Parameters**

-   `character` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired character

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given character

## getByMeaning

**Parameters**

-   `meaning` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired meaning

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given meaning

## getByLevel

**Parameters**

-   `level` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired level

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given level

## getByPercentage

**Parameters**

-   `percentage` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired percentage

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given percentage

# radicalsProto

Radicals list prototype (user.radicals)
For an example of the objects stored, please see the [WaniKani API](http://wanikani.com/api).

## getBy

See [listInterface](#listinterface)

## getByCharacter

**Parameters**

-   `character` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired character

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given character

## getByMeaning

**Parameters**

-   `meaning` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired meaning

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given meaning

## getByImage

**Parameters**

-   `image` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired image URL

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given image url

## getByLevel

**Parameters**

-   `level` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired level

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given level

# kanjiProto

Kanji list prototype (user.kanji)
For an example of the objects stored, please see the [WaniKani API](http://wanikani.com/api).

## getBy

See [listInterface](#listinterface)

## getByCharacter

**Parameters**

-   `character` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired character

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given character

## getByMeaning

**Parameters**

-   `meaning` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired meaning

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given meaning

## getByImportantReading

**Parameters**

-   `important_reading` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired important reading

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with given reading

## getByLevel

**Parameters**

-   `level` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired level

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given level

# vocabularyProto

Vocabulary list prototype (user.vocabulary)
For an example of the objects stored, please see the [WaniKani API](http://wanikani.com/api).

## getBy

See [listInterface](#listinterface)

## getByCharacter

**Parameters**

-   `character` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired character

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given character

## getByKana

**Parameters**

-   `kana` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired hiragana or katakana

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given kana

## getByMeaning

**Parameters**

-   `meaning` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** desired meaning

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given meaning

## getByLevel

**Parameters**

-   `level` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** desired level

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** containing all items in this with the given level

# deepCopy

Performs a deep copy on parent over to child.
Catches objects / arrays.

**Parameters**

-   `parent` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the object to be copied from
-   `child` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the object to copy to

# updateRateLimiting

Updates rate limiting information
before making a request to the API.

**Parameters**

-   `user` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the user object

# retrieveObjectData

Retrieves data for given object.
Takes a spec object with the following
attributes:

**Parameters**

-   `spec` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** spec object for passing params
    -   `spec.user` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the user object
    -   `spec.obj` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the object whose data needs to be retrieved
    -   `spec.param` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** optional parameter (e.g., percentages, levels, etc.)
    -   `spec.force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** optional param to force the api call regardless of rate limiting

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

# isExpiredOrEmpty

Checks if an object is expired or empty.

**Parameters**

-   `obj` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** object to check

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not the object is expired or empty

# numbersAreValid

Checks if given numbers are valid for
certain parameters. (e.g., levels, percentages, etc.)

**Parameters**

-   `numbers` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** numbers requested
-   `min` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the min the numbers can be
-   `max` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the max the numbers can be

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not the given numbers are valid

# getSpecObject

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a spec object for any given getter method
which should be handed over to retrieveObjectData.

# user

prototype object for users

## isRateLimited

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if the user is rate limited, false otherwise.

## getUserInformation

Retrieves the user's information.

**Parameters**

-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getStudyQueue

Retrieves the user's study queue.

**Parameters**

-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getLevelProgression

Retrieves the user's level progression.

**Parameters**

-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getSRSDistribution

Retrieves the user's SRS distribution.

**Parameters**

-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getRecentUnlocksList

Retrieves the user's recent unlocks list.

**Parameters**

-   `limit` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** limit for number of items returned
-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getCriticalItemsList

Retrieves the user's critical items list.

**Parameters**

-   `percentage` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** percentage correct
-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getRadicalsList

Retrieves the user's radicals list.

**Parameters**

-   `levels` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** radicals of given level(s)
-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getKanjiList

Retrieves the user's kanji list.

**Parameters**

-   `levels` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** kanji of given level(s)
-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getVocabularyList

Retrieves the user's voabulary list.

**Parameters**

-   `levels` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** vocabulary of given level(s)
-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to force the call to the api

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

## getAllData

Retrieves all data for the user.

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a Promise object

# getUser

Factory for user objects.

**Parameters**

-   `api_key` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** user's WK API key

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a User object

# storageAvailable

Tests whether or not browser supports local storage.

**Parameters**

-   `type`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if supported, false otherwise

# getStoredData

Retrieves any data from localStorage and
keeps a local cache inside the users object.
Called on initializing WKW and available in debug.

# saveUsers

Saves the local cache of users (the users object)
in localStorage. Called after any data is updated.

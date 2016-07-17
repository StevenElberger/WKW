# WKW
A client-side JavaScript wrapper for the WaniKani API
## Usage
The wrapper can be referenced from the global module `WKW`. It only provides a single method, `getUser(api_key)`. All wrapper functionality is bundled inside a `User` object. Each resource from the API is stored inside a corresponding data object which is a property of a `User` object.

```javascript
var user = WKW.getUser(api_key);
user.getUserInformation().then(function() {
    console.log("Hello, " + user.user_information.username + "!");
});
```

## User
The User object has the following properties:

### [user_information](#useruser_information)

### [study_queue](#userstudy_queue)

### [level_progression](#userlevel_progression)

### [srs_distribution](#usersrs_distribution)

### [recent_unlocks](#userrecent_unlocks)

### [critical_items](#usercritical_items)

### [radicals](#userradicals)

### [kanji](#userkanji)

### [vocabulary](#uservocabulary)

### key
**Type:** `string`

The user object's API key.

### first_request_date
**Type:** `number`

Unix timestamp for the first request made with this user object, used for rate limiting purposes. Unless you know what you're doing, you should probably leave this alone.

### num_requests_made
**Type:** `number`

Number of requests made to the API with this user object within the last hour, used for rate limiting purposes. Unless you know what you're doing, you should probably leave this alone, too.

### isRateLimited()
Returns true if the user is rate limited, false otherwise. This is according to the best guess by the wrapper. It's possible this method returns false when the user is actually rate limited (e.g., made API calls before using the wrapper in the same hour) so this is more of an approximation. A rate limit check is done every time the API is hit, but you can override this by passing in the optional `force` boolean to any of the methods below.

### getUserInformation(force)
Retrieves the user's information.
#### Parameters
**force** `boolean` Whether or not to ignore rate limiting. True will make the call even if the user is supposed to be rate limited.

**Returns:** a Promise object

### getStudyQueue(force)
Retrieves the user's study queue.
#### Parameters
**force** `boolean` Whether or not to ignore rate limiting. True will make the call even if the user is supposed to be rate limited.

**Returns:** a Promise object

### getLevelProgression(force)
Retrieves the user's level progression.
#### Parameters
**force** `boolean` Whether or not to ignore rate limiting. True will make the call even if the user is supposed to be rate limited.

**Returns:** a Promise object

### getSRSDistribution(force)
Retrieves the user's SRS distribution.
#### Parameters
**force** `boolean` Whether or not to ignore rate limiting. True will make the call even if the user is supposed to be rate limited.

**Returns:** a Promise object

### getRecentUnlocks(limit, force)
Retrieves the user's recent unlocks list.
#### Parameters
**limit** `string` Limit for the number of items returned

**force** `boolean` Whether or not to ignore rate limiting. True will make the call even if the user is supposed to be rate limited.

**Returns:** a Promise object

### getAllData()
Retrieves all user data from the API by calling all other user methods.

**Returns:** a Promise object only when all calls have completed

## user.user_information
The data object for the user's information. This stores data from the API resource `user-information`.

### username
**Type:** `string`

The user's username

### gravatar
**Type:** `string | null`

The user's gravatar hash

### level
**Type:** `number`

The user's level

### title
**Type:** `string`

The user's title

### about
**Type:** `string | null`

The user's "about me"

### website
**Type:** `string | null`

The user's website's URL

### twitter
**Type:** `string | null`

The user's twitter

### topics_count
**Type:** `number`

The number of topics created on the message boards

### posts_count
**Type:** `number`

The number of post created on the message boards

### creation_date
**Type:** `number`

Unix timestamp for the date the user's account was created

### vacation_date
**Type:** `number | null`

Unix timestamp for when user went into vacation mode

### getAvatar()
**Returns:** `string` the gravatar URL for this user's avatar.

## user.study_queue
The data object for the user's study queue. This stores data from the API resource `study-queue`.

### lessons_available
**Type:** `number`

Number of lessons currently available

### reviews_available
**Type:** `number`

Number of reviews currently available

### next_review_date
**Type:** `number | null`

Unix timestamp for next review (or null if vacation mode)

### reviews_available_next_hour
**Type:** `number`

Number of reviews available within the next hour

### reviews_available_next_day
**Type:** `number`

Number of reviews available within the next day

## user.level_progression
The data object for the user's level progression. This stores data from the API resource `level-progression`.

### radicals_progress
**Type:** `number`

The number of radicals completed for the current level

### radicals_total
**Type:** `number`

The total number of radicals for this level

### kanji_progress
**Type:** `number`

The number of kanji completed for the current level

### kanji_total
**Type:** `number`

The total number of kanji for this level

## user.srs_distribution
The data object for the user's SRS distribution. This stores data from the API resource `srs-distribution`.

### apprentice
**Type:** `object`

Items that are at the apprentice level.

#### radicals
**Type:** `number`

The number of radicals at the apprentice level.

#### kanji
**Type:** `number`

The number of kanji at the apprentice level.

#### vocabulary
**Type:** `number`

The number of vocabulary items at the apprentice level.

#### total
**Type:** `number`

The total number of items at the apprentice level.

### guru
**Type:** `object`

Items that are at the guru level. (Same items as apprentice, above)

### master
**Type:** `object`

Items that are at the master level. (Same items as apprentice, above)

### enlighten
**Type:** `object`

Items that are at the enlightened level. (Same items as apprentice, above)

### burned
**Type:** `object`

Items that are at the burned level. (Same items as apprentice, above)

### totalRadicals()
**Returns:** `number` the total number of radicals.

### totalKanji()
**Returns:** `number` the total number of kanji.

### totalVocabulary()
**Returns:** `number` the total number of vocabulary words.

### totalItems()
**Returns:** `number` the total number of items.

## user.recent_unlocks
The data object for the user's recent unlocks. This stores data from the API resource `recent-unlocks`.
All items have the following common attributes:
**type** `string` - type of item in the list (radical, kanji, vocabulary)
**character** `string` - the character(s) for this item
**meaning** `string` - a comma separated string of meanings for this item
**level** `number` - the level at which this item was unlocked
**unlocked_date** `number` - unix timestamp for when this item was unlocked
Vocabulary only:
**kana** `string` - the katana or hiragana representation for this word
Radical only:
**image** `string | null` - the URL of the image, if any (otherwise null)
Kanji only:
**onyomi** `string` - the on'yomi reading for this kanji
**kunyomi** `string` - the kun'yomi reading for this kanji
**nanori** `string` - the nanori reading for this kanji
**important_reading** `string` - which reading is important for this kanji (onyomi, kunyomi, or nanori)

### getBy(property, value)
Returns an array of objects whose specified properties have the specified value. Can be useful for creating customized search functions.
#### Parameters
**property** `string` the desired property to filter by (e.g., `level`)

**value** `string | number` the desired value search for

**Returns:** `array` objects stored in this data object whose given properties have the desired value

### getRadicals()
**Returns:** `array` an array of all radicals in this object.

### getKanji()
**Returns:** `array` an array of all kanji in this object.

### getVocabulary()
**Returns:** `array` an array of all vocabulary in this object.

### getByCharacter(character)
#### Parameters
**character** `string` the desired character

**Returns:** `array` an array of all items in this object with the given character.

### getByMeaning(meaning)
#### Parameters
**meaning** `string` the desired meaning

**Returns:** `array` an array of all items in this object with the given meaning.

### getByLevel(level)
#### Parameters
**level** `number` the desired level

**Returns:** `array` an array of all items in this object with the given level.

### getByUnlockedDate(unlocked_date)
#### Parameters
**unlocked_date** `number` the unix timestamp of the desired unlocked date

**Returns:** `array` an array of all items in this object with the given unlocked_date (unix timestamp).

## user.critical_items
The data object for the user's critical items. This stores data from the API resource `critical-items`.
All items have the following common attributes:
**type** `string` - type of item in the list (radical, kanji, vocabulary)
**character** `string` - the character(s) for this item
**meaning** `string` - a comma separated string of meanings for this item
**level** `number` - the level at which this item was unlocked
**percentage** `number` - what percentage this item has been reviewed correctly
Vocabulary only:
**kana** `string` - the katana or hiragana representation for this word
Radical only:
**image** `string | null` - the URL of the image, if any (otherwise null)
Kanji only:
**onyomi** `string` - the on'yomi reading for this kanji
**kunyomi** `string` - the kun'yomi reading for this kanji
**nanori** `string` - the nanori reading for this kanji
**important_reading** `string` - which reading is important for this kanji (onyomi, kunyomi, or nanori)


### getBy(property, value)
Returns an array of objects whose specified properties have the specified value. Can be useful for creating customized search functions.
#### Parameters
**property** `string` the desired property to filter by (e.g., `level`)

**value** `string | number` the desired value search for

**Returns:** `array` objects stored in this data object whose given properties have the desired value

### getRadicals()
**Returns:** `array` an array of all radicals in this object.

### getKanji()
**Returns:** `array` an array of all kanji in this object.

### getVocabulary()
**Returns:** `array` an array of all vocabulary in this object.

### getByCharacter(character)
#### Parameters
**character** `string` the desired character

**Returns:** `array` an array of all items in this object with the given character.

### getByMeaning(meaning)
#### Parameters
**meaning** `string` the desired meaning

**Returns:** `array` an array of all items in this object with the given meaning.

### getByLevel(level)
#### Parameters
**level** `number` the desired level

**Returns:** `array` an array of all items in this object with the given level.

### getByPercentage(percentage)
#### Parameters
**percentage** `number` the desired percentage

**Returns:** `array` an array of all items in this object with the given percentage.

## user.radicals
The data object for the user's radicals. This stores data from the API resource `radicals`.
All items have the following common attributes:
**character** `string` - the character(s) for this item
**meaning** `string` - a comma separated string of meanings for this item
**image** `string | null` - url for the image of this item
**level** `number` - the level at which this item was unlocked
**user_specific** `object` - user specific information
  **srs** `string` - the group this item is in (apprentice, guru, etc.)
  **srs_numeric** `number` - tbd
  **unlocked_date** `number` - unix timestamp for when this item was unlocked
  **available_date** `number` - unix timestamp for when this item will be ready for review
  **burned** `boolean` - whether or not this item is burned
  **burned_date** `number` - unix timestamp for when this item was burned (0 if not burned)
  **meaning_correct** `number` - number of times meaning was answered correctly
  **meaning_incorrect** `number` - number of times meaning was answered incorrectly
  **meaning_max_streak** `number` - highest number of times meaning was answered correctly
  **meaning_current_streak** `number` - current streak of consecutively correct answers
  **reading_correct** `number | null` - number of times reading was answered correctly
  **reading_incorrect** `number | null` - number of times reading was answered incorrectly
  **reading_max_streak** `number | null` - highest number of times meaning was answered correctly consecutively
  **reading_current_streak** `number | null` - current number of times meaning was answered correctly consecutively
  **meaning_note** `string | null` - user-created notes for meaning
  **user_synonyms** `array | null` - user-created synonyms for this item

### getBy(property, value)
Returns an array of objects whose specified properties have the specified value. Can be useful for creating customized search functions.
#### Parameters
**property** `string` the desired property to filter by (e.g., `level`)

**value** `string | number` the desired value search for

**Returns:** `array` objects stored in this data object whose given properties have the desired value

### getByCharacter(character)
#### Parameters
**character** `string` the desired character

**Returns:** `array` an array of all items in this object with the given character.

### getByMeaning(meaning)
#### Parameters
**meaning** `string` the desired meaning

**Returns:** `array` an array of all items in this object with the given meaning.

### getByImage(imageURL)
#### Parameters
**imageURL** `string` the desired image URL
**Returns:** `array` an array of all items in this object with the given image URL.

### getByLevel(level)
#### Parameters
**level** `number` the desired level

**Returns:** `array` an array of all items in this object with the given level.

## user.kanji
The data object for the user's kanji. This stores data from the API resource `kanji`.
All items have the following common attributes:
**character** `string` - the character(s) for this item
**meaning** `string` - a comma separated string of meanings for this item
**onyomi** `string` - on'yomi reading for this kanji
**kunyomi** `string` - kun'yomi reading for this kanji
**nanori** `string` - nanori reading for this knaji
**important_reading** `string` - which reading is important (onyomi, kunyomi, or nanori)
**level** `number` - the level at which this item was unlocked
**user_specific** `object` - user specific information (see [user.radicals](#userradicals))

### getBy(property, value)
Returns an array of objects whose specified properties have the specified value. Can be useful for creating customized search functions.
#### Parameters
**property** `string` the desired property to filter by (e.g., `level`)

**value** `string | number` the desired value search for

**Returns:** `array` objects stored in this data object whose given properties have the desired value

### getByCharacter(character)
#### Parameters
**character** `string` the desired character

**Returns:** `array` an array of all items in this object with the given character.

### getByMeaning(meaning)
#### Parameters
**meaning** `string` the desired meaning

**Returns:** `array` an array of all items in this object with the given meaning.

### getByImportantReading(important_reading)
#### Parameters
**important_reading** `string` the desired important reading

**Returns:** `array` an array of all items in this object with the given reading.

### getByLevel(level)
#### Parameters
**level** `number` the desired level

**Returns:** `array` an array of all items in this object with the given level.

## user.vocabulary
The data object for the user's vocabulary. This stores data from the API resource `vocabulary`.
All items have the following common attributes:
**character** `string` - the character(s) for this item
**kana** `string` - hiragana or katakana for this word
**meaning** `string` - a comma separated string of meanings for this item
**level** `number` - the level at which this item was unlocked
**user_specific** `object` - user specific information (see [user.radicals](#userradicals))

### getBy(property, value)
Returns an array of objects whose specified properties have the specified value. Can be useful for creating customized search functions.
#### Parameters
**property** `string` the desired property to filter by (e.g., `level`)

**value** `string | number` the desired value search for

**Returns:** `array` objects stored in this data object whose given properties have the desired value

### getByCharacter(character)
#### Parameters
**character** `string` the desired character

**Returns:** `array` an array of all items in this object with the given character.

### getByKana(kana)
**Returns:** `array` an array of all items in this object with the given kana.

### getByMeaning(meaning)
#### Parameters
**meaning** `string` the desired meaning

**Returns:** `array` an array of all items in this object with the given meaning.

### getByLevel(level)
#### Parameters
**level** `number` the desired level

**Returns:** `array` an array of all items in this object with the given level.
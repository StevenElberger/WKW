// WKW - Client Side JS Wrapper for WaniKani API


// User Information (user.user_information)
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
    "expiration": new Date(),
    isExpired() { return new Date() - this.expiration > 10000; }
};

function User(api_key) {
    var resultUser = {
        key: api_key,
        getUserInformation(callback) {
            if (!this.user_information.isExpired() && this.user_information.username != null) { callback(); }
            var that = this;
            var wk_url = "https://www.wanikani.com/api/user/";
            var request = $.ajax({
                url: wk_url + this.key,
                type: "GET",
            });
            request.done(function(data) {
                that.user_information.username = data.user_information.username;
                that.user_information.gravatar = data.user_information.gravatar;
                that.user_information.level = data.user_information.level;
                that.user_information.title = data.user_information.title;
                that.user_information.about = data.user_information.about;
                that.user_information.website = data.user_information.website;
                that.user_information.twitter = data.user_information.twitter;
                that.user_information.topics_count = data.user_information.topics_count;
                that.user_information.posts_count = data.user_information.posts_count;
                that.user_information.creation_date = data.user_information.creation_date;
                that.user_information.vacation_date = data.user_information.vacation_date;
                callback();
            });
        }
    };
    resultUser.user_information = new Object(UserInformation);
    return resultUser;
}
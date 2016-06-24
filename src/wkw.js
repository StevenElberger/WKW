function getUserInformation() {
    var wk_url = "https://www.wanikani.com/api/user/";
    var request = $.ajax({
        url: wk_url + this.key,
        type: "GET",
    });
    request.done(function(data) {
        this.userInformation = data;
        return data;
    });
}

function User(api_key) {
    var resultUser = {
        key: api_key,
        getUserInformation: getUserInformation
    };
    return resultUser;
}
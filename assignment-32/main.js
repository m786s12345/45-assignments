var current_users = ["Noah", "Jack", "William", "Naime"];
var new_users = ["Peter", "Cristine", "Polard", "Berlin"];
function checkUsername(current_users, new_users) {
    var lower_current_users = current_users.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var user = new_users_1[_i];
        var lower_new_users = user.toLocaleLowerCase();
        if (lower_current_users.includes(lower_new_users)) {
            console.log("Username \"".concat(user, " is already here.Please Enter a new Username.\""));
        }
        else {
            console.log("Username \"".concat(user, "\" is Available."));
        }
    }
}
checkUsername(current_users, new_users);

var current_users = ["zahida", "Shahida", "Siraj", "minhaj", "iqra", "HAYYAN"];
var new_users = ["ZahidA", "aziza", "jawad", "Minhaj", "raFia"];
new_users.forEach(function (para_new_user) {
    var lowerCasenewuser = para_new_user.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCasenewuser)) {
        console.log("the username ".concat(para_new_user, " is not available. Plz write a different name."));
    }
    else {
        console.log("the username ".concat(para_new_user, " is available. "));
    }
});

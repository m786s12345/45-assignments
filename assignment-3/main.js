var personname = "muhammad sumair";
//lower case
var lowercasename = personname.toLowerCase();
console.log("lower", lowercasename);
//uper case
var uppercasename = personname.toUpperCase();
console.log("uppercase:", uppercasename);
//title case
var titlecasename = personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("titlecase:", titlecasename);

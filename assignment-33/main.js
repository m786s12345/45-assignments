var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var OrdinalNumbers = void 0;
    if (num === 1) {
        OrdinalNumbers = "st";
    }
    else if (num === 2) {
        OrdinalNumbers = "nd";
    }
    else if (num === 3) {
        OrdinalNumbers = "rd";
    }
    else {
        OrdinalNumbers = "th";
    }
    console.log("".concat(num).concat(OrdinalNumbers));
}

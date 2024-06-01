var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Bali", "Aby dhabi", "Cappadocia", "Tulum"];
console.log("original order:", places);
console.log("Aphanetical order:", places);
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
console.log("original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("original order:", places);
places.reverse();
console.log("Reversed order:", places);

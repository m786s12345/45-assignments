var guests = ['Leo', 'Henry', 'Jack', 'Noah'];
console.log("Unfortunately, I Can Invite Only Two People for Dinner");
while (guests.length > 2) {
    var removeguest = guests.pop();
    console.log("Sorry ".concat(removeguest, ", I can't invite you to dinner."));
}
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", YOU'RE STILL INVITED TO THE DINNER"));
});
guests.splice(0, guests.length);
console.log(guests);

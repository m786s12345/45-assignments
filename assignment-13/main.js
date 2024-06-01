/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var transport_mode = ["Honda car", "Charvolet Bike", "audi skoti", "Aeroplane of Emirates airline", "Hyundai bus", "Mishtubishi car", "mercedes-benz jeep"]; // store names of mode of transportation in arrays
transport_mode.forEach(function (mname) {
    console.log("\u201CI would like to own a  ".concat(mname, " .\"")); // print/ displayeach mode of transportation with same message on each line.
});

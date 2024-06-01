let places:string[]= [ "Bali","Aby dhabi" ,"Cappadocia","Tulum" ]

console.log("original order:",places);

console.log("Aphanetical order:", places);

console.log("Alphabetical Order:", [...places].sort());

console.log("original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("original order:", places);

places.reverse();
console.log("Reversed order:", places);
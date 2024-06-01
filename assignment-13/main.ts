/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */

let transport_mode=["Honda car","Charvolet Bike","audi skoti","Aeroplane of Emirates airline","Hyundai bus","Mishtubishi car","mercedes-benz jeep"]; // store names of mode of transportation in arrays
transport_mode.forEach(mname=>{// Applied forEach Method to select mode of transportation one at a time.
    
    console.log(`“I would like to own a  ${mname} ."`); // print/ displayeach mode of transportation with same message on each line.
});  

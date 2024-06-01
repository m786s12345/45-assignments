let guests: string[] = ['Oscar' , 'James' , 'William' , 'Michael'];
console.log("Great news! I found a bigger dinner table!");
 
//More Guest
guests.unshift("Berlin");
guests.splice(guests.length / 2,0, "Lucia");
guests.push("Tokyo");

guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join for dinner?`);
});
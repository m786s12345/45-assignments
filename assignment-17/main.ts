let guests: string[] = ['Leo' , 'Henry' , 'Jack' , 'Noah'];
console.log("Unfortunately, I Can Invite Only Two People for Dinner");

while(guests.length > 2){
    let removeguest = guests.pop()
   console.log(`Sorry ${removeguest}, I can't invite you to dinner.`)
}

guests.forEach(guests => {
console.log(`Dear ${guests}, YOU'RE STILL INVITED TO THE DINNER`)
})
guests.splice(0, guests.length);
console.log(guests);
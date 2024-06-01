let guest_list = ["Elder sis, Shahida","Young cousin, Fawad","Young Brother, Junaid","Grand Father, Abba Hasan"]; //store names of deceased guest in array 
guest_list.forEach((mname) => { // Applied forEach Method to retrive Guest Name at a time
    console.log(`“Dear ${mname}! I would like to invite you in dinner as we were used to have dinner together in your life. ."`); // Print / Display each Guest with same message on each line.
});

let guest_refused=guest_list[1]; // second guest  has refused to join dinner.
console.log(`\n Oops! ${guest_refused} is not coming.\n`)

guest_list.splice(1,1,"Uncle Ishaq") // This method remove Previous name from the list and add new name on that position
console.log(`\n Great! our new guest ${guest_list[1]} is going to join us.\n`);

guest_list.forEach((mname) => { // Applied forEach Method to retrive Guest Name at a time
    console.log(`“Dear ${mname}! I would like to inform you that our beloved ${guest_refused} is not coming in dinner, because of some personal reasons, but you are still cordially invited for the dinner. I'll be awaiting for you"`); // Print / Display each Guest with same message on each line.
});  
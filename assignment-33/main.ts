let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  for(let num of numbers) {
    let OrdinalNumbers: string;
    if(num === 1) {
      OrdinalNumbers = "st";
    } else if(num === 2) {
       OrdinalNumbers = "nd"; 
    } else if(num === 3) {
      OrdinalNumbers = "rd";
    } else {
      OrdinalNumbers = "th";
    }
    console.log(`${num}${OrdinalNumbers}`);
    
  }
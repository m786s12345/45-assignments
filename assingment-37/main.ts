let current_users:string[]=["zahida","Shahida","Siraj","minhaj","iqra","HAYYAN"]
let new_users:string[]=["ZahidA","aziza","jawad","Minhaj","raFia"]

new_users.forEach(para_new_user=> {
    let lowerCasenewuser:string = para_new_user.toLowerCase();

    if 
    (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCasenewuser)){
console.log(`the username ${para_new_user} is not available. Plz write a different name.`);
    } 
    else{console.log(`the username ${para_new_user} is available. `)}

})
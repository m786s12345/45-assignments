let current_users:string[] = ["Noah", "Jack", "William", "Naime"]
let new_users:string[] = ["Peter", "Cristine", "Polard", "Berlin"]

function checkUsername(current_users:string[], new_users:string[]):void {
     let lower_current_users = current_users.map(user => user.toLowerCase());
     for(let user of new_users) {
      let lower_new_users = user.toLocaleLowerCase();
      if(lower_current_users.includes(lower_new_users)) {
        console.log(`Username "${user} is already here.Please Enter a new Username."`);
      } else {
        console.log(`Username "${user}" is Available.`);
      }
     }
}

checkUsername(current_users, new_users);
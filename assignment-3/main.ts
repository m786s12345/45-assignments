let personname: string = "muhammad sumair";

//lower case
let lowercasename: string=personname.toLowerCase()
console.log("lower",lowercasename);

//uper case
let uppercasename:string=personname.toUpperCase()
console.log("uppercase:",uppercasename);

//title case
let titlecasename:string=personname.replace(/\b\w/g,(char)=>char.toUpperCase());
console.log("titlecase:", titlecasename);
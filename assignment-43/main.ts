let nameMagician:string[]=['David Copperfield', "Dynamo","Harry Houdini","Derren Brown","Juan Tamariz"]; // orignal array
let nameMagician2:string[]=nameMagician; // copy of the array

function make_great(ParaMgician:string[])
{
for (let index = 0; index < ParaMgician.length; index++) {
    nameMagician2[index] = 'the Great '+ParaMgician[index];  // modification on copied array
    
}
};


function show_magicians(ParaMgician:string[])
{
nameMagician2.forEach(element => {
    console.log(element)
});


};

console.log('\nThis is the Orignal array: \n')
show_magicians(nameMagician)


console.log('\nThis is the copy of modified array: \n')
make_great(nameMagician2)
show_magicians(nameMagician2)
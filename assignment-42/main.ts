let nameMagician:string[]=['David Copperfield', "Dynamo","Harry Houdini","Derren Brown","Juan Tamariz"]

function make_great(ParaMgician:string[])
{
for (let index = 0; index < ParaMgician.length; index++) {
    nameMagician[index] = 'the Great '+ParaMgician[index];
    
}
};

make_great(nameMagician)



function show_magicians(ParaMgician:string[])
{
nameMagician.forEach(element => {
    console.log(element)
});


};
show_magicians(nameMagician)
var nameMagician = ['David Copperfield', "Dynamo", "Harry Houdini", "Derren Brown", "Juan Tamariz"];
function make_great(ParaMgician) {
    for (var index = 0; index < ParaMgician.length; index++) {
        nameMagician[index] = 'the Great ' + ParaMgician[index];
    }
}
;
make_great(nameMagician);
function show_magicians(ParaMgician) {
    nameMagician.forEach(function (element) {
        console.log(element);
    });
}
;
show_magicians(nameMagician);

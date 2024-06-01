var favorite_pizza = ["Neapolitan", "The Mexican", "Chicken"]; // store three kinds of favorite pizza in an array.
//use a for loop to print the name of each pizza.
for (var i = 0; i < favorite_pizza.length; i++) {
    console.log(favorite_pizza[i]);
}
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var _i = 0, favorite_pizza_1 = favorite_pizza; _i < favorite_pizza_1.length; _i++) {
    var pizza = favorite_pizza_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\n I really love pizza! \n");

function makeSandwiches(items) {
    return `I want a sandwish of : ${items}`;
}
;
let sandwishOrder01 = makeSandwiches(['Egg', 'Chicken', 'Ham']);
console.log(sandwishOrder01);
let sandwishOrder02 = makeSandwiches(['Grilled Cheese.', 'Chicken']);
console.log(sandwishOrder02);
let sandwishOrder03 = makeSandwiches(['Grilled Chicken']);
console.log(sandwishOrder03);
let sandwishOrder04 = makeSandwiches([]); // with empty aurgument
console.log(sandwishOrder04);
export {};

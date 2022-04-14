let shoppingList = new Map([
  ['Banana', 3],
  ['Pineapple', 5],
  ['Pear', 2],
  ['Carrot', 10],
  ['Apple', 1.5],
]);

var arrKey = [];
for(let x of shoppingList.entries()) {
    arrKey.push(x[0]);
    console.log(`groceries: ${x[0]}`);

}

var arrValue = [];
for(let x of shoppingList.entries()) {
    arrKey.push(x[1]);
    console.log(`amount: ${x[1]}`);

}

for (let value of shoppingList) console.log(value);

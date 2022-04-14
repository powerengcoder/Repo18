// Only change code below this line
function* myGenerator(arguments) {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}
let iterator = myGenerator([6, 7, 8]);

var generatorArray= [];

for(i=0; i<13; i++){
generatorArray.push(iterator.next().value);
}
console.log(generatorArray);
// only change code above this line
module.exports = { generatorArray, myGenerator}
let rockStar = new Map([
['artist', 'The Rolling Stones'],
['song', 'Angie'],
['album', 'Goats Head Soup'],
['singer', 'Mick Jagger']
]);


let newRock = new Map();

for(let x of rockStar.entries()) {
    if(x[0].startsWith("a") === false)
    newRock.set(x[0], x[1]);
}
console.log(newRock);

module.exports = {rockStar, newRock};
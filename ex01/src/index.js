let myArr = [];

function* multiplication(x) {
  for (i = 0; i < x; i++) {
    x *= 2;
    myArr.push(x);
     yield x;
  }
}
var num = multiplication(3);

for (i = 0; i <= 3; i++) {
  console.log(num.next().value);
}

module.exports = multiplication;

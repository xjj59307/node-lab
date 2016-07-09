function* foo(x) {
  yield x + 1;
  console.log('first yield finished');

  var y = yield null;
  console.log('second yield finished');

  return x + y;
}

var gen = foo(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next(8));

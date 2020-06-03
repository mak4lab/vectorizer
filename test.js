const test = require('ava');
const vectorize = require('./vectorize');
const unvectorize = require('./unvectorize');

test('vectorization', t => {
  const tokens = ["2x76882","8","2x10","8","2x2"];
  const { index, vector } = vectorize(tokens);
  t.deepEqual(index, [ '8', '2x76882', '2x10', '2x2' ]);
  t.deepEqual(vector, [ 1, 0, 2, 0, 3 ]);
});

test('unvectorize', t => {
  const index = [ '8', '2x76882', '2x10', '2x2' ];
  const vector = [ 1, 0, 2, 0, 3 ];
  const data = unvectorize({ index, vector });
  t.deepEqual(data, ["2x76882","8","2x10","8","2x2"]);
});

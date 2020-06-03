const countBy = require('lodash.countby');

const vectorize = data => {
  const counts = countBy(data);
  const index = Object.entries(counts)
    .sort((a, b) => Math.sign(b[1] - a[1])) // sort by popularity
    .map(it => it[0]);
  const vector = data.map(it => index.indexOf(it));
  return { index, vector };
}

module.exports = vectorize;

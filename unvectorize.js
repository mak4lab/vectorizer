const unvectorize = ({ vector, index }) => {
  return vector.map(it => index[it]);
}

module.exports = unvectorize;

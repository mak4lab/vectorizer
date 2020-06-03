# vectorizer
Convert an Array of Strings to an Array of Numbers with an Index and vice versa

# usage
## vectorize
```javascript
const vectorize = require("vectorizer/vectorize");

const tokens = ["2x76882","8","2x10","8","2x2"];
const { index, vector } = vectorize(tokens);
// index is [ '8', '2x76882', '2x10', '2x2' ]
// vector is [ 1, 0, 2, 0, 3 ]
```

## unvectorize
```javascript
const unvectorize = require("vectorizer/unvectorize");

const index = [ '8', '2x76882', '2x10', '2x2' ];
const vector = [ 1, 0, 2, 0, 3 ];
const data = unvectorize({ index, vector });
// data is ["2x76882","8","2x10","8","2x2"]
```

# support
Post an issue at https://github.com/Mak4Lab/vectorizer/issues

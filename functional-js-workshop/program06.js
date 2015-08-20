function countWords(inputWords) {
  // inputWords.sort();
  var obj = {};
  //
  return inputWords.reduce(function(p, c, i) {
    // console.log(p);
    if (i === 1) {
      console.log(p);
      obj[p] = 1;
    }
    obj[c] = obj[c] + 1 || 1;
    return obj;
  });
}

module.exports = countWords;

// OFFICIAL

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }
//
// module.exports = countWords

function XO(str) {
    let array = str.toLowerCase().split('');
    let xA = [];
    let oA = [];
    for (i=0; i < array.length; i++) {
      if (array[i] === 'x') {
        xA.push(array[i]);
      }
      if (array[i] === 'o') {
        oA.push(array[i]);
      }  
    }
    if (xA.length === oA.length) {
      return true;
    } else {
      return false;
    }
  }
//   Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
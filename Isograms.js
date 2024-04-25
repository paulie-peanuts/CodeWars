function isIsogram(str){
    let result = true;
    str = str.toLowerCase().split('').sort().join('');
    for (let i=1; i <= str.length; i++) {
      if (str[i-1] === str[i]) {
        result = false;
      }
    }
    return result;
  }
  /*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)*/
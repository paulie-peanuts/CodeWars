/*This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/
function accum(s) {
	let letters = s.split('');
  let new1 = [];
  for (i=0; i < letters.length; i++) {
    new1.push(letters[i].repeat(i+1));
  }
  new1 = new1.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  return new1.join('-');
}
function reverseString(str) {
  // type your code here
  const word = [];
  for (i = 0; i < str.length; i++) {
    word.unshift(str[i]);
  }
  const newWord = word.join("");
  return newWord;
}

//declare an empty array
//for loop over the string argument
//for every letter, unshift the letter or add to the beginning of the array
//use .join() to convert array into a string
//return the variable containing the string


//created a new array to add every letter of the string using unshift, to add in the beginning, resulting in reversed order. use .join to "join" elements of the array forming a word.




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

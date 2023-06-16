function isPalindrome(word) {
  // Write your algorithm here

  // make copy of string and put into array
  let wordArr = Array.from(word) 

  // reverse array in new variable
  let wordRev = wordArr.reverse()
  

  wordRev = wordRev.toString()
  wordRev = wordRev.replaceAll(',', '')

  console.log(wordRev)
  console.log(wordArr)
  if (word === wordRev) {
    console.log("true")
    return true
  }
  else {
    return false
  }


}

/* 
  Add your pseudocode here
*/

/* have the word string into an array in a new variable. then compare with if statement and return true or false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

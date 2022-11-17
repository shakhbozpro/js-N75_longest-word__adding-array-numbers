// LONGEST WORD

let str = "The quick brown fox jumped over the lazy dog";

let longestWord = (str) => {
   let strArray = str.split(" ");
   let sortedStrArray = strArray.sort(
      (strA, strB) => {
         return strB.length - strA.length;
      }
   )
   return sortedStrArray[0];
}

console.log(longestWord(str));

// ==================================================================================================
// ==================================================================================================


// ADDING ARRAY NUMBERS TO EACH OTHER
let numbers = [1, 3, 5, 9];

function someOfAll(arr) {
   let sum = 0;
   for (const a of arr) {
      sum += a;
   }
   return sum;
}

console.log(someOfAll([1, 3, 5, 9]));
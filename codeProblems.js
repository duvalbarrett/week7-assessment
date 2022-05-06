// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

const sumZero = array => {
    let value = "False"
    for (i = 0; i < array.length; i++){
            for (j = 0; j < array.length; j++){
                if (i !== j){
                 if(array[i] + array[j] === 0){
                    value = "True"
                }
            }
        }     
    }   return value
    }

console.log(sumZero(2,4))

//run time O(n^2)
//space O(n)



// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function unique(word){
    let bool = true;
    arr = word.split('');

    for(let i = 0; i < arr.length; i++){
        for(let k = i + 1; k < arr.length; k++){
            if(arr[i] == arr[k]){
                bool = false
            }
        }
    }
    return bool
}
console.log(unique('Moonday'))

// run time O(n^2)
// space 0(n)


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram (string) {
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    for (let variable of string.toLowerCase()) {
      alphabet.delete(variable);
      if (alphabet.size == 0) {
        return true;
      }
    }
    return false;
  }

console.log(isPangram('I like cats, but not mice'))
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


//run time O(1)
//space O(n)


// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);

function wordLength(string){
    let change = string.split(' ');
    let longWord = 0

    for(let i = 0; i < change.length; i++){
        if(change[i].length > longWord){
            longWord = change[i].length
        }
    }
    console.log(longWord)   
}
wordLength("i love riding my bicycle")

//run time O(log n)
//space o(n)



// // -> 5
// Be sure to add this file to your Github repo for this project.

// Extra Credit
// List out the space complexity of each solution in Step 2.

// Be sure to push your code to Github for this assignment!
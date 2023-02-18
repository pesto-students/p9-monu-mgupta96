// ***********      ITERATIVE METHOD 

const { METHODS } = require("http");


const isVowel = (char) => { return 'aeiou'.includes(char)}

const vowelCount = (word) => {
    const vowelMap = new Map();
    for (let letter of word){
        let letterLower = letter.toLowerCase();
        if (isVowel(letterLower)){
            vowelMap.set(letterLower, 
                vowelMap.has(letterLower) ? vowelMap.get(letterLower) + 1 : 1
            )
        }
    } 
    console.log(vowelMap);
    return vowelMap;
}

console.time();
let vc = vowelCount("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
console.timeEnd();
console.log("USING ITERATIVE METHOD" , vc);

console.log(vc); 
// USING ITERATIVE METHOD Map(5) { 'o' => 25, 'e' => 59, 'i' => 38, 'u' => 17, 'a' => 29 }
// default: 5.814ms

//! Time complexity : O(n)
//! Space complexity: O(1) 
// here constant k = 5 as we will be having only vowel counts
// ===================================================================================================

// ***********      RECURSIVE METHOD 
// :TO SEE THE DIFFERENCE OF EXECUTION
const vowelMap1 = new Map();
const vowelCountRecursive = (word) => {
    if (word.length > 0){
        let letterLower = (word.substring(0, 1)).toLowerCase();
        if (isVowel(letterLower)){
            vowelMap1.set(letterLower, 
                vowelMap1.has(letterLower) ? vowelMap1.get(letterLower) + 1 : 1
            )
        }
        vowelCountRecursive(word.substring(1,))
    }
    return vowelMap1;
}



console.time();
let vc1 = vowelCountRecursive("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
console.timeEnd();
console.log("USING RECURSIVE METHOD" , vc1);

// default: 0.776ms
// USING RECURSIVE METHOD Map(5) { 'o' => 25, 'e' => 59, 'i' => 38, 'u' => 17, 'a' => 29 }


// RECURSIVE METHODS working better than ITERATIVE but there could be reason because sample string otherwise 
// complexity will remain same in both
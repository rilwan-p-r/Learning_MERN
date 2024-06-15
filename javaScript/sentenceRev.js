function sentenceRev(value) {
    let words=value.split(' ')
    let result=  words.map((item,index)=>item.split('').reverse().join(''))
    return result.join(' ')
}

console.log(sentenceRev('hello world'));

function sentenceRev(value) {
    // Split the sentence into words
    let words = value.split(' ');
    let result = [];
    
    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = '';
        
        // Reverse the word manually
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        
        // Add the reversed word to the result array
        result.push(reversedWord);
    }
    
    // Join the reversed words into a single string
    return result.join(' ');
}

console.log(sentenceRev('hello world')); // Output: "olleh dlrow"

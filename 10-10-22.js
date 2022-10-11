
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.
var lengthOfLastWord = function(s) {
    //given a str wit words and spaces 
    //return length of the last word in the str
    //splitting s a t each space, so every word is an element
    //trim removes the space from the beginning and end of string
    //then can seperate string into array you know last word will be last element
    //since you removed any spaces that were on the end
    const sArr = s.trim().split(' ')
    return sArr[sArr.length -1].length
};
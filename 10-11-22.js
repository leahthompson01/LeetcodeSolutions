//Longest Substr Length
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let l = 0;
     let longest = 0
    for(let i=0; i<s.length;i++){
        //while current letter is in set
        while(set.has(s[i])){
            set.delete(s[l])
            l++
        }
        set.add(s[i])
        longest = Math.max(longest, i-l + 1)
    }
     return longest
     
   
 };
 // lengthOfLongestSubstring('bbced') => return 4
 // function('cdedc') => 4
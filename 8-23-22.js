//leetcode.com/problems/implement-strstr/submissions/
https: var strStr = function (haystack, needle) {
  //given haystack a word and needle a letter(s)
  //want to return the index of needle in haystack or -1 if needle isn't in haystack
  //when haystack = ok and needle =k return 1
  if (needle.length === 0) return 0;
  if (!haystack.includes(needle)) return -1;
  if (needle.length == 1) return haystack.indexOf(needle);
  let index;

  for (let i = 0; i < haystack.length; i++) {
    let count = 0;
    if (haystack[i] === needle[0]) {
      // console.log('hi')
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j]) {
          // console.log(haystack[i+j])
          if (haystack[i + j] == needle[j]) {
            count++;
          }
        }
        if (count == needle.length - 1) {
          return i;
        }
      }
    }
  }
  return index;
};

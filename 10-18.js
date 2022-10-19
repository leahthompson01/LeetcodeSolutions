//SUM MIXED ARRAY
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x) {
  //given an array, each element is a string or number
  //return sum of all of the array values => return an integer (number)
  //Ex: [1,2,3,4,"5","16"] => 1+2+3+4+5+16 = 31
  const numsArr = x.map((el) => Number(el));
  return numsArr.reduce((a, b) => a + b);
}

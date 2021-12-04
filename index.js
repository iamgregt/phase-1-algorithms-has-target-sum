function hasTargetSum(array, target) {
 const newArray = array.filter(num => num < target)
 console.log(newArray)
 let i = 0
 let j = newArray.length
 if (newArray[i] + newArray[j] === target){
  return true
 }else{
   console.log(newArray.length)
 }
 
}

/* 
  O(n)
*/

/* 
  filter the array for numbers less than the target
  for each number, add another number.
  if total === target
  return true
  else, false.
*/

/*
  the function will look in the array and find a number less than the target
  it will then subtract that number from the target
  it will reference that remainder and see if it is in the array

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

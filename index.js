function hasTargetSum(array, target) {
 array.forEach(num => {
   if(num === target){
     return true
   }else{
     return false
   }
 })
}

/* 
  O(n)
*/

/* 
  let i = n
  if n exists in array
  return true
  else, false.
*/

/*
  my functuin will identify the interger. it will then look in the array and return true
  if the int exists. return false not.
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

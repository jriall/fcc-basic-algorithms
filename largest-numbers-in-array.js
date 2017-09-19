//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//SOLUTION
function largestOfFour(arr) {
  var final = [];
  for (let i=0; i<arr.length; i++) {
    final.push(arr[i].sort((a,b)=>b-a)[0]);
  }
  return final;
}
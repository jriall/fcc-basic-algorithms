// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// SOLUTION

function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 0);
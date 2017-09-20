// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// SOLUTION

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  let tester = args.shift();
  return tester.filter(a=>args.indexOf(a) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
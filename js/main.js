//this comment came from branch 2
// this comment came from branch 1
//this comment came from branch 3

// find the index of an element in a sorted array in O(log2(n)) time.
// returns the index of the element if it is found, otherwise return -1, as per point 6.
function binarySearch(array, target) {
    // the left-most bound of the search range (inclusive)
    let l = 0;
    // the right-most bound of the search range (exclusive)
    let r = array.length;

    while (l < r) {
        // the mid point of the search range
        let m = Math.floor((l + r) / 2);

        if (array[m] < target) {
            l = m + 1;
        } else if (array[m] > target) {
            r = m;
        } else {
            return m;
        }
    }

    return -1;
}

// finds the index of an element in an array in O(n) time.
// returns the index of the element if it is found, otherwise returns -1, as per point 5.
function sequencialSearch(array, value) {
    // i is the current index being searched
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }

    return -1;
}

// removes a value from a sorted array using bineary search.
function removeValue(array, value) {
    let i = binarySearch(array, value);

    if (i == -1) {
        return;
    }

    array.splice(i, 1);
}

// array from point 1
let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(array);

// sort the array, as per point 2
array.sort((a, b) => a - b);
console.log(array);

//finding an element using sequencial search
console.log(sequencialSearch(array, 25));
//not finding an element using sequencial search
console.log(sequencialSearch(array, 100));

//finding an element using bineary search
console.log(binarySearch(array, 25));
//not finding an element using bineary search
console.log(binarySearch(array, 100));

// add 3 new elements to the array and sort it in accending order, as per point 3
array.push(19);
array.push(23);
array.push(30);

console.log(array);
array.sort((a, b) => a - b);
console.log(array);

// remove the numbers 8 and 11, as per point 4
removeValue(array, 8);
removeValue(array, 31);

console.log(array);

// tests
function runTest(name, expectedOutput, test) {
  console.log("starting " + name);
  const output = test();
  console.log("finished " + name + " with output: " + output);
  console.log("expected output was: " + expectedOutput);
  console.log(
    output == expectedOutput ? "test completed sucessfully" : "test failed"
  );
}

runTest("sequencial search case 1", 2, () => {
  let array = [1, 2, 3, 4, 5];
  return sequencialSearch(array, 3);
});

runTest("sequencial search case 2", 3, () => {
  let array = [71, 4, 8, 3, 5];
  return sequencialSearch(array, 3);
});

runTest("seqencial search case 3", -1, () => {
  let array = [16, 12, 48, 21];
  return sequencialSearch(array, 3);
});

runTest("bineary search case 1", 2, () => {
  let array = [3, 9, 2, 7];
  return binarySearch(array, 2);
});

runTest("bineary search case 2", -1, () => {
  let array = [61, -14, 12, 27];
  return binarySearch(array, 16);
});

runTest("bineary search case 3", 0, () => {
  let array = [12, 84, 96, 20];
  return binarySearch(array, 12);
});

runTest("bineary search case 4", 3, () => {
  let array = [5, 6, -4, 4];
  return binarySearch(array, 4);
});

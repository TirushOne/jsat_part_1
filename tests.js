import { sequencialSearch } from "./main";

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

import { binarySearch } from "./main";

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

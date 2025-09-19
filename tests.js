import { sequencialSearch } from "./main";

function runTest(name, expectedOutput, test) {
    console.log("starting " + name);
    const output = test();
    console.log("finished " + name + " with output: " + output);
    console.log("expected output was: " + expectedOutput);
    console.log(output == expectedOutput ? "test completed sucessfully" : "test failed");
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


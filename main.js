export function binarySearch(array, target) {
    let l = 0;
    let r = array.length;

    while (l < r) {
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

export function sequencialSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }

    return -1;
}

function removeValue(array, value) {
    let i = binarySearch(array, value);

    if (i == -1) {
        return;
    }

    array.splice(i, 1);
}

let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

array.sort((a, b) => a - b);

array = array + [19, 32, 30];
array.sort((a, b) => a - b);

removeValue(newArray, 8);
removeValue(newArray, 31);
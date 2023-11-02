function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        key = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > key; j--)
            arr[j + 1] = arr[j];
        arr[j + 1] = key;
    }
    return (arr);
}

function selectionSort(arr) {
    let minIdx;
    for (let i = 0; i < arr.length - 1; i++) {
        minIdx = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                minIdx = j;
        }
        if (i != minIdx) {
            let tmp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = tmp;
        }
    }
    return (arr);
}

const numbers = [4, 3, 2, 1, 8, 19];
console.log(selectionSort(numbers));
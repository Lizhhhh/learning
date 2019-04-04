let A = [5, 2, 4, 6, 1, 3];

// 插入排序
insertionSort = (A) => {
    console.log("原数组>>>", A);
    for (let j = 1; j < A.length; j++) {
        var key = A[j];
        var i = j - 1;
        while (i > -1 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }
    console.log("排序之后的数组>>>", A);
}

insertionSort(A);
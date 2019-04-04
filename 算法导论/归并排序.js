let mergeSort = (A, p, q, r) => {
    console.log("原数组>>>", A);
    let n1 = q - p + 1;
    let n2 = r - q;
    let L = new Array();
    let R = new Array();
    for (let i = 1; i < n1 + 1; i++) {
        L[i - 1] = A[p + i - 1];
    }
    for (let j = 1; j < n2 + 1; j++) {
        R[j - 1] = A[q + j];
    }
    L[n1] = Infinity;
    R[n2] = Infinity;
    let i = 0;
    let j = 0;
    for (let k = p; k < r + 1; k++) {
        if (L[i] < R[j]) {
            A[k] = L[i++];
        } else {
            A[k] = R[j++];
        }
    }
    console.log("新数组>>>", A);
}
let A = [2, 4, 5, 7, 1, 2, 3, 6];
mergeSort(A, 0, 3, 7);
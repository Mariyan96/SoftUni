function biggestElement2(matrix) {
    let highest=0;
    matrix.forEach(row=>row.forEach(e=>highest=Math.max(highest,e)));
    console.log(highest);
}
biggestElement2([[20, 50, 10],
    [8, 33, 145]]
);
biggestElement2([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);
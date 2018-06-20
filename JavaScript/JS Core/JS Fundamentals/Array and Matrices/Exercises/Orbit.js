function orbit([height,width,x,y]) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            matrix[r][c]=Math.max(Math.abs(r-y),Math.abs(c-x))+1;
        }
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}


orbit([5, 5, 2, 2]);
orbit([4, 4, 0, 0]);
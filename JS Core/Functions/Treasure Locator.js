function solve(array) {
    let islands = ["Tokelau", "Tuvalu", "Tonga", "Samoa", "Cook"];
    for (let i = 0; i < array.length; i += 2) {
        //for every point
        let x = array[i], y = array[i + 1];
        //checking every point for every island
        for (let j = 0; j < islands.length; j++) {
            let island=islands[j];
            let coordinates = islandCoordinates(island);
            //if is on island
            if (isOnIsland(x, y, coordinates)) {
                console.log(island);
                break;
            }
            //if it`s not on either island
            else if(!isOnIsland(x, y, coordinates)&&j==islands.length-1){
                console.log("On the bottom of the ocean");
            }
        }

    }
    function islandCoordinates(name) {
        let result;
        switch (name) {
            case "Tonga":
                result = [0, 2, 6, 8];
                return result;
            case "Tuvalu":
                result = [1, 3, 1, 3];
                return result;
            case "Tokelau":
                result = [8, 9, 0, 1];
                return result;
            case "Samoa":
                result = [5, 7, 3, 6];
                return result;
            case "Cook":
                result = [4, 9, 7, 8];
                return result;
        }
    }
    function isOnIsland(x, y, array) {
        let xMin = array[0];
        let xMax = array[1];
        let yMin = array[2];
        let yMax = array[3];

        if (x >= xMin && x <= xMax) {
            if (y >= yMin && y <= yMax) {
                return true;
            }
        }
        return false;
    }
}
solve([4, 2, 1.5, 6.5, 1, 3]);
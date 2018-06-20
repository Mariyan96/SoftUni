function solve (array) {
    for (let i = 0; i < array.length; i+=3) {
        let x=array[i];
        let y=array[i+1];
        let z=array[i+2];
        if(inVolume(x,y,z)){
            console.log('inside')
        }
        else{
            console.log('outside')
        }
    }

    function inVolume(x,y,z) {
        let xMin=10, xMax=50;
        let yMin=20, yMax=80;
        let zMin=15, zMax=50;
        if(x>=xMin&&x<=xMax){
            if(y>=yMin&&y<=yMax){
                if(z>=zMin&&z<=zMax){
                    return true;
                }
            }
        }
        return false;
    }
}
solve([8, 20, 22]);
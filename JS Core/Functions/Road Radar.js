function solve([speed,where]) {
    let speedD=speedDiff(speed,where);

    if(speedD>0&&speedD<=20){
        console.log('speeding')
    }
    else if(speedD>20&&speedD<=40){
        console.log('excessive speeding')
    }
    else if(speedD>40){
        console.log('reckless driving')
    }
    else{
        console.log()
    }


    function speedDiff(speed,where) {
        let maxSpeed;
        switch (where){
            case 'motorway':
                maxSpeed=130;
                break;
            case 'interstate':
                maxSpeed=90;
                break;
            case 'city':
                maxSpeed=50;
                break;
            case 'residential':
                maxSpeed=20;
                break;
        }
        return speed-maxSpeed;
    }
}
solve([40, 'city']);
function solve([x1, y1, x2, y2, x3, y3]) {
    let point1 = {x:x1,y:y1};
    let point2 = {x:x2,y:y2};
    let point3 = {x:x3,y:y3};

    let oneToTwo=calculateDistance(point1,point2);
    let twoToThree=calculateDistance(point2,point3);
    let oneToThree=calculateDistance(point1,point3);

    if (oneToTwo + twoToThree <= twoToThree + oneToThree) {
        console.log(`1->2->3: ${oneToTwo + twoToThree}`)
    } else if (oneToTwo + oneToThree < twoToThree + oneToThree) {
        console.log(`2->1->3: ${oneToTwo + oneToThree}`)
    } else {
        console.log(`1->3->2: ${twoToThree + oneToThree}`)
    }


    function calculateDistance(point1,point2) {
        let x1=point1.x;
        let y1=point1.y;
        let x2=point2.x;
        let y2=point2.y;
        let result = Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2));
        return result;
    }
}solve([0, 0, 2, 0, 4, 0]);
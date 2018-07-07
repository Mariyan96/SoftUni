let orderRectangles =(function (){
    return function (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i]={
                width:matrix[i][0],
                height:matrix[i][1],
                area:function () {
                    return this.width*this.height;
                },
                compareTo: function (rect2) {
                    let diffArea =rect2.area()-this.area();
                    if(diffArea===0){
                        return rect2.width-this.width;
                    }
                    else{
                        return diffArea;
                    }
                }
            }
        }
        matrix.sort((a,b)=>a.compareTo(b));
        return matrix;
    }
})();



console.log(orderRectangles([[1,20],[20,1],[5,3],[5,3]]));
// orderRectangles([[10,5],[5,12]])
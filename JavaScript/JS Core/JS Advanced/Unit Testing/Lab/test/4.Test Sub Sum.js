let expect=require('chai').expect;
function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}
describe("Sum function tests",function () {
    it("Should return 6 for [1,2,3]",function () {
        //arrange
        let arr =[1,2,3];
        //act
        let result=sum(arr);
        //Assert
        expect(result).to.be.equal(6)
    })
    it("Should return 1 for [1]",function () {
        //arrange
        let arr =[1];
        //act
        let result=sum(arr);
        //Assert
        expect(result).to.be.equal(1)
    })
    it("Should return 0 for []",function () {
        //arrange
        let arr =[];
        //act
        let result=sum(arr);
        //Assert
        expect(result).to.be.equal(0)
    })
    it("Should return Nan for [text]",function () {
        //arrange
        let arr =["hello"];
        //act
        let result=sum(arr);
        //Assert
        expect(result).to.be.NaN
    })
});
//npm install mocha -g
//npm install chai -g
let expect = require('chai').expect;
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
describe("Check if Symmetric",function () {
   describe("True tests",function () {
       it('Should return true for [1,2,3,2,1]',function () {
           //arrange
           let input =[1,2,3,2,1];
           //Act
           let result = isSymmetric(input);
           //Assert
           expect(result).to.be.equal(true);
       })
       it('Should return true for [1,-2,3,-2,1]',function () {
           let input =[1,-2,3,-2,1];
           let result = isSymmetric(input);
           expect(result).to.be.equal(true);
       })
       it('Should return true for [1,-2,new Date(),-2,1]',function () {
           let input =[1,-2,new Date(),-2,1];
           let result = isSymmetric(input);
           expect(result).to.be.equal(true);
       })
       it('Should return true for [1,"as",{},"as",1]',function () {
           let input =[1,"as",{},"as",1];
           let result = isSymmetric(input);
           expect(result).to.be.equal(true);
       })
       it('Should return true for [string,{},new Date(),{},string]',function () {
           let input =['asd',{},new Date(),{},'asd'];
           let result = isSymmetric(input);
           expect(result).to.be.equal(true);
       })
   })
    describe("False tests",function () {
        it('Should return false for [1,2,3,4]',function () {
            let input =[1,2,3,4];
            let result = isSymmetric(input);
            expect(result).to.be.equal(false);
        })
        it('Should return false for [1,"as",{},"as",-1]',function () {
            let input =[1,"as",{},"as",-1];
            let result = isSymmetric(input);
            expect(result).to.be.equal(false);
        })
        it('Should return false for string',function () {
            let input ='asd';
            let result = isSymmetric(input);
            expect(result).to.be.equal(false);
        })
    })
});
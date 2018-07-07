let expect = require('chai').expect;
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
describe('Test Calculator',function () {
    let input;
    beforeEach(function () {
        input=createCalculator();
    });
    describe('Add',function () {
        it('Should return 0 after initialization',function () {
            //arrange
            //Act
            let result=input.get();
            //assert
            expect(result).to.be.equal(0);
        })
        it('Should return 11 after add(5),add(6)',function () {
            //arrange
            input.add(5);
            input.add(6);
            //Act
            let result=input.get();
            //assert
            expect(result).to.be.equal(11);
        })
        it('Should return -11 after add(-5),add(-6)',function () {
            //arrange
            input.add(-5);
            input.add(-6);
            //Act
            let result=input.get();
            //assert
            expect(result).to.be.equal(-11);
        })
        it('Should return 11 after add(5.5),add(5,5)',function () {
            //arrange
            input.add(5.5);
            input.add(5.5);
            //Act
            let result=input.get();
            //assert
            expect(result).to.be.equal(11);
        })
        it('Should return 11 after add(5.5),add(5,5)',function () {
            //arrange
            input.add('5.5');
            input.add('5.5');
            //Act
            let result=input.get();
            //assert
            expect(result).to.be.equal(11);
        })
        it('Should return NaN after add(string)',function () {
            //arrange
            input.add('string');
            //Act
            let result=input.get();
            //assert
            expect(result).to.be.NaN;
        })
    });
    describe('Subtract',function () {
        it('Should return -5 after subtracting with 5',function () {
            //arrange
            input.subtract(5);
            //act
            let result = input.get();
            //assert
            expect(result).to.be.equal(-5);
        })
        it('Should return -11 after subtracting with 5 and 6',function () {
            //arrange
            input.subtract(5);
            input.subtract(6);
            //act
            let result = input.get();
            //assert
            expect(result).to.be.equal(-11);
        })
        it('Should return 11 after subtracting with -5 and -6',function () {
            //arrange
            input.subtract(-5);
            input.subtract(-6);
            //act
            let result = input.get();
            //assert
            expect(result).to.be.equal(11);
        })
        it('Should return -5.5 after subtracting with 5.5',function () {
            //arrange
            input.subtract(5.5);
            //act
            let result = input.get();
            //assert
            expect(result).to.be.equal(-5.5);
        })
        it('Should return Nan after subtracting with string',function () {
            //arrange
            input.subtract('asd');
            //act
            let result = input.get();
            //assert
            expect(result).to.be.NaN    ;
        })
        it('Should return 1 after subtracting with string',function () {
            //arrange
            input.subtract('1');
            //act
            let result = input.get();
            //assert
            expect(result).to.be.equal(-1);
        })
    })
    describe('add and subtract',function () {
        it('should return 0 after adding 10, 10 and remove 20',function () {
            //arrange
            input.add(10);
            input.add(10);
            input.subtract(20);
            //act
            let result =input.get();
            //assert
            expect(result).to.be.equal(0);
        })
        it('should return 0 after adding 10, 10 and remove 20',function () {
            //arrange
            input.add(10);
            input.add(10);
            input.subtract(20);
            input.add(1.10);
            //act
            let result =input.get();
            //assert
            expect(result).to.be.equal(1.10);
        })
    })
});
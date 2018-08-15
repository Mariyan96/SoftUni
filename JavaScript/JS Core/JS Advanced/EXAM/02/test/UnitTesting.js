let expect = require('chai').expect;
let Calculator = require('../codeToTest');
describe('Unit testing', function () {
    describe('contains expences', function () {
        it('should test', function () {
            let output = new Calculator();
            expect(output.expenses).to.be.eql([])
        })
    })
    describe('adds the passed in item ', function () {
        it('number', function () {
            let output = new Calculator();
            output.add(1);
            expect(output.expenses).to.be.eql([1])
        })
        it('string', function () {
            let output = new Calculator();
            output.add('test');
            expect(output.expenses).to.be.eql(['test'])
        })
        it('array', function () {
            let output = new Calculator();
            output.add([]);
            expect(output.expenses).to.be.eql([[]])
        })
        it('object', function () {
            let output = new Calculator();
            output.add({});
            expect(output.expenses).to.be.eql([{}])
        })
        it('date', function () {
            let output = new Calculator();
            output.add(new Date());
            expect(output.expenses).to.be.eql([new Date()])
        })
    })
    describe('divides only the numbers from the expenses  ', function () {
        it('valid tests', function () {
            let output = new Calculator();
            output.add(6);
            output.add(6);
            expect(output.divideNums()).to.be.equal(1)
            output.add(-5.3)
            expect(output.divideNums()).to.be.equal(-0.18867924528301888)
            output.add(0)

        })
        it('invalid test with 0', function () {
            let output = new Calculator();
            output.add(6);
            output.add(6);
            output.add(0);
            output.divideNums();
            expect(output.divideNums()).to.be.equal('Cannot divide by zero')
        })
        it('invalid test with no nums', function () {
            let output = new Calculator();
            output.add([]);
            output.add({});
            output.add(new Date());
            output.add('number');
            let err=function(){
                output.divideNums();
            }
            expect(err).to.throw(Error,/There are no numbers in the array!/)
        })
    })
    describe('toString function',function () {
        it('item sorted with ->',function () {
            let output = new Calculator();
            output.add(5);
            output.add(2);
            output.add(3);
            output.add(1);
            output.add(4);
            expect(output.toString()).to.be.equal('5 -> 2 -> 3 -> 1 -> 4')
            output.add([]);
            output.add({});
            output.add('test');
            output.add(-4.4);
            expect(output.toString()).to.be.equal('5 -> 2 -> 3 -> 1 -> 4 ->  -> [object Object] -> test -> -4.4')
        });
        it('no item sorted ([])',function () {
            let output =new Calculator();
            expect(output.toString()).to.be.equal('empty array')
        })
    })
    describe('orderBy function',function () {
        //Function orderBy() – returns a string joined with "
        // , " which is the sorted expenses,
        // sorting them by two criteria - one for numbers and another for mixed data.
        it('should sort properly',function () {
            let output = new Calculator();
            output.add(3)
            output.add(4.5)
            output.add('abc')
            output.add('test')
            output.add([])
            output.add(['testing'])
            output.add([2])
            expect(output.orderBy()).to.be.equal(', 2, 3, 4.5, abc, test, testing')
        })
    })
})
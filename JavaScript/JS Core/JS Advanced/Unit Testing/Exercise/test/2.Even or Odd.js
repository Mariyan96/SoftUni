let expect = require('chai').expect;
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}
describe('testingEvenOrOdd',function () {
   describe('valid cases',function () {
       it('should even with dyrvar',function () {
           let input='dyrvar';
           let result = isOddOrEven(input);
           expect(result).to.be.equal('even')
       })
       it('should odd with odd',function () {
           let input='odd';
           let result = isOddOrEven(input);
           expect(result).to.be.equal('odd')
       })
   })
    describe('invalid cases',function () {
        it('should return undefined with 8',function () {
            let result = isOddOrEven(8);
            expect(result).to.be.equal(undefined);
        })
        it('should return undefined with []',function () {
            let result = isOddOrEven(['asd']);
            expect(result).to.be.equal(undefined);
        })
        it('should return undefined with {}',function () {
            let result = isOddOrEven({});
            expect(result).to.be.equal(undefined);
        })
        it('should return undefined with as as',function () {
            let result = isOddOrEven({});
            expect(result).to.be.equal(undefined);
        })
    })
});

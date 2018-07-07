let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Test LookupChar', function () {
    describe('valid tests', function () {
        it('should return empty with i am ,2',function () {
            let result=lookupChar('i am',1);
            expect(result).to.be.equal(' ');
        })
        it('should return empty with i am ,2',function () {
            let result=lookupChar('string',0);
            expect(result).to.be.equal('s');
        })
        it('should return empty with i am ,2',function () {
            let result=lookupChar('string',5);
            expect(result).to.be.equal('g');
        })
    });
    describe('invalid tests', function () {
        it('should be undefined with number and number',function () {
            let result = lookupChar(1,3);
            expect(result).to.be.equal(undefined);
        })
        it('should be undefined with string and string',function () {
            let result = lookupChar('string','asd');
            expect(result).to.be.equal(undefined);
        })
        it('should be undefined with string and string',function () {
            let result = lookupChar('string','2');
            expect(result).to.be.equal(undefined);
        })
        it('should be undefined with index<length',function () {
            let result = lookupChar('string',-1);
            expect(result).to.be.equal('Incorrect index');
        })
        it('should be undefined with index>length',function () {
            let result = lookupChar('string',6);
            expect(result).to.be.equal('Incorrect index');
        })
        it('should be undefined with double index',function () {
            let result = lookupChar('string',6.3);
            expect(result).to.be.equal(undefined);
        })
        it('should be undefined with []',function () {
            let result = lookupChar([],6.3);
            expect(result).to.be.equal(undefined);
        })
        it('should be undefined with {}',function () {
            let result = lookupChar('string',{});
            expect(result).to.be.equal(undefined);
        })
    });
});

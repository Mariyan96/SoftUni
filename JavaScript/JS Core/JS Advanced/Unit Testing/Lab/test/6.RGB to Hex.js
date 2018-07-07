let expect = require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("validate colors", function () {
    describe("typical cases", function () {
        it('should return #FF9EAA from (255, 158, 170)', function () {
            expect(rgbToHexColor(255, 158, 170)).to.be.equal("#FF9EAA");
        });
        it('should return #000000 from (0,0,0)', function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
        });
        it('should return #FFFFFF from (255,255,255)', function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
        });
        it('should return #0C0D0E from (12,13,14)', function () {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
        });
    });
    describe("special cases", function () {
        it('should return undefined from ("stamant",1,2) ', function () {
            expect(rgbToHexColor("stamat", 1, 2)).to.be.equal(undefined);
        });
        it('should return undefined from (122,200,-1)', function () {
            expect(rgbToHexColor(122, 200, -1)).to.be.equal(undefined);
        });
        it('should return undefined from (55,256,0)', function () {
            expect(rgbToHexColor(55, 256, 0)).to.be.equal(undefined);
        });
        it('should return undefined for doubles', function () {
            expect(rgbToHexColor(3.14, 207.2, 44.2)).to.be.equal(undefined)
        });
    });
});
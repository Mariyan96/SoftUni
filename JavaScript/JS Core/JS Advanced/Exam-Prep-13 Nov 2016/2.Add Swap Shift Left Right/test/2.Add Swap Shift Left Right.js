let expect=require('chai').expect;
function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}
let list = createList();
list.add(1);
list.add("two");
list.add(3);
console.log(`list = [${list}]`);
list.shiftLeft();
console.log("shifted left <--");
console.log(`list = [${list}]`);
list.add(["four"]);
console.log(`list = [${list}]`);
list.shiftRight();
console.log("shifted right -->");
console.log(`list = [${list}]`);
console.log(`Swaping [0] and [3]: ${list.swap(0,3)}`);
console.log(`list = [${list}]`);
console.log(`Swaping [1] and [1]: ${list.swap(1,1)}`);
console.log(`list = [${list}]`);

describe("Add Swap Shift Left Right", function() {
    let testList;
    beforeEach(function () {
        testList=createList();
    });
    describe('its object',function () {
        it('should return empty',function () {
            expect(typeof testList ).to.be.equal('object');
        })
    });
    describe('has not contain data',function () {
        it('should return empty',function () {
            expect(testList.toString()).to.be.equal('');
        })
    });
    describe("Add",function () {
        it("should return a",function () {
            testList.add('a');
            let result =testList.toString();
            expect(result).to.be.equal('a');
        });
        it("should return 2",function () {
            testList.add(2);
            let result =testList.toString();
            expect(result).to.be.equal('2');
        });
        it("should return {}",function () {
            testList.add({});
            let result =testList.toString();
            expect(result).to.be.equal('[object Object]');
        })
    });
    describe("Swap",function () {
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(0,3);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(3,0);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1,-2);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(-2,1);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap([],2);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(2,[]);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(2,{});
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap({},2);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap([],[]);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(0,1.2);
            expect(result).to.be.equal(false);
        })

        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1.2,0);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1.2);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1,1);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap('guci',1);
            expect(result).to.be.equal(false);
        })
        it("should return false",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1,'guci');
            expect(result).to.be.equal(false);
        })
        it("should return true",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(0,1);
            expect(result).to.be.equal(true);
            expect(testList.toString()).to.be.equal("2, 1, 3");
        })
        it("should return true",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(0,1,5);
            expect(result).to.be.equal(true);
            expect(testList.toString()).to.be.equal("2, 1, 3");
        })
        it("should return true",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.swap(1,2);
            expect(result).to.be.equal(true);
            expect(testList.toString()).to.be.equal("1, 3, 2");
        })
    });
    describe("Left",function () {
        it("should return 2, 3, 1",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            testList.shiftLeft();
            let result =testList.toString();
            expect(result).to.be.equal('2, 3, 1');
        });
        it("should return 1",function () {
            testList.add(1);
            testList.shiftLeft();
            let result =testList.toString();
            expect(result).to.be.equal('1');
        });
        it("should return []",function () {
            testList.shiftLeft();
            let result =testList.toString();
            expect(result).to.be.equal('');
        });
    });
    describe("Right",function () {
        it("should return 3, 1, 2",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            testList.shiftRight();
            let result =testList.toString();
            expect(result).to.be.equal('3, 1, 2');
        });
        it("should return 1",function () {
            testList.add(1);
            testList.shiftRight();
            let result =testList.toString();
            expect(result).to.be.equal('1');
        });
    });
    describe("Multiple Swapping",function () {
        it("should return 1,2,3",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            testList.add(4);
            testList.shiftRight();
            testList.shiftRight();
            testList.shiftRight();
            testList.shiftLeft();
            let result =testList.toString();
            expect(result).to.be.equal('3, 4, 1, 2');
        })
    })
    describe("toString Method",function () {
        it("should return 1,2,3",function () {
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.toString();
            expect(result).to.be.equal('1, 2, 3');
        })
        it("should return 1,2,3",function () {
            let test=[1,2,3]
            testList.add(1);
            testList.add(2);
            testList.add(3);
            let result =testList.toString();
            expect(result).to.be.equal(test.join(', '));
        })
    })
});

function makeCard(face, suit) {
    let suits = {
        S: '\2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    if (face <= 1 || face >= 11) {
        throw new Error('Error');
    }
    if (!suits.hasOwnProperty(suit)) {
        throw new Error('Error');
    }
    return  {
        toString:function () {
            return face+suits[suit];
        }
    }
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));

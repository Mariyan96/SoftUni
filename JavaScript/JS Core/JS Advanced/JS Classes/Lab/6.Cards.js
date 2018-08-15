let result = (function () {
    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        CLUBS: '\u2663',
        DIAMONDS: '\u2666',
        HEARTS: '\u2665',
        SPADES: '\u2660'
    };

    class Card {
        constructor(face, suit) {
            this.suit = suit;
            this.face = face;
        }
        get suit() {
            return this._suit;
        }

        get face() {
            return this._face;
        }

        set suit(s) {
            if (Object.values(Suits).indexOf(s) < 0) {
                throw new Error('Invalid Suit!')
            }
            this._suit = s;
        }

        set face(f) {
            if (Faces.indexOf(f) < 0) {
                throw new Error('Invalid Face!')
            }
            this._face = f;
        }
        toString(){
            return this._face+this._suit;
        }
    }
    return {
        Suits, Card
    }
}());
let Card =result.Card;
let Suits = result.Suits;
let c1 = new Card('1',Suits.SPADES);
console.log(c1.toString());
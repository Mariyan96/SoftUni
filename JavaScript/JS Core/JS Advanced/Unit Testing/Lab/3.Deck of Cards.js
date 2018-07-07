function printDeckOfCards(cards){
    function makeCard(face, suit) {
        let suits = {

            S: "\u2660",
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
        let faces=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        if (faces.indexOf(face)<0) {
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

    for (let i = 0; i < cards.length; i++) {
        let end = cards[i].length;
        let face = cards[i].substring(0,end-1);
        let suit = cards[i][1,end-1];
        try{
            cards[i]= makeCard(face,suit);
        }catch (e) {
            console.log('Invalid card: '+cards[i]);
            return;
        }
    }
    console.log(cards.join(" "));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

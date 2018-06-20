function solve(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let helmets=0,swords=0,shields=0,armor=0;
    for (let i = 1; i <=lostFights; i++) {
        if(i%2===0){
            helmets++;
        }
        if(i%3===0){
            swords++;
        }
        if(i%2===0&&i%3===0){
            shields++;
            if(shields%2===0){
                armor++;
            }
        }
    }
    let sumOfAll =  (helmetPrice*helmets)+(swords*swordPrice)+
        (shields*shieldPrice)+(armor*armorPrice);
    console.log(`Gladiator expenses: ${sumOfAll.toFixed(2)} aureus`);
}





solve(7,2,3,4,5);
solve(23,12.50,21.50,40,200);

// •	First parameter – lost fights count – integer in the range [0, 1000].
// •	Second parameter – helmet price - floating point number in range [0, 1000].
// •	Third parameter – sword price - floating point number in range [0, 1000].
// •	Fourth parameter – shield price - floating point number in range [0, 1000].
// •	Fifth parameter – armor price - floating point number in range [0, 1000].
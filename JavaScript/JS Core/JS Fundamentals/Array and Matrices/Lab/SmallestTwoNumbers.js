function smallest2Numbers(array) {
    console.log(array.sort((a,b)=>a-b).slice(0,2).join(' '));
}
smallest2Numbers([]);
smallest2Numbers([1]);
smallest2Numbers([30, 15, 50, 5,5]);
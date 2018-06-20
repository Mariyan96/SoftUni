function inventory(arrayInput) {
    let result = [];
    for (let i = 0; i < arrayInput.length; i++) {
        let [name,level,items] = arrayInput[i].split(' / ');
        items =items===undefined? []:items.split(', ');

        let object ={name:name,level: +level, items: items};
        result.push(object)

    }
    console.log(JSON.stringify(result));
}





inventory(['Isacc / 25 ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
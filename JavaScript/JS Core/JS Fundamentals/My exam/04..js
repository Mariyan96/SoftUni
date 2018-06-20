function solve(arrayInput) {
    let countries = {};
    for (let i = 0; i < arrayInput.length; i++) {
        let [country,lowercaseTown,price]=arrayInput[i].split(" > ").filter(x=>x!=='');
        price=Number(price);
        let town='';
        let firstChar = lowercaseTown.slice(0,1).toUpperCase();
        lowercaseTown=lowercaseTown.slice(1,lowercaseTown.length);
        town=firstChar+lowercaseTown;
        if(!countries.hasOwnProperty(country)){
            countries[country]={};
        }
        if(!countries[country].hasOwnProperty(town)){
            countries[country][town]=price;
        }
        let previousPrice = countries[country][town];
        if(previousPrice>price){
            countries[country][town]=price;
        }
    }


    let sortedCountryNames = [...Object.keys(countries)].sort().sort((a,b)=>sortingCountryNames(a,b));
    let result='';
    for (let country of sortedCountryNames) {
        result+=`${country} ->`;
        let sortedPrices = [...Object.keys(countries[country])].sort((a,b)=>sortingPrices(a,b,countries,country));
        for (let price of sortedPrices) {
            result+=` ${price} -> ${countries[country][price]}`
        }
        result+="\n"
    }
    console.log(result);

    function sortingPrices(first,second,countries,country) {
        let firstPrice =countries[country][first];
        let secondPrice=countries[country][second];
        return firstPrice-secondPrice;

    }
    function sortingCountryNames(first,second) {
        return second-first;
    }

}

// solve(["Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200" ]
// );
solve(["Bulgaria > Sofia > 25000",
       "Bulgaria > Sofia > 25000",
       "Kalimdor > Orgrimar > 25000",
       "Albania > Tirana > 25000",
       "Bulgaria > Aarna > 25010",
       "Bulgaria > Lukovit > 10"]);
function sort(array) {
    console.log(array.sort(function (a,b) {
            if (a.length === b.length) {
                return a.toLowerCase().localeCompare(b.toLowerCase())
            }
            else {
                return a.length - b.length
            }
        }
    ));
}


sort(['Isacc','Theodor','Jack','Harrison','George']);
sort(['Deny','omen','test','Default']);
sort(['asortlpha', 'beta', 'gamma']);
function sortBy2Criteria(unsorted) {
    let sorted = unsorted.sort().sort((a,b)=>a.length-b.length);
    console.log(sorted.join('\n'));
}


sortBy2Criteria(['Isacc','Theodor','Jack','Harrison','George']);
sortBy2Criteria(['Deny','omen','test','Default']);
sortBy2Criteria(['alpha', 'beta', 'gamma']);
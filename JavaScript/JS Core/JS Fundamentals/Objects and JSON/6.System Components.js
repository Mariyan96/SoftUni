function Components (arrayInput) {
    let systems = new Map();
    for (let line of arrayInput) {
        let [system,component,subcomponent]= line.split(' | ');
        if(!systems.has(system)){
            systems.set(system,new Map());
        }
        if(!systems.get(system).has(component)){
            systems.get(system).set(component,[]);
        }
        systems.get(system).get(component).push(subcomponent);
    }
    let sortSystemMap = [...systems.keys()].sort((a, b) => sortSystems(a, b));
    for (let system of sortSystemMap) {
        console.log(system);

        let sortComponentMap = [...systems.get(system).keys()].sort((a, b) => sortComponents(system, a, b));
        for (let component of sortComponentMap) {
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(e => console.log(`||||||${e}`))
        }
    }


    function sortSystems(a,b) {
        if (systems.get(a).size !== systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
    function sortComponents(system, a, b) {
        return systems.get(system).get(b).length - systems.get(system).get(a).length;
    }
}
Components(['SULS | Main Site | Home Page'
           ,'SULS | Main Site | Login Page'
           ,'SULS | Main Site | Register Page'
           ,'SULS | Judge Site | Login Page'
           ,'SULS | Judge Site | Submittion Page'
           ,'Lambda | CoreA | A23'
           ,'SULS | Digital Site | Login Page'
           ,'Lambda | CoreB | B24'
           ,'Lambda | CoreA | A24'
           ,'Lambda | CoreA | A25'
           ,'Lambda | CoreC | C4'
           ,'Indice | Session | Default Storage'
           ,'Indice | Session | Default Security'])
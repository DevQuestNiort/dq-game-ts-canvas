

const modules = import.meta.glob("./*/index.ts", { eager: true });

console.log("Modules importés :", modules);


// .map( itemName =>  itemName.replace("./","").replace("/index.ts",""))
const mapsConfiguration = Object.keys(modules)
    .reduce((agr,config) => {
        agr[config.replace("./","").replace("/index.ts","")]= modules[config]
        return agr
    },{})

const allModules = Object.entries(modules).reduce((acc, [path, module]) => {
    acc[path.replace("./","").replace("/index.ts","")] = module.default || module;
    return acc;
}, {} as Record<string, any>);


export default allModules
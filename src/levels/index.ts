const modules = import.meta.glob("./*/index.ts", { eager: true });

//console.log("Modules importés :", modules);

interface ImportModule {
  default: Object;
}

const allModules = Object.entries(modules).reduce(
  (acc, [path, module]) => {
    acc[path.replace("./", "").replace("/index.ts", "")] =
      (module as ImportModule).default || module;
    return acc;
  },
  {} as Record<string, any>,
);

export default allModules;

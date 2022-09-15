import "reflect-metadata";
import { Router } from "express";

import { Controller } from "../interface/Controller";
import { Constructable, ModuleConfig } from "../interface/ModuleConfig";

export default function Module(moduleConfig: ModuleConfig) {
  return <T extends new (...args: never[]) => {}>(target: T) => {
    return class extends target {
      providers: Object[];
      exports: Object[];
      controllers: Controller[];
      router: Router;
      constructor(...props: never) {
        super(props);
        this.router = Router();
        this.providers = [
          ...this.importModules(moduleConfig.imports),
          ...this.registerBean(moduleConfig.providers),
        ];
        this.controllers = this.registerBean(
          moduleConfig.controllers,
        ) as Controller[];
        this.exports = this.registerBean(moduleConfig.exports);
        this.router = this.registerRouter(this.controllers);
      }

      getRouter(): Router {
        return this.router;
      }

      importModules(moduleConstructors: Constructable[] | undefined): Object[] {
        if (!moduleConstructors) return [];
        return moduleConstructors
          .map((ModuleClass) => {
            let module = Reflect.getMetadata("bean", ModuleClass.name);
            if (!module) {
              module = new ModuleClass();
              Reflect.defineMetadata("bean", module, ModuleClass.name);
            }
            this.router.use(module.getRouter());
            return module.exports;
          })
          .flat(1);
      }

      registerBean(constructors: Constructable[] | undefined): Object[] {
        if (!constructors) return [];
        return constructors.map((Constructor) => {
          let provider = Reflect.getMetadata("bean", Constructor.name);
          if (!provider) {
            provider = new Constructor();
            Reflect.defineMetadata("bean", provider, Constructor.name);
          }
          return provider;
        });
      }

      registerRouter(controllers: Controller[]): Router {
        const router: Router = Router();

        controllers.forEach((controller) => {
          router.use(controller.getPath, controller.getRouter());
        });
        return router;
      }
    };
  };
}

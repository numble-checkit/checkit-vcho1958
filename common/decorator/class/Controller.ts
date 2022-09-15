import { Router } from "express";

export default function Controller(path: string) {
  return <T extends new (...args: any[]) => {}>(target: T) => {
    return class extends target {
      router: Router = Router();
      path: string = path;
      constructor(...args: never) {
        super(args);
      }
    };
  };
}

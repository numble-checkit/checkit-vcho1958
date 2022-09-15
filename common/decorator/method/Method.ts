import "reflect-metadata";
import { Router } from "express";

export function Get(path: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const metadata = Reflect.getMetadata("bean", target);
    const router: Router = metadata.getRouter();
    router.get(path, descriptor.value);
  };
}

export function Post(path: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const metadata = Reflect.getMetadata("bean", target);
    const router: Router = metadata.getRouter();
    router.post(path, descriptor.value);
  };
}

import { Singleton } from "../src/creational/singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.showMessage();

console.log(instance1 === instance2);
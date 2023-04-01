import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EButton: typeof components.EButton;
    EIcon: typeof components.EIcon;
  }
}
export {};
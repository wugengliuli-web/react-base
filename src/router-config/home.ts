import { IRouteConfig } from "./interface";
import Home from "@pages/home/index"
export const HomeRoute: IRouteConfig[] = [
  {
    path: "/",
    component: Home,
  },
];

import buildPage from "@pages/build-page/index";
import HomeRoute from "@/router-config/home";

const routes = [...HomeRoute].map((route) => ({
  ...route,
  component: buildPage(route.component),
}));

export default routes;

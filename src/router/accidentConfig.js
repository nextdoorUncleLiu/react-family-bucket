import Login from "../pages/login/index.js";
import NotFound from "../pages/notFound/index.js";
const notLogin = {
  path: "/login",
  component: Login
};
const notPath = {
  path: "/notFound",
  component: NotFound
};
export { notLogin, notPath };

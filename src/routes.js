import { lazy } from "react";

const ContactsPage = lazy(() =>
  import("./pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login-page" */)
);

const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "register-page" */)
);

export const routes = [
  {
    path: "/contacts",
    label: "Contacts Page",
    component: ContactsPage,
    exact: true,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: "/login",
    label: "Login Page",
    component: LoginPage,
    showInMenu: true,
    isProtected: false,
  },
  {
    path: "/register",
    label: "Register Page",
    component: RegisterPage,
    showInMenu: true,
    isProtected: false,
  },
];

// const Routes = {
//   "/contacts": () => <ContactsPage />,
//   "/login": () => <LoginPage />,
//   "/register": () => <RegisterPage />,
// };

// export default Routes;

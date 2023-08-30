import { createBrowserRouter } from "react-router-dom";
import { HomePage, ErrorHandler } from "@/pages";
import { AppContainer } from "@/components";

import { UserManagment } from "@/pages/User/UserManagment";
import { Users } from "@/pages/User/users";
import { Order } from "@/pages/User/orders";
import { Password } from "@/pages/User/password";
import { Tabs } from "@/pages/User/test";

import { Login } from "@/pages/User/login";
import { Register } from "@/pages/User/register";
import { ResetPassword } from "@/pages/User/reset-password";
import { VerifyCode } from "@/pages/User/verification-code";
import { ChangePass } from "@/pages/User/changePassword";
export const Router = createBrowserRouter([
  {
    path: "/",
    Component: AppContainer,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        Component: HomePage,
        errorElement: <ErrorHandler />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset",
    element: <ResetPassword />,
  },
  // {
  //   path: "verify",
  //   element: <VerifyCode />,
  // },
  {
    path: "changePass",
    element: <ChangePass />,
  },
  {
    path: "tab",
    element: <Tabs />,
  },
  {
    path: "usersAccount",
    element: <UserManagment />,
    children: [
      {
        path: "usersAccount",
        element: <Users />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "password",
        element: <Password />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => Router.dispose());
}


import { 
  createBrowserRouter,
} from "react-router-dom";
import { 
  HomePage,
  ErrorHandler, 
} from "@/pages";
import { AppContainer } from "@/components";
import { UserAccount } from "@/userAccount";
import Test from "@/test/Test";
import { UserPage } from "@/pages/User";
import { OrderPage } from "@/pages/User/order";
import { PasswordPage } from "@/pages/User/password";
import Profile from "@/pages/User/profile";



export const Router = createBrowserRouter([
  {
    path: "/",
    Component: AppContainer,
    errorElement:<ErrorHandler/>,
    children: [
      {
        index: true,
        Component: HomePage,
        errorElement:<ErrorHandler/>,
      },
      
    ],
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/password",
    element: <PasswordPage />,
  },
  
]);


if (import.meta.hot) {
  import.meta.hot.dispose(() => Router.dispose());
}



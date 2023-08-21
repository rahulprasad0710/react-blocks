import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../ui/pages/Home";
import Catg from "../ui/pages/Catg";
import Products from "../ui/pages/Products";

// userRoutes
import UserLayout from "../ui/pages/users/UserLayout";
import UserDashboard from "../ui/pages/users/UserDashboard";
import UserAdd from "../ui/pages/users/UserAdd";
import UserList from "../ui/pages/users/UserList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "catg",
                element: <Catg />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "users",
                element: <UserLayout />,
                children: [
                    {
                        path: "",
                        element: <UserDashboard />,
                    },
                    {
                        path: "list",
                        element: <UserList />,
                    },
                    {
                        path: "add",
                        element: <UserAdd />,
                    },
                ],
            },
        ],
    },
]);

export default router;

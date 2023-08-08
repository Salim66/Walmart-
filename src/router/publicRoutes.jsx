import Forgot from "../components/Auth/Forgot";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";


const publicRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot",
        element: <Forgot />,
    },
];

export default publicRoutes;
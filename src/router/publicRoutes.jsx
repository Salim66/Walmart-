import Login from "../components/Admin/Login";
import Register from "../components/Admin/Register";


const publicRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
];

export default publicRoutes;
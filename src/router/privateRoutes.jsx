import PageLayout from "../components/PageLayout/PageLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User/User";



const privateRoutes = [
    {
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/user",
                element: <User />
            }
        ]
    }
    
];

export default privateRoutes;
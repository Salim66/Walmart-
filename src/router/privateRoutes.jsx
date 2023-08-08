import PageLayout from "../components/PageLayout/PageLayout";
import Dashboard from "../pages/Dashboard/Dashboard";



const privateRoutes = [
    {
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            }
        ]
    }
    
];

export default privateRoutes;
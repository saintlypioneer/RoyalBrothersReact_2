import { Route, Routes } from "react-router-dom";
import Home from "./templates/home";
import Auth from "./templates/auth";

function AllRoutes(){

    const routes = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/tarrif",
            element: "**tarrif"
        },
        {
            path: "/offers",
            element: "**offers"
        },
        {
            path: "/search",
            element: "**search"
        },
        {
            path: "/blog",
            element: "**blog"
        },
        {
            path: "/tour",
            element: "**tour"
        },
        {
            path: "/auth",
            element: <Auth />
        },
        {
            path: "/checkout",
            element: "**checkout"
        },
        {
            path: "/payment",
            element: "**payment"
        },
        {
            path: "/myrides",
            element: "**myrides"
        },
        {
            path: "/profile",
            element: "**profile"
        },
        {
            path: "/logout",
            element: "**logout"
        }
    ];

    return (
        <Routes>
            {
                routes.map((e)=>{
                    return (
                        <Route path={e.path} element={e.element} />
                    );
                })
            }
        </Routes>
    );
}

export default AllRoutes;
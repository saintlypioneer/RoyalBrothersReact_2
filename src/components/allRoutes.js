import { Route, Routes } from "react-router-dom";
import Home from "./templates/home";
import Auth from "./templates/auth";
import Search from "./templates/search";
import Checkout from "./templates/checkout";

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
            element: <Search />
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
            element: <Checkout />
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
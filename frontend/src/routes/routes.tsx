import { Outlet, createBrowserRouter, type RouteObject } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import Navbar from "../pages/Navbar";
const routes: RouteObject[] =[
    {
        path:'/',
        element: (
            <>
                <Navbar />
                <Outlet />
            </>
        ), 
        children: [
            {
                index: true,
                element: <PublicRoute element={<LandingPage />} />
            },
            {
                path: '/PRIVATElanding',
                element: <ProtectedRoute element={<LandingPage />}/>
            },
            {
                path: '/landing2',
                element: <LandingPage />
            }
        ]
    }
]

const router = createBrowserRouter(routes);

export default router;

import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({element}:{element: React.ReactElement}) => {
    //TO IMPLEMENT AUTH CONTEXT CHECK HERE
    const isAuthenticated = true;
    if(!isAuthenticated){
        return <Navigate to="/" replace />
    }
    return (element)
}
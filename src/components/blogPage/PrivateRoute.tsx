import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../../hooks/useRedux"

export const PrivateRoute = () => {
    const auth = useAppSelector((state) => state.auth);
    const location = useLocation();

    return auth.isAuth ? (
         <Outlet />
    ) : (
         <Navigate to="/login" state={{ from: location }} replace/>
    );
};
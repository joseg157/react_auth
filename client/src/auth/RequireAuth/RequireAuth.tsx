import useAuthContext from 'auth/useAuthContext'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

interface RequireAuthProps {
    allowedRoles: number[]
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
    const { auth } = useAuthContext()
    const location = useLocation()
    console.log("Here")
    return (
        auth?.roles?.find(role=> allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.username 
                ?  <Navigate to="/profile/home" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth
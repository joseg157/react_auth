import { useRoutes } from 'react-router-dom'
import RequireAuth from 'auth/RequireAuth'
import Home from 'containers/Home'

const ROLES = {
    "Admin": 1111,
    "Editor": 2222,
    "User": 3333
}

const PrivateRoute = () => {
    const routes = useRoutes([
        {
            element: <RequireAuth allowedRoles={[ROLES.User]} />,
            children: [
                {
                    path: "home",
                    element: <Home />
                }
            ]
        },

        {

            element: <RequireAuth allowedRoles={[ROLES.Editor]} />,
            children: [
                {
                    path: "editor",
                    element: <div>Private Editor</div>
                }
            ]
        },

        {
            element: <RequireAuth allowedRoles={[ROLES.Admin]} />,
            children: [
                {
                    path: "admin",
                    element: <div>Private Admin</div>
                }
            ]
        },
        {
            element: <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />,
            children: [
                {
                    path: "authorize",
                    element: <div>Private all</div>
                }
            ]
        },
    ])

    return routes
}

export default PrivateRoute
import { useRoutes } from 'react-router-dom'
import Login from 'containers/Login'

const PublicRoute = () => {

    const routes = useRoutes([
        { path: "/", element: <div>Home</div> },
        { path: "/login", element: <Login /> },
    ])

    return routes
}

export default PublicRoute
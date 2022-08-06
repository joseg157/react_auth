import { Routes, Route } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from 'routes'

const App = () => {
    return (
        <Routes>

            <Route path="/*" element={<PublicRoute />} />

            <Route path="profile/*" element={<PrivateRoute />} />

        </Routes>
    )
}

export default App
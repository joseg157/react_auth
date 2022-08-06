import AuthProvider from "auth/AuthProvider"
import MuiThemeProvider from "styles/MuiThemeProvider"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <BrowserRouter>
            <MuiThemeProvider>
                <AuthProvider>
                    <Routes>
                        <Route path='/*' element={children} />
                    </Routes>
                </AuthProvider>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

export default AppProvider
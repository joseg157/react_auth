import AuthProvider from "auth/AuthProvider"
import MuiThemeProvider from "styles/MuiThemeProvider"

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <AuthProvider>
            <MuiThemeProvider>
                {children}
            </MuiThemeProvider>
        </AuthProvider>
    )
}

export default AppProvider
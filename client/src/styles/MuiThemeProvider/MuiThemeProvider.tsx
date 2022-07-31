import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface Props {
    children: React.ReactNode
}

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})


const MuiThemeProvider = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default MuiThemeProvider
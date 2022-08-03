import { ThemeProvider, createTheme, PaletteOptions, Components, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface ThemeOptions {
        palette?: PaletteOptions,
        components?: Components<Omit<Theme, "components">>
    }
}


const globalTheme = createTheme({

    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
            light: '#424242',
        },
        secondary: {
            main: '#f50057',
        },
        
    }
})

const theme = createTheme(globalTheme, {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '&.MuiBox-root': {
                    marginTop: '.5rem',
                },
            }
        },
        //Name of the component
        MuiAvatar: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    margin: '.5rem',
                    backgroundColor: globalTheme.palette.secondary.main
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                // Name of the slot
                maxWidthXs: {
                    // Some CSS
                    marginTop: '4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: globalTheme.palette.primary.light
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    marginTop: '1.5rem',
                    marginBottom: '1rem'
                }
            }
        }

    }
});


interface Props {
    children: React.ReactNode
}

const MuiThemeProvider = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default MuiThemeProvider
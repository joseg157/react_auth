import Typography from '@mui/material/Typography';

interface MuiTypographyProps {
    component: 'h1' | 'p';
    children: React.ReactNode;
    variant?: 'body1' | 'body2' | 'button' | 'caption'
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit'
    | 'overline' | 'subtitle1' | 'subtitle2';
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}

const MuiTypography = ({ component, variant = 'body1', align = 'inherit', children }: MuiTypographyProps) => {
    return (
        <Typography component={component} variant={variant} align={align}>
            {children}
        </Typography>
    )
}

export default MuiTypography
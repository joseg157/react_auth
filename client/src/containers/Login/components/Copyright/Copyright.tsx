import { MuiTypography } from 'components/Typography';
import Link from '@mui/material/Link'

const Copyright = () => {
    return (
        <MuiTypography component='p' variant="body2" align="center" >
            {'Copyright © '}
            {/* Place Link Here */}
            <Link color="inherit">
                SAO DB
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </MuiTypography>
    );
}

export default Copyright
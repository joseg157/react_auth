import { MuiTypography } from 'components/Typography';

interface ErrorMessageProps {
    msg: string;
}

const ErrorMessage = ({ msg }: ErrorMessageProps) => {
    return (
        <MuiTypography component='p' variant='h6'>
            {msg}
        </MuiTypography>
    )
}

export default ErrorMessage
import { MuiTypography } from "components/Typography";
import Container from "@mui/material/Container";

const SucessMessage = () => {
    return (
        <Container maxWidth='xs'>

            <MuiTypography component="h1" variant="h4" align='center'>
                Your are logged in!
            </MuiTypography>

            <MuiTypography component="p" variant='h5' align='center'>
                Redirecting ...
            </MuiTypography>

        </Container>
    )
}

export default SucessMessage
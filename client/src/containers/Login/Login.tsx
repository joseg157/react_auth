import { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { useNavigate, useLocation } from 'react-router-dom'
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import useAuthContext from 'auth/useAuthContext';

import { DefaultValues } from "services/interfaces/LogIn";
import { defaultValues } from "services/constants/Login";

import { AvatarLock, Copyright, UsernameInput, ErrorMessage, PasswordInput, LoginButton, SignInMessage } from './components';

import axios, { AxiosError } from 'axios';

interface LocationState {
    from: {
        pathname: string
    }
}

const LogIn = () => {
    const { setAuth } = useAuthContext()

    const navigate = useNavigate()
    const location = useLocation()

    const from = (location.state as LocationState)?.from?.pathname || "/";

    const methods = useForm<DefaultValues>({ defaultValues: defaultValues })
    const { handleSubmit, reset } = methods;

    const [errorMsg, setErrMsg] = useState('');


    const onSubmit: SubmitHandler<DefaultValues> = async (data) => {

        try {
            const response = await axios.post('http://localhost:5000/auth',
                JSON.stringify({ user: data.username, pwd: data.password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken as string;
            const roles = response?.data?.roles as number[];

            setAuth({ ...data, accessToken: accessToken, roles: roles })
            reset();
            setErrMsg('');
            navigate(from, { replace: true });

        }
        catch (err) {
            if (axios.isAxiosError(err)) {
                const serverError = err as AxiosError
                !serverError?.response?.status ? setErrMsg('No Server Response')
                    : serverError?.response?.status === 400 ? setErrMsg('Missing Username or Password') :
                        serverError.response?.status === 401 ? setErrMsg('Unauthorized')
                            : setErrMsg('Login Failed')
            }
            else {
                console.error('Unexpected error', err)
            }
        }
    };

    return (
        <Container className='login_container' maxWidth='xs'>
            <ErrorMessage msg={errorMsg} />
            <AvatarLock />
            <SignInMessage />
            <Box component="form" className="login_form" onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...methods}>
                    <UsernameInput />
                    <PasswordInput />
                </FormProvider>
                <LoginButton />
                <Copyright />
            </Box>
        </Container>
    )
}

export default LogIn
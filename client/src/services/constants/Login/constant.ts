import { DefaultValues, PropsConstants } from "services/interfaces/LogIn";

export const defaultValues: DefaultValues = {
    username: '',
    password: '',
}

export const constant: PropsConstants = {
    emailProp: {
        name: "username",
        className: "username",
        labelName: "Username",
    },
    passwordProp: {
        name: 'password',
        className: 'password',
        labelName: 'Password'
    },
}
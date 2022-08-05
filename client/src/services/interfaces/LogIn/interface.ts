export interface DefaultValues {
    username: string;
    password: string;
}

interface DefaultValuesKeyNames {
    name: keyof DefaultValues
}

interface Constant extends DefaultValuesKeyNames {
    className: string;
    labelName: string; 
    isRequired?: boolean;
}

export interface PropsConstants {
    emailProp: Constant;
    passwordProp: Constant;
}
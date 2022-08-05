import { MuiTextField } from 'components/Input';
import { useLogInContextWithHookForm } from 'hooks';
import { constant } from "services/constants/Login";


const PasswordInput = () => {
    const { className, labelName, name } = constant.passwordProp
    const context = useLogInContextWithHookForm(name);

    return (
        <MuiTextField
            attributeName={context.name}
            value={context.value}
            onChange={context.onChange}

            className={className}
            labelName={labelName}
            placeholder={labelName}

            type='password'
        />
    )
}

export default PasswordInput
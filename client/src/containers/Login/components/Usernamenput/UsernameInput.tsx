import { useEffect, useRef } from 'react'
import { useLogInContextWithHookForm } from 'hooks';
import { constant } from "services/constants/Login";
import { MuiTextField } from 'components/Input';


const UsernameInput = () => {
    const { name, className, labelName } = constant.emailProp
    const emailEffectRan = useRef(false)
    const emailRef = useRef<HTMLInputElement>(null)
    const context = useLogInContextWithHookForm(name);

    useEffect(() => {

        (emailRef.current && emailEffectRan.current === false) && emailRef.current.focus()
        
        return () => {
            emailEffectRan.current = true
        }
    }, [])

    return (
        <MuiTextField
            attributeName={context.name}
            onChange={context.onChange}
            value={context.value}

            className={className}
            labelName={labelName}
            placeholder={labelName}
            textFieldRef={emailRef}

            autoComplete='off'
        />
    )
}

export default UsernameInput
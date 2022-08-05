import { useFormContext, useController } from "react-hook-form"
import { DefaultValues } from "services/interfaces/LogIn"

const useLogInContextWithHookForm = (givingName: keyof DefaultValues) => {

    const { control } = useFormContext<DefaultValues>()

    const { field: { onChange, name, value } } = useController({ control, name: givingName })

    return {
        onChange,
        name,
        value,
    }
}

export default useLogInContextWithHookForm
import TextField from "@mui/material/TextField";

interface TextFieldProps {
    placeholder: string;
    className: string;
    labelName: string;
    attributeName: string;
    value: string;
    onChange: () => void;
    /** Optional */
    autoComplete?: 'off' | 'on';
    type?: 'text' | 'email' | 'password';
    isFullWidth?: boolean;
    isRequired?: boolean;
    margin?: 'dense' | 'normal' | 'none'
    textFieldRef?: React.RefObject<HTMLInputElement> | null;
}


const MuiTextField = ({ placeholder, className, labelName, attributeName, value, onChange, autoComplete = 'on', margin = 'normal', type = 'text', isFullWidth = true, isRequired = true, textFieldRef = null }: TextFieldProps) => {
    return (
        <TextField
            name={attributeName}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className={className}
            label={labelName}

            /** Optionals */
            autoComplete={autoComplete}
            margin={margin}
            required={isRequired}
            fullWidth={isFullWidth}
            type={type}
            inputRef={textFieldRef}
        />
    )
}

export default MuiTextField
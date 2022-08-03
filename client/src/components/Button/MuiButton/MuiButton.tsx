import Button from "@mui/material/Button";

interface MuiButtonProps {
    labelName: string;
    variant?: 'contained' | 'outlined' | 'text'
    type?: "button" | "submit" | "reset";
    isFullWidth?: boolean
}

const MuiButton = ({ labelName, type = 'submit', variant = 'contained', isFullWidth = false }: MuiButtonProps) => {
    return (
        <Button type={type} variant={variant} fullWidth={isFullWidth} >{labelName}</Button>
    )
}

export default MuiButton
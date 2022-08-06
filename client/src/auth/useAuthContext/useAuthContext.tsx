import { AuthContext } from "auth/AuthProvider"
import { useContext, SetStateAction } from "react"

interface info {
    username: string | null;
    password: string | null;
    accessToken: string | null;
    roles: string[] | null
}

interface AuthContextInterface {
    auth: info
    setAuth: React.Dispatch<SetStateAction<info>>;
}

const useAuthContext = () => {
    let context = useContext<AuthContextInterface>(AuthContext);

    return context
}

export default useAuthContext
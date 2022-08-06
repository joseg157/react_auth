import { useNavigate, Link } from "react-router-dom"
import useAuthContext from "auth/useAuthContext"

const Home = () => {
    const { setAuth } = useAuthContext();
    const navigate = useNavigate()

    const logout = async () => {

        setAuth({
            username: null,
            password: null,
            accessToken: null,
            roles: null
        });
        navigate("/login")
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/profile/authorize">Go to the All page</Link>
            <br />
            <Link to="/profile/admin">Go to the Admin page</Link>
            <br />
            <Link to="/profile/editor">Go to the Editor</Link>
            <br />
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
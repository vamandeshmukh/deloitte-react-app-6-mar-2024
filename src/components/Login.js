import { useEffect, useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState();
    const [loginMessage, setLoginMessage] = useState();

    useEffect(() => {
        setLoginData(
            { username: '', password: '' }
        );
        setLoginMessage('');
    }, []);

    const submitLogin = () => { };

    return (
        <>
            <h1>Login Component</h1>
            <form onSubmit={submitLogin}>
                <input type="text" name="username" value={''} onChange={''} />
                <br />
                <input type="password" name="password" value={''} onChange={''} />
                <br />
                <input type="submit" value="Login" />
            </form>
            {loginMessage &&
                <p>{loginMessage}</p>
            }
        </>
    );
}
export default Login;
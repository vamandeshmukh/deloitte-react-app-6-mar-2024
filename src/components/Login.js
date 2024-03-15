import { useEffect, useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [loginMessage, setLoginMessage] = useState('');

    useEffect(() => {
        setLoginData(
            { username: '', password: '' }
        );
        setLoginMessage('');
    }, []);

    const submitLogin = () => {
        console.log('login successful!');
        setLoginMessage('Successfully logged in!');
    };

    const handleUsername = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({ username: evt.target.value });
    };

    const handlePassword = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({ password: evt.target.value });
    };

    return (
        <>
            <h1>Login Component</h1>
            <form onSubmit={submitLogin}>
                <input type="text" name="username" value={loginData.username} onChange={handleUsername} />
                <br />
                <input type="password" name="password" value={loginData.password} onChange={handlePassword} />
                <br />
                <input type="submit" value="Login" />
            </form>
            {loginMessage &&
                <p>Message:{loginMessage}</p>
            }
        </>
    );
}
export default Login;
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

    const handleLogin = (evt) => {
        console.log(evt.target.value);
        setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
    };

    const submitLogin = (evt) => {
        console.log(loginData);
        if (loginData.username === 'sonu' && loginData.password === 'sonu') {
            setLoginMessage(`${loginData.username} logged in successfully!`);
            setLoginData({ username: '', password: '' });
        }
        else {
            setLoginMessage('Invalid credentials.');
            setLoginData({ username: '', password: '' });
        }
        evt.preventDefault(); // prevents page reload  
    };

    return (
        <>
            <h1>Login Component</h1>
            <form onSubmit={submitLogin}>
                <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
                <br />
                <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
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


// import { useEffect, useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });
//     const [loginMessage, setLoginMessage] = useState('');

//     useEffect(() => {
//         setLoginData(
//             { username: '', password: '' }
//         );
//         setLoginMessage('');
//     }, []);

//     const submitLogin = (evt) => {
//         console.log('login successful!');
//         setLoginMessage('Successfully logged in!');
//         evt.preventDefault(); // page reload prevents
//     };

//     const handleUsername = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({ username: evt.target.value });
//     };

//     const handlePassword = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({ password: evt.target.value });
//     };

//     return (
//         <>
//             <h1>Login Component</h1>
//             <form onSubmit={submitLogin}>
//                 <input type="text" name="username" value={loginData.username} onChange={handleUsername} />
//                 <br />
//                 <input type="password" name="password" value={loginData.password} onChange={handlePassword} />
//                 <br />
//                 <input type="submit" value="Login" />
//             </form>
//             {loginMessage &&
//                 <p>Message:{loginMessage}</p>
//             }
//         </>
//     );
// }
// export default Login;


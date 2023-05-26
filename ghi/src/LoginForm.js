import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";


const LoginForm = () => {
    const[username, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useToken();

    const handleLogin = (event) => {
        event.preventDefault();
        login(username, password);
        event.target.reset();
        navigate('/');
    };

    return (
    <div className="bg-yellow-200 py-8">
        <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Login to start crushing your goals!</h1>
            <form onSubmit={handleLogin}>
            <div className="mb-4">
                <input
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                required
                type="email"
                name="username"
                id="username"
                className="form-input"
                value={username}
                />
            </div>
            <div className="mb-4">
                <input
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                required
                type="password"
                name="password"
                id="password"
                className="form-input"
                value={password}
                />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
            </form>
        </div>
        </div>
    </div>
    );
}
export default LoginForm;

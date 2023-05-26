import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import useToken from '@galvanize-inc/jwtdown-for-react';

const SignupForm = () => {
    const[first, setFirst] = useState('');
    const[last, setLast] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[age, setAge] = useState('');
    const[gender, setGender] = useState('');
    const[race, setRace] = useState('');
    const { register } = useToken();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const accountData = {
            first: first,
            last: last,
            password: password,
            email: email,
            username: email,
            age: age,
            gender: gender,
            race: race,
        };
        register (
            accountData,
            `${process.env.REACT_APP_MRQ_SERVICE}/api/accounts`
        );
        e.target.reset();
        navigate("/");
    };

    return (
    <div className="bg-yellow-200 py-20">
        <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Create an account!</h1>
            <form onSubmit={(e) => handleSignup(e)}>
            <div className="mb-4">
                <input
                onChange={(e) => {setFirst(e.target.value);}}
                placeholder="First Name"
                required
                type="text"
                name="first"
                id="first"
                className="form-input"
                value={first}
                />
            </div>
            <div className="mb-4">
                <input
                onChange={(e) => {setLast(e.target.value);}}
                placeholder="Last Name"
                required
                type="text"
                name="last"
                id="last"
                className="form-input"
                value={last}
                />
            </div>
            <div className="mb-4">
                <input
                onChange={(e) => {setPassword(e.target.value);}}
                placeholder="Password"
                required
                type="password"
                name="password"
                id="password"
                className="form-input"
                value={password}
                />
            </div>
            <div className="mb-4">
                <input
                onChange={(e) => {setEmail(e.target.value);}}
                placeholder="Email"
                required
                type="email"
                name="email"
                id="email"
                className="form-input"
                value={email}
                />
            </div>
            <div className="mb-4">
                <input
                onChange={(e) => {setAge(e.target.value);}}
                placeholder="Age"
                required
                type="number"
                name="age"
                id="age"
                className="form-input"
                value={age}
                />
            </div>
            <div className="mb-4">
                <select
                onChange={(e) => {setGender(e.target.value);}}
                placeholder="Gender"
                name="gender"
                id="gender"
                className="form-select"
                value={gender}>
                <option value="">Choose an option</option>
                <option>Male</option>
                <option>Female</option>
                <option>None of the above</option>
                <option>Do not want to share</option>
                </select>
            </div>
            <div className="mb-4">
                <select
                onChange={(e) => {setRace(e.target.value);}}
                placeholder="Race"
                name="race"
                id="race"
                className="form-select"
                value={race}>
                <option value="">Choose an option</option>
                <option>American Indian or Alaskan Native</option>
                <option>Asian</option>
                <option>Black or African American</option>
                <option>Hispanic</option>
                <option>Native Hawaiian or other Pacific Islander</option>
                <option>White</option>
                <option>Other</option>
                </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register
            </button>
            </form>
        </div>
        </div>
    </div>
    );
};
export default SignupForm;

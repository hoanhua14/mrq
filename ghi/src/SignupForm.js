// import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";

// function SignupForm() {
//     const[first, setFirst] = useState('');
//     const[last, setLast] = useState('');
//     const[password, setPassword] = useState('');
//     const[email, setEmail] = useState('');
//     const[age, setAge] = useState('');
//     const[gender, setGender] = useState('');
//     const[race, setRace] = useState('');
//     const navigate = useNavigate;

//     const handleFirstChange = (event) => {
//         const value = event.target.value;
//         setFirst(value);
//     }
//     const handleLastChange = (event) => {
//         const value = event.target.value;
//         setLast(value);
//     }
//     const handlePasswordChange = (event) => {
//         const value = event.target.value;
//         setPassword(value);
//     }
//     const handleEmailChange = (event) => {
//         const value = event.target.value;
//         setEmail(value);
//     }
//     const handleAgeChange = (event) => {
//         const value = event.target.value;
//         setAge(value);
//     }
//     const handleGenderChange = (event) => {
//         const value = event.target.value;
//         setGender(value);
//     }
//     const handleRaceChange = (event) => {
//         const value = event.target.value;
//         setRace(value);
//     }

//     const handleSignup = async (event) => {
//         event.preventDefault();
//         const data = {};
//         data.first = first;
//         data.last = last;
//         data.hashed_password = password;
//         data.email = email;
//         data.age = age;
//         data.gender = gender;
//         data.race = race;

//         const url = 'http://localhost:8000/api/accounts';
//         const fetchConfig = {
//             method: 'post',
//             body: JSON.stringify(data),
//             header: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(url, fetchConfig)
//         if (response.ok) {
//             const data = await response.json();
//             setFirst('');
//             setLast('');
//             setPassword('');
//             setEmail('');
//             setAge('');
//             setGender('');
//             setRace('');
//             navigate('/');
//         } else {
//             console.error("You can't sign up!")
//         }
//     }
//     return (
//     <div className="bg-gray-200 py-8">
//         <div className="max-w-md mx-auto">
//         <div className="bg-white p-8 rounded shadow">
//             <h1 className="text-2xl font-bold mb-4">Create an account!</h1>
//             <form onSubmit={handleSignup}>
//             <div className="mb-4">
//                 <input
//                 onChange={handleFirstChange}
//                 placeholder="First Name"
//                 required
//                 type="text"
//                 name="first"
//                 id="first"
//                 className="form-input"
//                 value={first}
//                 />
//             </div>
//             <div className="mb-4">
//                 <input
//                 onChange={handleLastChange}
//                 placeholder="Last Name"
//                 required
//                 type="text"
//                 name="last"
//                 id="last"
//                 className="form-input"
//                 value={last}
//                 />
//             </div>
//             <div className="mb-4">
//                 <input
//                 onChange={handlePasswordChange}
//                 placeholder="Password"
//                 required
//                 type="password"
//                 name="hashed_password"
//                 id="hashed_password"
//                 className="form-input"
//                 value={password}
//                 />
//             </div>
//             <div className="mb-4">
//                 <input
//                 onChange={handleEmailChange}
//                 placeholder="Email"
//                 required
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="form-input"
//                 value={email}
//                 />
//             </div>
//             <div className="mb-4">
//                 <input
//                 onChange={handleAgeChange}
//                 placeholder="Age"
//                 required
//                 type="number"
//                 name="age"
//                 id="age"
//                 className="form-input"
//                 value={age}
//                 />
//             </div>
//             <div className="mb-4">
//                 <select
//                 onChange={handleGenderChange}
//                 placeholder="Gender"
//                 name="gender"
//                 id="gender"
//                 className="form-select"
//                 value={gender}>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>None of the above</option>
//                 <option>Do not want to share</option>
//                 </select>
//             </div>
//             <div className="mb-4">
//                 <select
//                 onChange={handleRaceChange}
//                 placeholder="Race"
//                 name="race"
//                 id="race"
//                 className="form-select"
//                 value={race}>
//                 <option>Asian</option>
//                 <option>White</option>
//                 <option>Black or African American</option>
//                 <option>Hispanic</option>
//                 <option>American Indian or Alaskan Native</option>
//                 <option>Native Hawaiian or other Pacific Islander</option>
//                 <option>Other</option>
//                 </select>
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Register
//             </button>
//             </form>
//         </div>
//         </div>
//     </div>
//     );
// }
// export default SignupForm;

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
    const navigate = useNavigate;

    const handleFirstChange = (event) => {
        const value = event.target.value;
        setFirst(value);
    }
    const handleLastChange = (event) => {
        const value = event.target.value;
        setLast(value);
    }
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    }
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handleAgeChange = (event) => {
        const value = event.target.value;
        setAge(value);
    }
    const handleGenderChange = (event) => {
        const value = event.target.value;
        setGender(value);
    }
    const handleRaceChange = (event) => {
        const value = event.target.value;
        setRace(value);
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const accountData = {
            first: first,
            last: last,
            hashed_password: password,
            email: email,
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
    <div className="bg-gray-200 py-8">
        <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Create an account!</h1>
            <form onSubmit={(e) => handleSignup(e)}>
            <div className="mb-4">
                <input
                onChange={handleFirstChange}
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
                onChange={handleLastChange}
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
                onChange={handlePasswordChange}
                placeholder="Password"
                required
                type="password"
                name="hashed_password"
                id="hashed_password"
                className="form-input"
                value={password}
                />
            </div>
            <div className="mb-4">
                <input
                onChange={handleEmailChange}
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
                onChange={handleAgeChange}
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
                onChange={handleGenderChange}
                placeholder="Gender"
                name="gender"
                id="gender"
                className="form-select"
                value={gender}>
                <option>Male</option>
                <option>Female</option>
                <option>None of the above</option>
                <option>Do not want to share</option>
                </select>
            </div>
            <div className="mb-4">
                <select
                onChange={handleRaceChange}
                placeholder="Race"
                name="race"
                id="race"
                className="form-select"
                value={race}>
                <option>Asian</option>
                <option>White</option>
                <option>Black or African American</option>
                <option>Hispanic</option>
                <option>American Indian or Alaskan Native</option>
                <option>Native Hawaiian or other Pacific Islander</option>
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
}
export default SignupForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '@galvanize-inc/jwtdown-for-react';

const SignupForm = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const { register } = useToken();
  const navigate = useNavigate();
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

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

    register(accountData, `${process.env.REACT_APP_MRQ_SERVICE}/api/accounts`);
    e.target.reset();
    navigate('/dashboard');
  };

    return (
    <div className="py-20" style={{ backgroundColor: '#e7f9f4'}}>
        <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded shadow" style={{ backgroundColor: '#c5f2e6' }}>
            <h1 className="text-2xl font-bold mb-4">Create an account!</h1>
          {!passwordsMatch && (
            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-bottom">
              <p>Passwords do not match, please try again</p>
            </div>
          )}
            <form onSubmit={(e) => handleSignup(e)}>
            <div className="mb-4">
              <input
                onChange={(e) => {
                  setFirst(e.target.value);
                }}
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
                onChange={(e) => {
                  setLast(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                required
                type="password"
                name="password"
                id="password"
                className="form-input"
                value={password}
              />
              <p className="text-xs text-indigo-500 mt-1">
                Password must contain at least 8 characters, 1 capital letter, 1 number, and 1 special character (! @ # $ % & *)
              </p>
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm Password"
                required
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-input"
                value={confirmPassword}
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setAge(e.target.value);
                }}
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
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                placeholder="Gender"
                name="gender"
                id="gender"
                className="form-select"
                value={gender}
              >
                <option value="">Choose an option</option>
                <option>Male</option>
                <option>Female</option>
                <option>None of the above</option>
                <option>Do not want to share</option>
              </select>
            </div>
            <div className="mb-4">
              <select
                onChange={(e) => {
                  setRace(e.target.value);
                }}
                placeholder="Race"
                name="race"
                id="race"
                className="form-select"
                value={race}
              >
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

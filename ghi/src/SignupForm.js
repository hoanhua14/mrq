import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '@galvanize-inc/jwtdown-for-react';
import StyledButton from './ReactComponents/button';

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
  const [passwordRequirements, setPasswordRequirements] = useState(true);


  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    const passwordRequirement = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,}$/;
    if (!passwordRequirement.test(password)) {
      setPasswordRequirements(false);
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
    <div className="flex justify-center items-center h-screen bg-[url(https://i.imgur.com/6tXuiW2.png)] bg-cover bg-center bg-no-repeat">
      <div className="bg-white p-12 rounded-lg shadow-lg" style={{ backgroundColor: '#c5f2e6' }}>
        <h1 className="text-2xl font-bold mb-4">Create an account!</h1>
        {!passwordsMatch && (
          <div className="flex p-4 mb-4 text-sm text-red-800 shadow-lg rounded-lg bg-purple-100 dark:text-red-400" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Danger</span>
            <div>
              <span className="font-medium">Passwords don't match, try again!</span>
            </div>
          </div>
          )}
        {!passwordRequirements && (
          <div className="flex p-4 mb-4 text-sm text-red-800 shadow-lg rounded-lg bg-purple-100 dark:text-red-400" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Danger</span>
            <div>
              <span className="font-medium">Password requires at least:</span>
                <ul className="mt-1.5 ml-4 -indent-5 list-disc list-inside">
                  <li>At least 8 characters</li>
                  <li>1 capital letter</li>
                  <li>1 number</li>
                  <li>1 special character (! @ # $ % & *)</li>
              </ul>
            </div>
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
              min="0"
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
              required
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
              required
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
          <StyledButton text="Register">
            Register
          </StyledButton>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

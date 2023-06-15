import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useToken from '@galvanize-inc/jwtdown-for-react';
import StyledButton from './ReactComponents/button';
import Lottie from "lottie-react"
import exercise from "./LottieImages/exercise.json"

function ExerciseForm() {
    const { token } = useToken();
    const navigation=useNavigate();
    const [minutes, setMinutes] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.minutes = minutes;
        data.date = date;
        data.category = category;

        const exerciseURL = `${process.env.REACT_APP_MRQ_SERVICE}/api/exercise`
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                 Authorization : `Bearer ${token}`,
            },
        };

        const response = await fetch(exerciseURL, fetchConfig);
        if (response.ok) {
            setMinutes('')
            setDate('');
            setCategory('')
            navigation('/dashboard')
        }
    }

    return (

                <div style={{ backgroundColor: '#e7f9f4'}} className="min-h-screen flex justify-center items-center">
                                <div  style={{width: "30%"}}>
                                <Lottie animationData={exercise}/>
                                </div>
                    <div className="row">
                        <div className="offset-3 md:flex md:flex-wrap md:justify-center " >
                            <div className="shadow p-4 mt-4" style={{ backgroundColor: '#c5f2e6' }}>
                            <h1 className="font-bold" >Log Exercise Session</h1>
                            <form onSubmit={handleSubmit} id="create-exercise-form">
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                <label htmlFor="minutes">Minutes</label>
                                <input
                                    onChange={e => setMinutes(e.target.value)}
                                    placeholder="Mins"
                                    required
                                    type="text"
                                    id="minutes"
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    value={minutes}
                                />
                                </div>
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                <label htmlFor="date">Date</label>
                                <input
                                    onChange={e => setDate(e.target.value)}
                                    placeholder="Date"
                                    required
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    value={date}
                                />
                                </div>
                                <div className="mb-3 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                <select
                                    onChange={e => setCategory(e.target.value)}
                                    required id="category"
                                    className="form-select"
                                    value={category}
                                >
                                    <option value="">Pick a category</option>
                                    <option>Run</option>
                                    <option>Swim</option>
                                    <option>Walk</option>
                                </select>
                                </div>
                                <StyledButton text="Submit" type="submit">
                                Submit
                                </StyledButton>
                            </form>
                            </div>

                        </div>
                        </div>
        </div>
)
}
export default ExerciseForm

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useToken from '@galvanize-inc/jwtdown-for-react';

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
        console.log(document.cookie)
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
            navigation('/exercise')
        }
    }

    return (
        <>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Log Exercise Session</h5>

            <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="minutes">
                Minutes
            </label>
            <input value={minutes} onChange={e => setMinutes(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="minutes" required type="text" placeholder="Mins"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="date">
                Date
            </label>
            <input value={date} onChange={e => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="date" required type="date" placeholder=""/>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                Category
            </label>
            <div className="relative">
                <select value={category} onChange={e => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required id="category" name="category">
                <option value="">Click!</option>
                <option>Run</option>
                <option>Swim</option>
                <option>Walk</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                </div>
            </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
            </div>
        </form>
        </div>
        </>
)
}
export default ExerciseForm

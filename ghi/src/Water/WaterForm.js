import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useToken from '@galvanize-inc/jwtdown-for-react';

function WaterForm() {
    const navigation=useNavigate();
    const { token } = useToken();
    const [ounces, setOunces] = useState('')
    const [date, setDate] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.ounces = ounces;
        data.date = date;

        const waterURL = `${process.env.REACT_APP_MRQ_SERVICE}/api/water`
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
        };

        const response = await fetch(waterURL, fetchConfig);
        if (response.ok) {
            setOunces('')
            setDate('');
            navigation('/dashboard')
        }
    }

    return (
        <>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Log Water Intake</h5>

            <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Ounces">
                Fluid Oz.
            </label>
            <input value={ounces} onChange={e => setOunces(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="ounces" required type="text" placeholder="Ounces"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="date">
                Date
            </label>
            <input value={date} onChange={e => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="date" required type="date" placeholder="Date"/>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
            </div>
        </form>
        </div>
        </>
)
}
export default WaterForm

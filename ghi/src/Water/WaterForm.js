import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useToken from '@galvanize-inc/jwtdown-for-react';
import StyledButton from '../ReactComponents/button';
import Lottie from "lottie-react";
import bottle from "./lottieanimation/bottle.json"

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
                <div style={{ backgroundColor: '#e7f9f4'}} className="min-h-screen flex justify-center items-center">
                    <div  style={{width: "30%"}}>
                    <Lottie animationData={bottle}/>
                    </div>
                    <div className="row">

                        <div className="offset-3 md:flex md:flex-wrap md:justify-center " >
                            <div className="shadow p-4 mt-4" style={{ backgroundColor: '#c5f2e6' }}>
                            <h1 className="font-bold" >Log Water Intake</h1>
                            <form onSubmit={handleSubmit} id="create-water-form">
                                <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                                <label htmlFor="Ounces">Fluid Oz.</label>
                                <input
                                    onChange={e => setOunces(e.target.value)}
                                    placeholder="Ounces"
                                    required
                                    type="text"
                                    id="ounces"
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    value={ounces}
                                />
                                </div>
                                <div className="mb-3 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                <label htmlFor="date">
                                    <span className="text-xs font-medium text-gray-700">Date</span>
                                    <input
                                    onChange={e => setDate(e.target.value)}
                                    value={date}
                                    required
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />
                                </label>
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
export default WaterForm

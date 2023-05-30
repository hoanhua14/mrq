import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../ReactComponents/button";
import useToken from "@galvanize-inc/jwtdown-for-react";

function SleepForm() {
    const { token } = useToken();
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const [quality, setQuality] = useState('');
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
    }

    const handleHoursChange = (event) => {
        const value = event.target.value;
        setHours(value);
    }

    const handleQualityChange = (event) => {
        const value = event.target.value;
        setQuality(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.date = date;
        data.hours = hours;
        data.quality = quality;
        console.log(data);

        const sleepUrl = `${process.env.REACT_APP_MRQ_SERVICE}/api/sleep`
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`,
            },
        };

        const response = await fetch(sleepUrl, fetchConfig);
        if (response.ok) {
            setDate('');
            setHours('');
            setQuality('');
            navigate('/sleep/all');
        }
    }

    return (
        <div style={{ backgroundColor: '#e7f9f4'}} className="min-h-screen">
          <div className="row">

              <div className="offset-3 md:flex md:flex-wrap md:justify-center " >
                <div className="shadow p-4 mt-4" style={{ backgroundColor: '#c5f2e6' }}>
                  <h1 className="font-bold" >Log Sleep</h1>
                  <form onSubmit={handleSubmit} id="create-sleep-form">
                    <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3">
                      <label htmlFor="date">Date</label>
                      <input
                        onChange={handleDateChange}
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
                      <label htmlFor="hours">
                        <span className="text-xs font-medium text-gray-700">Hours</span>
                        <input
                          onChange={handleHoursChange}
                          value={hours}
                          required
                          type="number"
                          id="hours"
                          name="hours"
                          className="form-control mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                      </label>
                    </div>
                    <div className="mb-3 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                      <select
                        onChange={handleQualityChange}
                        required
                        name="quality"
                        id="quality"
                        className="form-select"
                        value={quality}
                      >
                        <option value="">Rate your sleep</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
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
    );
}
export default SleepForm

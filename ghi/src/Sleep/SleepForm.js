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
            navigate('/');
        }
    }

    return (
        <div className="container radiant-background">
          <div className="row">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
                <li>
                  <a href="/" className="block transition hover:text-gray-700">
                    <span className="sr-only"> Home </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </a>
                </li>

                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>

                <li>
                  <a href="/sleep/new" className="block transition hover:text-gray-700"> Log a sleep session </a>
                </li>

                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </ol>
            </nav>
              <div className="offset-3 col-6 " style={{ backgroundColor: '#e7f9f4'}}>
                <div className="shadow p-4 mt-4">
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

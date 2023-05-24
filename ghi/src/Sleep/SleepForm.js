import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../ReactComponents/button";

function SleepForm() {
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

        const sleepUrl = 'http://localhost:8000/api/sleep'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NmNhZjhlYy1jMTk1LTQ2MDEtODM3NS0wY2U3MDkxNmY4ZDIiLCJleHAiOjE2ODQ5NzI2NTYsInN1YiI6ImhvYW5AaHVhLmNvbSIsImFjY291bnQiOnsiaWQiOjEsImZpcnN0IjoiaG9hbiIsImxhc3QiOiJodWEiLCJlbWFpbCI6ImhvYW5AaHVhLmNvbSIsImFnZSI6MzAsImdlbmRlciI6IkZlbWFsZSIsInJhY2UiOiJBc2lhbiJ9fQ.7ctivj9vcgaU_GF4_KIF6eKnnU39boInV5yH-ZAqzi4',
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

        // useEffect(() => {
        //     fetchData();
        // }, []);


    return (

        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>New Sleep</h1>
              <form onSubmit={handleSubmit} id="create-sleep-form">

                <div className="form-floating mb-3">
                  <input onChange={handleDateChange} placeholder="Date" required type="date" name="date" id="date" className="form-control" value={date}/>
                  <label htmlFor="date">Date</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleHoursChange} placeholder="Hours" required type="text" name="hours" id="hours" className="form-control" value={hours}/>
                  <label htmlFor="hours">Hours</label>
                </div>
                <div className="mb-3">
                  <select onChange={handleQualityChange} required name="quality" id="quality" className="form-select" value={quality}>
                    <option value="">Rate your sleep</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                  </select>
                </div>
                <StyledButton text="Submit" type="submit">Submit</StyledButton>
              </form>
            </div>
          </div>
        </div>

    );
}
export default SleepForm

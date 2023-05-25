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
        console.log(sleepUrl);
        console.log(document.cookie);
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
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Log Sleep</h1>
              <form onSubmit={handleSubmit} id="create-sleep-form">

                <div className="form-floating mb-3">
                  <label htmlFor="date">Date</label>
                  <input onChange={handleDateChange} placeholder="Date" required type="date" name="date" id="date" className="form-control" value={date}/>
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="hours">Hours</label>
                  <input onChange={handleHoursChange} placeholder="Hours" required type="number" step="any" name="hours" id="hours" className="form-control" value={hours}/>
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
      </div>
    );
}
export default SleepForm

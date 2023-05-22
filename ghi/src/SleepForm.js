import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function SleepForm() {
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const [sleepQuality, setQuality] = useState('');
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
        data.sleepQuality = sleepQuality;

        const sleepUrl = "http://localhost:8000/sleep/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzODJmYzQ2MS1kNDNkLTQ2OTMtODI2ZS1kNzY1NjU4YTMzNGUiLCJleHAiOjE2ODQ4MDI5NjUsInN1YiI6ImhvYW5AaG9hbi5jb20iLCJhY2NvdW50Ijp7ImlkIjoxLCJmaXJzdCI6ImhvYW4iLCJsYXN0IjoiaHVhIiwiZW1haWwiOiJob2FuQGhvYW4uY29tIiwiYWdlIjoxMCwiZ2VuZGVyIjoiRmVtYWxlIiwicmFjZSI6IkFzaWFuIn19.THToWgTIrtSGB4GSSnO05e6Uq0VeFHjxdvs17b9GxD0',
            },
        };

        const response = await fetch(sleepUrl, fetchConfig)
        if (response.ok) {
            const newSleep = await response.json();
            console.log(newSleep);
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
                  <select onChange={handleQualityChange} required name="sleepQuality" id="sleepQuality" className="form-select" value={sleepQuality}>
                    <option value="">Rate your sleep</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                  </select>
                </div>
                <button className="btn btn-success">Log</button>
              </form>
            </div>
          </div>
        </div>

    );
}
export default SleepForm

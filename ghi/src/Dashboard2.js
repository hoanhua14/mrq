import React from "react";
import { useState, useEffect } from "react";
import useToken from '@galvanize-inc/jwtdown-for-react';
import { Link } from 'react-router-dom';
import DonutChart from './DonutChart';
import Calendar from './Calendar';

function Dashboard() {
  const { token } = useToken();
  const [exerciseTime, setExerciseTime] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const [waterOunce, setWaterOunce] = useState("");

  useEffect (() => {
    const fetchData = async () => {
      if (token) {
        const dashboardURL = `${process.env.REACT_APP_MRQ_SERVICE}/api/dashboard`;
        const fetchConfig = {
          method: "GET",
          headers: {
            Authorization : `Bearer ${token}`,
          },
    };
        const response = await fetch(dashboardURL, fetchConfig);
        if (response.ok) {
          const data = await response.json()
          setExerciseTime(data.exercise)
          setSleepTime(data.sleep)
          setWaterOunce(data.water)
        }
      }
    }
  fetchData();
  }, [token]);

  return (
    <>
    <div className="flex h-screen dashboard-height">
      <div className="bg-gray-100 flex flex-col w-1/5 ">
        <h1 className="text-center text-5xl text-black pt-8 dashboard-font">Dashboard</h1>
        <ul className="flex-1 flex flex-col justify-center">
          <li className="text-center py-2 px-4 hover:bg-gray-200 text-5xl font-bold mb-10"><Link to="/exercise">Move</Link></li>
          <li className="text-center py-2 px-4 hover:bg-gray-200 text-5xl font-bold mb-10"><Link to="/sleep/all">Rest</Link></li>
          <li className="text-center py-2 px-4 hover:bg-gray-200 text-5xl font-bold mb-10"><Link to="/water">Quench</Link></li>
        </ul>
      </div>
      <div className="bg-white flex flex-col w-3/5 dashboard-border">
        <h1 className="text-center text-5xl text-black pt-8 dashboard-font ">Today's Overview</h1>
        <div className="flex-1 flex flex-wrap justify-center items-center">
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500 text-5xl font-bold mb-9">Exercise</h3>
                <p className="card-title text-center text-2xl">{exerciseTime} Minutes</p>
              </div>
              <div className="flex items-center justify-center mt-5 mb-5" >
                <DonutChart percentage={Math.round(exerciseTime / 60 * 100)} />
              </div>
              <Link to="/exercise/new">
                <img src="https://images.unsplash.com/photo-1504025468847-0e438279542c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXhlcmNpc2V8fHx8fHwxNjg0NzcwNjcz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Exercise"/>
                <p className="card-title text-center text-purple-500 border-2 border-green-500 text-2xl font-bold">Add a log</p>
              </Link>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500 text-5xl font-bold mb-9">Sleep</h3>
                <p className="card-title text-center text-2xl">{sleepTime} Hours</p>
              </div>
              <div className="flex items-center justify-center mt-5 mb-5" >
                <DonutChart percentage={Math.round(sleepTime / 8 * 100)} />
              </div>
              <Link to="/sleep/new">
                <img src="https://images.unsplash.com/photo-1512290793455-dd2f915493bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2xlZXB8fHx8fHwxNjg0NzcwNzI4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Sleep"/>
                <p className="card-title text-center text-purple-500 border-2 border-green-500 text-2xl font-bold">Add a log</p>
              </Link>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500 text-5xl font-bold mb-9">Water</h3>
                <p className="card-title text-center text-2xl">{waterOunce} Ounces</p>
              </div>
              <div className="flex items-center justify-center mt-5 mb-5" >
                <DonutChart percentage={Math.round(waterOunce / 60 * 100)} />
              </div>
              <Link to="/water/new">
                <img src="https://images.unsplash.com/photo-1650896064319-b83f56e3065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHJpbmtpbmctd2F0ZXJ8fHx8fHwxNjg0NzcwNTMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Water"/>
                <p className="card-title text-center text-purple-500 border-2 border-green-500 text-2xl font-bold">Add a log</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col w-1/5">
        <h1 className="text-center text-5xl text-black pt-8 dashboard-font">Today's Goals</h1>
        <div className="flex-1 flex flex-col justify-center">
          <h5 className="btn d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 w-40 text-center text-3xl">
            60 min exercise
          </h5>
          <h5 className="btn d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 w-40 text-center text-3xl">
            8 hours sleep
          </h5>
          <h5 className="btn d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 w-40 text-center text-3xl">
            100 oz water
          </h5>
          <div className="flex items-center justify-center mt-9 mb-5" >
                <Calendar />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;

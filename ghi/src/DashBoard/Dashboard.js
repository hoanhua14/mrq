import React from "react";
import { useState, useEffect } from "react";
import useToken from '@galvanize-inc/jwtdown-for-react';
import { Link } from 'react-router-dom';
import DonutChart from './DonutChart';
import Calendar from './Calendar';
import ExerciseIcon from './Exercise-icon.svg';

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
      <div className="bg-gray-100 flex flex-col w-1/5 dashboard-font-bold">
        <h1 className="text-center text-3xl text-black pt-9 dashboard-font-bold">Dashboard</h1>
        <ul className="flex-1 flex flex-col justify-center ">
          <li className="text-center py-2 px-4 hover:bg-violet-300 text-5xl font-bold mb-10 align-items:center">
            <Link to="/exercise">
              {/* <img src={ExerciseIcon} width="64" height="64" alt="Exercise Icon" style={{flex:"none"}}/> */}
            <span style={{flex:"none"}}>Move</span>
            </Link>
          </li>
          <li className="text-center py-2 px-4 hover:bg-violet-300 text-5xl font-bold mb-10"><Link to="/sleep/all">Rest</Link></li>
          <li className="text-center py-2 px-4 hover:bg-violet-300 text-5xl font-bold mb-10"><Link to="/water">Quench</Link></li>
        </ul>
      </div>
      <div className="bg-white flex flex-col w-3/5 dashboard-border">
        <h1 className="text-center text-3xl text-black pt-5 dashboard-font-bold ">Today's Overview</h1>
        <div className="flex-1 flex flex-wrap justify-center items-center">
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <div className="card-body dashboard-font-normal">
                <h3 className="card-title text-center text-blue-500 text-4xl mb-9 dashboard-font-bold">Exercise</h3>
                <p className="card-title text-center text-2xl">{exerciseTime} Minutes</p>
              </div>
              <div className="flex items-center justify-center mt-5 mb-5" >
                <DonutChart percentage={Math.round(exerciseTime / 60 * 100)} />
              </div>
              <div className="border-2 border-grey text-purple-500 rounded-lg overflow-hidden shadow-lg hover:bg-violet-300 hover:border-blue-500 hover:text-black">
                <Link to="/exercise/new">
                  <img src="https://images.unsplash.com/photo-1504025468847-0e438279542c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXhlcmNpc2V8fHx8fHwxNjg0NzcwNjcz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48" alt="Exercise"/>
                  <p className="card-title text-center text-2xl dashboard-font-normal">Add a log</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500 text-4xl mb-9 dashboard-font-bold">Sleep</h3>
                <p className="card-title text-center text-2xl">{sleepTime} Hours</p>
              </div>
              <div className="flex items-center justify-center mt-5 mb-5" >
                <DonutChart percentage={Math.round(sleepTime / 8 * 100)} />
              </div>
              <div className="border-2 border-grey text-purple-500 rounded-lg overflow-hidden shadow-lg hover:bg-violet-300 hover:border-blue-500 hover:text-black">
                <Link to="/sleep/new">
                  <img src="https://images.unsplash.com/photo-1512290793455-dd2f915493bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2xlZXB8fHx8fHwxNjg0NzcwNzI4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48" alt="Sleep"/>
                  <p className="card-title text-center text-2xl dashboard-font-normal">Add a log</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500 text-4xl mb-9 dashboard-font-bold">Water</h3>
                <p className="card-title text-center text-2xl">{waterOunce} Ounces</p>
              </div>
              <div className="flex items-center justify-center mt-5 mb-5" >
                <DonutChart percentage={Math.round(waterOunce / 100 * 100)} />
              </div>
              <div className="border-2 border-grey text-purple-500 rounded-lg overflow-hidden shadow-lg hover:bg-violet-300 hover:border-blue-500 hover:text-black">
                <Link to="/water/new">
                  <img src="https://images.unsplash.com/photo-1650896064319-b83f56e3065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHJpbmtpbmctd2F0ZXJ8fHx8fHwxNjg0NzcwNTMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48" alt="Water"/>
                  <p className="card-title text-center text-2xl dashboard-font-normal">Add a log</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col w-1/5 dashboard-font-normal">
        <h1 className="text-center text-3xl text-black pt-8 mb-1 dashboard-font-bold">Today's Goals</h1>
        <div className="flex-1 flex flex-col justify-center mb-5">
          <p className="btn d-block mx-auto mb-1 bg-purple-500 rounded-md text-white pt-7 pb-3 px-4 w-40">
            <span className="text-left text-4xl block leading-none" style={{lineHeight: '0.2'}}>60</span>
            <span className="text-right text-2xl block leading-none" style={{lineHeight: '0.2'}}>min</span><br/>
            <span className="text-right text-sm block leading-none" style={{lineHeight: '0.2'}}>exercise duration</span>
          </p>
          <p className="btn d-block mx-auto mb-1 bg-purple-500 rounded-md text-white pt-7 pb-3 px-4 w-40">
            <span className="text-left text-4xl block leading-none" style={{lineHeight: '0.2'}}>8</span>
            <span className="text-right text-2xl block leading-none" style={{lineHeight: '0.2'}}>hours</span><br/>
            <span className="text-right text-sm block leading-none" style={{lineHeight: '0.2'}}>nighttime sleep</span>
          </p>
          <p className="btn d-block mx-auto mb-1 bg-purple-500 rounded-md text-white pt-7 pb-3 px-4 w-40">
            <span className="text-left text-4xl block leading-none" style={{lineHeight: '0.2'}}>100</span>
            <span className="text-right text-2xl block leading-none" style={{lineHeight: '0.2'}}>Oz</span><br/>
            <span className="text-right text-sm block leading-none" style={{lineHeight: '0.2'}}>water intake</span>
          </p>
        </div>
        <div className="flex items-center justify-center mt-12" >
                <Calendar />
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;

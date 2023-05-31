import React from "react";
import { useState, useEffect } from "react";
import useToken from '@galvanize-inc/jwtdown-for-react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';

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


  (async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('myChart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();


  return (
    <>
    <div className="flex h-screen">
      <div className="bg-gray-100 flex flex-col w-1/5">
        <h1 className="text-center py-3 text-2xl">Dashboard</h1>
        <ul className="flex-1 flex flex-col justify-center">
          <li className="text-center py-2 px-4 hover:bg-gray-200"><Link to="/exercise">Move</Link></li>
          <li className="text-center py-2 px-4 hover:bg-gray-200"><Link to="/sleep/all">Rest</Link></li>
          <li className="text-center py-2 px-4 hover:bg-gray-200"><Link to="/water">Quench</Link></li>
        </ul>
      </div>
      <div className="bg-white flex flex-col w-3/5">
        <h1 className="text-center py-3 text-2xl">Today's Overview</h1>
        <div className="flex-1 flex flex-wrap justify-center items-center">
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1504025468847-0e438279542c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXhlcmNpc2V8fHx8fHwxNjg0NzcwNjcz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Exercise"/>
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500">Exercise</h3>
                <h5 className="card-title text-center">{exerciseTime} Minutes</h5>
                <h5 className="card-title text-center text-purple-500 border-2 border-green-500"><Link to="/exercise/new">Add a log</Link></h5>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1650896064319-b83f56e3065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHJpbmtpbmctd2F0ZXJ8fHx8fHwxNjg0NzcwNTMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Water"/>
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500">Water</h3>
                <h5 className="card-title text-center">{waterOunce} Ounces</h5>
                <h5 className="card-title text-center text-purple-500 border-2 border-green-500"><Link to="/water/new">Add a log</Link></h5>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1512290793455-dd2f915493bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2xlZXB8fHx8fHwxNjg0NzcwNzI4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Sleep"/>
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500">Sleep</h3>
                <h5 className="card-title text-center">{sleepTime} Hours</h5>
                <h5 className="card-title text-center text-purple-500 border-2 border-green-500"><Link to="/sleep/new">Add a log</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col w-1/5">
        <h1 className="text-center py-3 text-2xl">Today's Goals</h1>
        <div className="flex-1 flex flex-col justify-center">
          <h5 className="btn btn-secondary d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 hover:bg-purple-600 shadow-sm">
            <button className="mr-2" onClick={() => setExerciseTime(exerciseTime - 1)}>-</button>
            {exerciseTime} min exercise
            <button className="ml-2" onClick={() => setExerciseTime(exerciseTime + 1)}>+</button>
          </h5>
          <h5 className="btn btn-secondary d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 hover:bg-purple-600 shadow-sm">
            <button className="mr-2" onClick={() => setSleepTime(sleepTime - 1)}>-</button>
            {sleepTime} hours sleep
            <button className="ml-2" onClick={() => setSleepTime(sleepTime + 1)}>+</button>
          </h5>
          <h5 className="btn btn-secondary d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 hover:bg-purple-600 shadow-sm">
            <button className="mr-2" onClick={() => setWaterOunce(waterOunce - 1)}>-</button>
            {waterOunce} Oz water
            <button className="ml-2" onClick={() => setWaterOunce(waterOunce + 1)}>+</button>
          </h5>
        </div>
        <div>
          <canvas id="myChart"></canvas>
        </div>
        {/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> */}

        {/* <script>
          const ctx = document.getElementById('myChart');

          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        </script> */}

      </div>
    </div>
    </>
  );
}

export default Dashboard;

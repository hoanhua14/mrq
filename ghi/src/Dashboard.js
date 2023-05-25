import React from "react";
import { useState } from "react";


function Dashboard() {
  const [exerciseTime, setExerciseTime] = useState(60);
  const [sleepTime, setSleepTime] = useState(8);
  const [waterOunce, setWaterOunce] = useState(60);

  return (
    <>
    <div className="flex h-screen">
      <div className="bg-gray-100 flex flex-col w-1/5">
        <h1 className="text-center py-3 text-2xl">Dashboard</h1>
        <ul className="flex-1 flex flex-col justify-center">
          <li className="text-center py-2 px-4 hover:bg-gray-200"><a href="http://localhost:3000/exercise">Move</a></li>
          <li className="text-center py-2 px-4 hover:bg-gray-200"><a href="http://localhost:3000/water">Rest</a></li>
          <li className="text-center py-2 px-4 hover:bg-gray-200"><a href="http://localhost:3000/sleep/all">Quench</a></li>
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
                <h5 className="card-title text-center">55 minutes</h5>
                <h5 className="card-title text-center text-purple-500 border-2 border-green-500"><a href="http://localhost:3000/exercise/new">Add a log</a></h5>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1650896064319-b83f56e3065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHJpbmtpbmctd2F0ZXJ8fHx8fHwxNjg0NzcwNTMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Water"/>
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500">Water</h3>
                <h5 className="card-title text-center">60 Oz</h5>
                <h5 className="card-title text-center text-purple-500 border-2 border-green-500"><a href="http://localhost:3000/water/new">Add a log</a></h5>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-1/3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1512290793455-dd2f915493bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2xlZXB8fHx8fHwxNjg0NzcwNzI4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="card-img-top object-cover w-full h-48 rounded-lg" alt="Sleep"/>
              <div className="card-body">
                <h3 className="card-title text-center text-blue-500">Sleep</h3>
                <h5 className="card-title text-center">8 Hours</h5>
                <h5 className="card-title text-center text-purple-500 border-2 border-green-500"><a href="http://localhost:3000/sleep/new">Add a log</a></h5>
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
      </div>
    </div>
    </>
  );
}

export default Dashboard;

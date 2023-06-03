import React from "react";
import { useState, useEffect } from "react";
import Calendar from './Calendar';
import ExerciseIcon from './Exercise-icon.svg';
import Overview from './Overview';
import ExerciseList from '../ListExercise';
import SleepList from '../Sleep/SleepList';
import WaterList from '../Water/ListWater';


function Dashboard() {
  const [overviewVisible, setOverviewVisible] = useState(true);
  const [exerciseListVisible, setExerciseListVisible] = useState(false);
  const [sleepListVisible, setSleepListVisible] = useState(false);
  const [waterListVisible, setWaterListVisible] = useState(false);


  const handleOverviewClick = () => {
    setOverviewVisible(true);
    setExerciseListVisible(false);
    setSleepListVisible(false);
    setWaterListVisible(false);
  };

  const handleMoveClick = () => {
    setOverviewVisible(false);
    setExerciseListVisible(true);
    setSleepListVisible(false);
    setWaterListVisible(false);
  };

  const handleSleepClick = () => {
    setOverviewVisible(false);
    setExerciseListVisible(false);
    setSleepListVisible(true);
    setWaterListVisible(false);
  };

  const handleWaterClick = () => {
    setOverviewVisible(false);
    setExerciseListVisible(false);
    setSleepListVisible(false);
    setWaterListVisible(true);
  };



  return (
    <>
    <div className="flex h-screen dashboard-height">
      <div className="bg-gray-100 flex flex-col w-1/5 dashboard-font-bold">
        <h1 className="text-center text-3xl text-black pt-9 dashboard-font-bold">Dashboard</h1>
        <div className="flex-1 flex flex-col justify-center mx-auto">
          <p className="text-center py-2 px-4 hover:bg-violet-300 text-5xl font-bold mb-10" onClick={handleOverviewClick}>Overview</p>
          <div className="grid place-content-center gap-1 md:grid-cols-2 hover:bg-violet-300 hover:border-blue-500">
            <div className="hidden md:inline-flex my-10 md:ml-14 w-full justify-center items-center " onClick={handleMoveClick}>
                <img src={ExerciseIcon} width="64" height="64" alt="centered image" className="object-center" />
                <p className="text-5xl" >Move</p>
            </div>
          </div>
          <p className="text-center py-2 px-4 hover:bg-violet-300 text-5xl font-bold mb-10" onClick={handleSleepClick}>Rest</p>
          <p className="text-center py-2 px-4 hover:bg-violet-300 text-5xl font-bold mb-10" onClick={handleWaterClick}>Quench</p>
        </div>
      </div>
      {overviewVisible ? (
        <Overview />
      ) : (
        <div></div>
      )}
      {exerciseListVisible ? (
        <div className="bg-white flex flex-col w-3/5 pl-3 pr-3 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Exercise Log</h1>
          <ExerciseList />
        </div>
      ) : (
        <div></div>
      )}
      {sleepListVisible ? (
        <div className="bg-white flex flex-col w-3/5 pl-3 pr-3 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Sleep Log</h1>
          <SleepList />
        </div>
      ) : (
        <div></div>
      )}
      {waterListVisible ? (
        <div className="bg-white flex flex-col w-3/5 pl-3 pr-3 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Water Intake Log</h1>
          <WaterList />
        </div>
      ) : (
        <div></div>
      )}
      <div className="bg-gray-100 flex flex-col w-1/5 dashboard-font-normal">
        <h1 className="text-center text-3xl text-black pt-8 mb-1 dashboard-font-bold">Today's Goals</h1>
        <div className="flex-1 flex flex-col justify-center mb-5">
          <p className="btn d-block mx-auto mb-0.5 bg-purple-500 rounded-md text-white pt-7 pb-3 px-4 w-40">
            <span className="text-left text-4xl block leading-none" style={{lineHeight: '0.2'}}>60</span>
            <span className="text-right text-2xl block leading-none" style={{lineHeight: '0.2'}}>min</span><br/>
            <span className="text-right text-sm block leading-none" style={{lineHeight: '0.2'}}>exercise duration</span>
          </p>
          <p className="btn d-block mx-auto mb-0.5 bg-purple-500 rounded-md text-white pt-7 pb-3 px-4 w-40">
            <span className="text-left text-4xl block leading-none" style={{lineHeight: '0.2'}}>8</span>
            <span className="text-right text-2xl block leading-none" style={{lineHeight: '0.2'}}>hours</span><br/>
            <span className="text-right text-sm block leading-none" style={{lineHeight: '0.2'}}>nighttime sleep</span>
          </p>
          <p className="btn d-block mx-auto mb-0.5 bg-purple-500 rounded-md text-white pt-7 pb-3 px-4 w-40">
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

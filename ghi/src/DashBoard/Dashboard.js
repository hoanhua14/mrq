import React from "react";
import { useState } from "react";
import Calendar from './Calendar';
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
    <div className="flex h-screen dashboard-height dashboard-background">
      <div className="bg-white flex flex-col w-1/5 dashboard-font-bold">
        <h1 className="text-center text-3xl text-black pt-9 dashboard-font-bold">Dashboard</h1>
        <div className="flex-1 flex flex-col justify-center mx-auto">
          <button className="text-center py-2 px-4 text-5xl font-bold mb-10 dashboard-button" onClick={handleOverviewClick}>Overview</button>
          <button className="text-center py-2 px-4 text-5xl font-bold mb-10 dashboard-button" onClick={handleMoveClick}>Move</button>
          <button className="text-center py-2 px-4 text-5xl font-bold mb-10 dashboard-button" onClick={handleSleepClick}>Rest</button>
          <button className="text-center py-2 px-4 text-5xl font-bold mb-10 dashboard-button" onClick={handleWaterClick}>Quench</button>
        </div>
      </div>
      {overviewVisible ? (
        <div className="flex flex-col w-3/5 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Today's Overview</h1>
          <Overview />
        </div>
      ) : (
        <div></div>
      )}
      {exerciseListVisible ? (
        <div className="flex flex-col w-3/5 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Exercise Log</h1>
          <ExerciseList />
        </div>
      ) : (
        <div></div>
      )}
      {sleepListVisible ? (
        <div className="flex flex-col w-3/5 pl-3 pr-3 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Sleep Log</h1>
          <SleepList />
        </div>
      ) : (
        <div></div>
      )}
      {waterListVisible ? (
        <div className="flex flex-col w-3/5 pl-3 pr-3 dashboard-border">
          <h1 className="text-center text-3xl text-black pt-5 pb-5 dashboard-font-bold ">Water Intake Log</h1>
          <WaterList />
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col w-1/5 dashboard-font-normal pb-10 dashboard-background">
        <h1 className="text-center text-3xl text-black mb-10 pt-8 dashboard-font-bold">Today's Goals</h1>
        <div className="flex flex-col justify-center my-auto mx-auto w-60 rounded-lg dashboard-goal">
          <p className="mx-auto mb-0.5 pt-9 pb-3 px-1 w-40 text-center">
            <span className="text-4xl block leading-none" style={{lineHeight: '0.2'}}>60 min</span><br/>
            <span className="text-sm block leading-none dashboard-goal-line" style={{lineHeight: '0.2'}}>exercise duration</span>
          </p>
          <p className="mx-auto mb-0.5 pt-7 pb-3 px-1 w-40 text-center">
            <span className="text-center text-4xl block leading-none" style={{lineHeight: '0.2'}}>8 hours</span><br/>
            <span className="text-center text-sm block leading-none dashboard-goal-line" style={{lineHeight: '0.2'}}>nighttime sleep</span>
          </p>
          <p className="mx-auto mb-0.5 pt-7 pb-9 px-1 w-40 text-center">
            <span className="text-center text-4xl block leading-none" style={{lineHeight: '0.2'}}>100 Oz</span><br/>
            <span className="text-center text-sm block leading-none" style={{lineHeight: '0.2'}}>water intake</span>
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

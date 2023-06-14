
import React, { useState } from "react";
import StyledButton from "../ReactComponents/button";

function SleepCalculator() {
  const [bedTime, setBedTime] = useState("");
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [idealWakeUpTimes, setIdealWakeUpTimes] = useState([]);
  const [idealBedTimes, setIdealBedTimes] = useState([]);

  const handleBedTimeChange = (event) => {
    setBedTime(event.target.value);
  };

  const handleWakeUpTimeChange = (event) => {
    setWakeUpTime(event.target.value);
  };

  const calculateIdealWakeUpTimes = () => {
    const bedTimeHours = parseFloat(bedTime);
    const wakeUpTime2 = (bedTimeHours + 7.75) % 24;
    const wakeUpTime3 = (bedTimeHours + 6.25) % 24;
    const wakeUpTime4 = (bedTimeHours + 4.75) % 24;

    const formatTime = (time) => {
      const hours = Math.floor(time);
      const minutes = Math.floor((time % 1) * 60).toString().padStart(2, "0");
      const meridiem = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12) || 12;
      return `${formattedHours}:${minutes}${meridiem}`;
    };

    const idealTimes = [
      formatTime(wakeUpTime2),
      formatTime(wakeUpTime3),
      formatTime(wakeUpTime4),
    ];


    const resultSentence = `The average human takes 15 minutes to fall asleep.\nTo wake up refreshed, you need to wake up at one of the following times:`;

    setIdealWakeUpTimes([resultSentence, ...idealTimes, "If you wake up at one of these times, you'll rise in between 90-minute sleep cycles.\nA good night's sleep consists of 5-6 complete sleep cycles."]);
};

  const calculateIdealBedTimes = () => {
    const wakeUpHours = parseFloat(wakeUpTime);
    const bedTime1 = (wakeUpHours - 7.75 + 24) % 24;
    const bedTime2 = (wakeUpHours - 6.25 + 24) % 24;
    const bedTime3 = (wakeUpHours - 4.75 + 24) % 24;

    const formatTime = (time) => {
      const hours = Math.floor(time);
      const minutes = Math.floor((time % 1) * 60).toString().padStart(2, "0");
      const meridiem = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12) || 12;
      return `${formattedHours}:${minutes}${meridiem}`;
    };

    const idealTimes = [
      formatTime(bedTime1),
      formatTime(bedTime2),
      formatTime(bedTime3),
    ];


    const resultSentence = `The average human takes 15 minutes to fall asleep.\nTo wake up refreshed, you need to sleep at one of the following times:`;

    setIdealBedTimes([resultSentence, ...idealTimes, "If you wake up at one of these times, you'll rise in between 90-minute sleep cycles.\nA good night's sleep consists of 5-6 complete sleep cycles."]);
  };


// return (
//   <div className="flex flex-col items-center justify-center h-screen bg-[url(https://i.imgur.com/6tXuiW2.png)] bg-cover bg-center bg-no-repeat">
//     <form
//       className="bg-white p-8 rounded shadow-lg"
//       onSubmit={(event) => event.preventDefault()} // Prevent form submission from refreshing the page
//     >
//       <div className="mb-4 flex flex-col items-center justify-center">
//         <label htmlFor="bedTime" className="block mb-2 font-bold">What time are you planning to go to bed?</label>
//         <input
//           type="time"
//           id="bedTime"
//           value={bedTime}
//           onChange={handleBedTimeChange}
//           className=" p-2 border border-gray-300 rounded"
//         />
//       </div>
//       <StyledButton text="Calculate" onClick={calculateIdealWakeUpTimes} />

//       {idealWakeUpTimes.length > 0 && (
//         <div className="mt-4">
//           <h4 className="font-bold">Ideal Wake Up Times:</h4>
//           <ul>
//             {idealWakeUpTimes.map((time, index) => (
//               <li key={index}>{time}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="mt-8">
//         <label htmlFor="wakeUpTime" className="block mb-2 font-bold">What time do you want to wake up?</label>
//         <input
//           type="time"
//           id="wakeUpTime"
//           value={wakeUpTime}
//           onChange={handleWakeUpTimeChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>
//       <StyledButton text="Calculate" onClick={calculateIdealBedTimes} />

//       {idealBedTimes.length > 0 && (
//         <div className="mt-4">
//           <h4 className="font-bold">Ideal Bed Times:</h4>
//           <ul>
//             {idealBedTimes.map((time, index) => (
//               <li key={index}>{time}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </form>
//   </div>
// );
return (
  <div className="flex justify-center items-center h-screen bg-[url(https://i.imgur.com/6tXuiW2.png)] bg-cover bg-center bg-no-repeat">
    <form
        style={{ backgroundColor: '#e7f9f4'}}
      className=" p-8 rounded shadow-lg"
      onSubmit={(event) => event.preventDefault()} // Prevent form submission from refreshing the page
    >
      <div className="mb-4 flex flex-col items-center justify-center">
        <label htmlFor="bedTime" className="block mb-2 font-bold">What time are you planning to go to bed?</label>
        <input
          type="time"
          id="bedTime"
          value={bedTime}
          onChange={handleBedTimeChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-center">
      <StyledButton text="Calculate" onClick={calculateIdealWakeUpTimes} />
      </div>

        {idealWakeUpTimes.length > 0 && (
        <div className="mt-4 flex flex-col items-center justify-center">
            <h4 className="font-bold ">Ideal Wake Up Times:</h4>
            <ul className="flex flex-col items-center justify-center">
            {idealWakeUpTimes.map((time, index) => (
                <li key={index}>{time}</li>
            ))}
            </ul>
        </div>
        )}


      <div className="mt-8 flex flex-col items-center justify-center">
        <label htmlFor="wakeUpTime" className="block mb-2 font-bold">What time do you want to wake up?</label>
        <input
          type="time"
          id="wakeUpTime"
          value={wakeUpTime}
          onChange={handleWakeUpTimeChange}
          className=" p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-center mt-4">
        <StyledButton text="Calculate" onClick={calculateIdealBedTimes} />
    </div>

      {idealBedTimes.length > 0 && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <h4 className="font-bold">Ideal Bed Times:</h4>
          <ul className="flex flex-col items-center justify-center">
            {idealBedTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  </div>
);



}

export default SleepCalculator;

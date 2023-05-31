import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "User Gain",
      data: [0, 10, 5, 2, 20, 30, 45],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "User Lost",
      data: [823, 345, 555, 4555, 234],
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Dashboard = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;

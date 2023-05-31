import React from 'react';
// import { useState } from "react";
import Chart from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'



const Dashboard = () => {

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      // hoverOffset: 4
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Donut Chart',
    },
    tooltips: {
      enabled: true,
    },
    legend: {
      display: true,
    },
    plugins: {
      beforeDraw: function(chart) {
        console.log('beforeDraw function called');
        var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "Water",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  };

  console.log(options);
  return (
    <>
      <div>
        <Doughnut
          data={data}
          options={options}
        />
    </div>
  </>
  )
}

export default Dashboard

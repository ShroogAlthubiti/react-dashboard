import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true, 
      text: "Your Expenses",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Amount of mony ypu spent",
      data: [1500, 2022, 1400, 930.1, 3000, 1500, 4000],
      borderColor: "#FF8C8C",
      backgroundColor: "black",
    },
  ],
};
function Chart() {
  return (

      <Line options={options} data={data} />
   
  );
}

export default Chart;

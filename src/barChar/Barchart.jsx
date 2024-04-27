import React from 'react';
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };
  
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Product A",
        data: [20, 30, 40, 50, 60, 70],
        backgroundColor: "green",
      },
      {
        label: 'Product B',
        data: [15, 20, 25, 40, 45, 60],
        backgroundColor: 'blue'
      },
    ],
  };

  return (
    <div className="App">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Barchart;

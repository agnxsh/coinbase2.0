import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import React from "react";

const ldata = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      borderColor: "#3773f5",
      backgroundColor: "#000957",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3773f5",
      pointHoverBorderColor: "#3773f5",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 80, 23, 32, 56, 48, 75, 78, 87, 59],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line
        type="line"
        data={ldata}
        options={options}
        width={400}
        height={150}
      />
    </Wrapper>
  );
};

export default BalanceChart;

const Wrapper = styled.div``;

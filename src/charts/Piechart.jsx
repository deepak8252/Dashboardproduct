import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
  colors:["rgb(3, 90, 252)","rgb(252, 3, 123)","rgb(3, 248, 25)"]
};

export function Piechart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="270px"
      data={data}
      options={options}
    />
  );
}

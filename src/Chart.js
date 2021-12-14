import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    current: 4000,
    previous: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    current: 3000,
    previous: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    current: 2000,
    previous: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    current: 2780,
    previous: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    current: 1890,
    previous: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    current: 2390,
    previous: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    current: 3490,
    previous: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="97%" height="30%">
        <LineChart width={500} height={100} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="current" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

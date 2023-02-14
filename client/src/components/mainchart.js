import React, { PureComponent } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
}from 'recharts';

const data = [
    {
      name: 'time',
      pass: 0,
      nonpass: 0,
    },
    {
      name: ' ',
      pass: 2000,
      nonpass: 20,
    },
    {
      name: ' ',
      pass: 3000,
      nonpass: 100,
    },
    {
      name: ' ',
      pass: 5000,
      nonpass: 100,
    },
    {
      name: ' ',
      pass: 6000,
      nonpass: 1100,
    },
    {
      name: ' ',
      pass: 6500,
      nonpass: 1100,
    },
    {
      name: ' ',
      pass: 9000,
      nonpass: 2000,
    },
  ];
  
  export default class Mainchart extends PureComponent {
    render() {
      return (
        <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pass" stroke="green" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="nonpass" stroke="red" />
        </LineChart>
      );
    }
  }
  
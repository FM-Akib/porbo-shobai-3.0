import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";


const LineCharts = () => {
    const data = [
        {
          "name": "Jan",
          "points": 432,
          
        },
        {
          "name": "Feb",
          "points": 768,
          "pv": 1398
        },
        {
          "name": "Mar",
          "points": 235,
          "pv": 9800
        },
        {
          "name": "Apr",
          "points": 890,
          "pv": 3908
        },
        {
          "name": "May",
          "points": 653,
          "pv": 4800
        },
        {
          "name": "Jun",
          "points": 542,
          "pv": 3800
        },
        {
          "name": "Jul",
          "points": 321,
          "pv": 4300
        },
        {
            "name": "Aug",
            "points": 456,
            "pv": 4300
          },
          {
            "name": "Sep",
            "points": 987,
            "pv": 4300
          },
          {
            "name": "Oct",
            "points": 123,
            "pv": 4300
          },
          {
            "name": "Nov",
            "points": 654,
            "pv": 4300
          },
          {
            "name": "Dec",
            "points": 139,
            "pv": 4300
          }
      ]
    return (
    <div>
    <BarChart width={530} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
    <Bar dataKey="points" fill="#82ca9d" />
    </BarChart>
            
        </div>
    );
};

export default LineCharts;
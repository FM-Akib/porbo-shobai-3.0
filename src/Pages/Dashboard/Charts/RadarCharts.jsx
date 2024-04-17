import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";


const RadarCharts = () => {
    const data = [
        {
          "subject": "Math",
          "A": 120,
          "B": 30,
          "fullMark": 100
        },
        {
          "subject": "Chemistry",
          "A": 98,
          "B": 48,
          "fullMark": 100
        },
        {
          "subject": "English",
          "A": 86,
          "B": 88,
          "fullMark": 100
        },
        {
          "subject": "G.K.",
          "A": 99,
          "B": 70,
          "fullMark": 100
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 75,
          "fullMark": 100
        },
        {
          "subject": "Biology",
          "A": 65,
          "B": 85,
          "fullMark": 100
        }
      ]
    return (
        <>
        <RadarChart outerRadius={130} width={430} height={350} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        {/* <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> */}
        <Radar name="Marks" dataKey="B" stroke="#91CC77" fill="#91CC75" fillOpacity={0.6} />
        <Legend />
        </RadarChart>   
        </>
    );
};

export default RadarCharts;
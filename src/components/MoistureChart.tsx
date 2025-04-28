
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface MoistureData {
  time: string;
  moisture: number;
  optimal: number;
}

const mockData: MoistureData[] = [
  { time: '00:00', moisture: 62, optimal: 60 },
  { time: '04:00', moisture: 58, optimal: 60 },
  { time: '08:00', moisture: 52, optimal: 60 },
  { time: '12:00', moisture: 48, optimal: 60 },
  { time: '16:00', moisture: 70, optimal: 60 },
  { time: '20:00', moisture: 68, optimal: 60 },
  { time: 'Now', moisture: 65, optimal: 60 },
];

interface MoistureChartProps {
  data?: MoistureData[];
  title?: string;
  description?: string;
}

const MoistureChart = ({ 
  data = mockData, 
  title = "Soil Moisture Trend",
  description = "24-hour moisture level tracking" 
}: MoistureChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="moisture"
                stroke="#3b82f6"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="optimal" stroke="#22c55e" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoistureChart;

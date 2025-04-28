
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import MoistureChart from "@/components/MoistureChart";

const moistureTrendData = [
  { date: 'Apr 25', basil: 65, fern: 50, succulent: 38, tomato: 55 },
  { date: 'Apr 26', basil: 60, fern: 48, succulent: 35, tomato: 52 },
  { date: 'Apr 27', basil: 55, fern: 45, succulent: 32, tomato: 48 },
  { date: 'Apr 28', basil: 70, fern: 65, succulent: 28, tomato: 45 },
  { date: 'Apr 29', basil: 68, fern: 60, succulent: 25, tomato: 60 },
  { date: 'Apr 30', basil: 65, fern: 58, succulent: 22, tomato: 55 },
  { date: 'May 1', basil: 78, fern: 55, succulent: 25, tomato: 48 },
];

const wateringFrequencyData = [
  { name: 'Kitchen Basil', frequency: 3 },
  { name: 'Living Room Fern', frequency: 4 },
  { name: 'Office Succulent', frequency: 2 },
  { name: 'Balcony Tomato', frequency: 5 },
];

const optimalRangeData = [
  { name: 'Basil', lower: 55, upper: 80 },
  { name: 'Fern', lower: 45, upper: 70 },
  { name: 'Succulent', lower: 20, upper: 40 },
  { name: 'Tomato', lower: 40, upper: 65 },
];

const moistureDistribution = [
  { name: 'Too Dry (<30%)', value: 10 },
  { name: 'Low (30-45%)', value: 15 },
  { name: 'Optimal (45-70%)', value: 60 },
  { name: 'Too Wet (>70%)', value: 15 },
];

const COLORS = ['#FF8042', '#FFBB28', '#00C49F', '#3399FF'];

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Plant Analytics</h1>
        <p className="text-muted-foreground mb-6">
          Detailed insights about your plants' moisture levels and health trends
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>7-Day Moisture Trends</CardTitle>
              <CardDescription>Compare moisture levels across all plants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={moistureTrendData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="basil" stroke="#4ade80" name="Kitchen Basil" />
                    <Line type="monotone" dataKey="fern" stroke="#22d3ee" name="Living Room Fern" />
                    <Line type="monotone" dataKey="succulent" stroke="#fb923c" name="Office Succulent" />
                    <Line type="monotone" dataKey="tomato" stroke="#f87171" name="Balcony Tomato" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Watering Frequency</CardTitle>
              <CardDescription>Number of waterings in the past 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={wateringFrequencyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="frequency" fill="#4ade80" name="Waterings/Month" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Optimal Moisture Ranges</CardTitle>
              <CardDescription>Recommended moisture levels for each plant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={optimalRangeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="lower" stackId="a" fill="#94a3b8" name="Min %" />
                    <Bar dataKey="upper" stackId="a" fill="#4ade80" name="Max %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Moisture Distribution</CardTitle>
              <CardDescription>Overall moisture level distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={moistureDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {moistureDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Daily Moisture Fluctuations</CardTitle>
            <CardDescription>24-hour moisture level tracking for each plant</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <MoistureChart 
              title="Kitchen Basil" 
              description="Last 24 hours" 
            />
            <MoistureChart 
              title="Living Room Fern" 
              description="Last 24 hours" 
              data={[
                { time: '00:00', moisture: 50, optimal: 60 },
                { time: '04:00', moisture: 48, optimal: 60 },
                { time: '08:00', moisture: 45, optimal: 60 },
                { time: '12:00', moisture: 42, optimal: 60 },
                { time: '16:00', moisture: 60, optimal: 60 },
                { time: '20:00', moisture: 58, optimal: 60 },
                { time: 'Now', moisture: 55, optimal: 60 },
              ]}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Analytics;


import Navbar from "@/components/Navbar";
import Plant3D from "@/components/Plant3D";
import PlantMetrics from "@/components/PlantMetrics";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Plant Monitoring Dashboard</h1>
          <p className="text-muted-foreground mb-6">
            Track soil moisture levels and plant health in real-time
          </p>
          
          <PlantMetrics />
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">3D Plant Visualization</h2>
            <Plant3D />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Plant Status</h2>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-lg font-medium mb-2">Kitchen Basil</p>
              <div className="text-sm text-muted-foreground">
                Moisture Level: 78%
              </div>
              <div className="text-sm text-muted-foreground">
                Last Updated: Just now
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

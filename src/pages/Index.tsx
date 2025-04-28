
import Navbar from "@/components/Navbar";
import PlantPot from "@/components/PlantPot";
import MoistureChart from "@/components/MoistureChart";
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
            <h2 className="text-2xl font-semibold">Plants Status</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <PlantPot 
                name="Kitchen Basil" 
                moistureLevel={78} 
                status="high"
                wateringRecommendation="No watering needed"
                lastWatered="Today, 9:30 AM" 
              />
              <PlantPot 
                name="Living Room Fern" 
                moistureLevel={55} 
                status="optimal"
                wateringRecommendation="Water in 2 days"
                lastWatered="Yesterday, 8:15 AM" 
              />
              <PlantPot 
                name="Office Succulent" 
                moistureLevel={25} 
                status="low"
                wateringRecommendation="Water now!"
                lastWatered="5 days ago" 
              />
              <PlantPot 
                name="Balcony Tomato" 
                moistureLevel={48} 
                status="optimal"
                wateringRecommendation="Water tomorrow"
                lastWatered="2 days ago" 
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Soil Moisture Analytics</h2>
            <MoistureChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

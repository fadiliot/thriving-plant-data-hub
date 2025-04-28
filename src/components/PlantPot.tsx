
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlantPotProps {
  name: string;
  moistureLevel: number; // 0-100
  status: "low" | "optimal" | "high";
  wateringRecommendation?: string;
  lastWatered?: string;
}

const PlantPot = ({
  name,
  moistureLevel,
  status,
  wateringRecommendation,
  lastWatered,
}: PlantPotProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "low":
        return "text-amber-500";
      case "optimal":
        return "text-green-500";
      case "high":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getMoistureColor = () => {
    if (moistureLevel < 30) return "bg-amber-200";
    if (moistureLevel < 70) return "bg-blue-300";
    return "bg-blue-500";
  };

  return (
    <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-md">
      <div className="text-lg font-medium mb-2">{name}</div>
      
      <div className="relative w-32 h-36 mb-4">
        {/* Pot */}
        <div className="absolute bottom-0 w-full h-24 bg-amber-800 rounded-b-xl rounded-t-3xl overflow-hidden">
          {/* Soil */}
          <div className="absolute bottom-0 w-full h-20 bg-amber-900 rounded-b-lg">
            {/* Water Level Indicator */}
            <div 
              className={cn("absolute bottom-0 w-full soil-level-indicator", getMoistureColor())}
              style={{ height: `${moistureLevel}%` }}
            />
          </div>
        </div>
        
        {/* Plant */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <Leaf 
            className={cn("h-24 w-24 plant-animation", getStatusColor())} 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-1">
        <span className={cn("font-semibold", getStatusColor())}>
          {moistureLevel}% Moisture
        </span>
        <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium uppercase", {
          "bg-amber-100 text-amber-800": status === "low",
          "bg-green-100 text-green-800": status === "optimal",
          "bg-blue-100 text-blue-800": status === "high",
        })}>
          {status}
        </span>
      </div>
      
      {wateringRecommendation && (
        <div className="text-sm text-muted-foreground mb-1">
          {wateringRecommendation}
        </div>
      )}
      
      {lastWatered && (
        <div className="text-xs text-muted-foreground">
          Last watered: {lastWatered}
        </div>
      )}
    </div>
  );
};

export default PlantPot;

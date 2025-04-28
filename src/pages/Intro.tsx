
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Smart <span className="text-primary">Vertical Farming</span> Digital Twin
            </h1>
            <p className="text-xl text-muted-foreground">
              Monitor, optimize, and control your vertical farm with our cutting-edge digital twin technology, providing real-time insights and AI-powered recommendations.
            </p>
            <div className="flex gap-4">
              <Link to="/dashboard">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  View Demo <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="h-6 w-6 text-primary">📊</div>
              </div>
              <h3 className="text-xl font-semibold">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Track temperature, humidity, light, and nutrient levels across your vertical farm in real time.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="h-6 w-6 text-primary">📈</div>
              </div>
              <h3 className="text-xl font-semibold">Data Analytics</h3>
              <p className="text-muted-foreground">
                Leverage advanced analytics to optimize plant growth and maximize yields.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="h-6 w-6 text-primary">🌱</div>
              </div>
              <h3 className="text-xl font-semibold">Growth Prediction</h3>
              <p className="text-muted-foreground">
                AI-powered growth models predict harvest dates and yield potential with high accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

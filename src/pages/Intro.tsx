
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

export default function Intro() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>
        <section className="container mx-auto px-4 py-32 min-h-screen flex items-center">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold tracking-tight">
                <span className="text-muted-foreground">Smart</span>{" "}
                <span className="text-primary">Vertical Farming</span>{" "}
                <span className="text-foreground">Digital Twin</span>
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
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                alt="Vertical Farming"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center">
          <Leaf className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">
            Verti<span className="text-primary">Farm</span>{" "}
            <span className="text-muted-foreground">Twin</span>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/digital-twin">
              <Button variant="ghost">Digital Twin</Button>
            </Link>
            <Link to="/features">
              <Button variant="ghost">Features</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainNav;


import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center">
          <Leaf className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">
            Plant<span className="text-primary">Mate</span>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/plants">
              <Button variant="ghost">Plants</Button>
            </Link>
            <Link to="/analytics">
              <Button variant="ghost">Analytics</Button>
            </Link>
            <Link to="/setup">
              <Button variant="ghost">Setup Guide</Button>
            </Link>
            <Link to="/">
              <Button variant="default">Home</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

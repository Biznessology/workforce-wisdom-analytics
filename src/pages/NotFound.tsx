
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-6">
          We couldn't find the page you're looking for.
        </p>
        <p className="text-muted-foreground mb-8">
          The page might have been moved, deleted, or never existed.
        </p>
        <Button asChild className="min-w-[150px]">
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

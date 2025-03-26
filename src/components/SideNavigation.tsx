
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  Target, 
  ChevronLeft, 
  ChevronRight, 
  Menu 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Executive Dashboard", icon: LayoutDashboard },
  { path: "/recruitment", label: "Recruitment & Hiring", icon: Users },
  { path: "/profitability", label: "Employee Profitability", icon: DollarSign },
  { path: "/client-acquisition", label: "Client Acquisition", icon: Target },
];

const SideNavigation = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMobileSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-card border-r transition-all duration-300 ease-in-out shadow-md md:shadow-none",
          expanded ? "w-64" : "w-20",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className={cn("flex items-center", !expanded && "justify-center w-full")}>
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-semibold">WA</span>
              </div>
              {expanded && (
                <h1 className="ml-3 font-semibold truncate animate-fade-in">
                  Workforce Analytics
                </h1>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={toggleSidebar}
            >
              {expanded ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </div>

          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center px-3 py-2 rounded-md transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:bg-muted",
                        !expanded && "justify-center"
                      )
                    }
                  >
                    <item.icon
                      className={cn(
                        "flex-shrink-0",
                        expanded ? "h-5 w-5 mr-3" : "h-6 w-6"
                      )}
                    />
                    {expanded && (
                      <span className="truncate animate-fade-in">
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <div className={cn("flex items-center", !expanded && "justify-center")}>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-foreground/70 font-medium">JD</span>
              </div>
              {expanded && (
                <div className="ml-3 animate-fade-in">
                  <p className="text-sm font-medium">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">Admin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;

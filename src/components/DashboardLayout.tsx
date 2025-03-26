
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import SideNavigation from "@/components/SideNavigation";
import HeaderBar from "@/components/HeaderBar";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <SideNavigation />
      <div className="flex-1 flex flex-col ml-0 md:ml-20 lg:ml-64 transition-all duration-300">
        <ScrollArea className="flex-1 p-4 md:p-6 lg:p-8">
          <HeaderBar title={title} subtitle={subtitle} />
          <main>{children}</main>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DashboardLayout;

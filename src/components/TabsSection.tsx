
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsSectionProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
}

const TabsSection = ({ tabs, defaultValue, className }: TabsSectionProps) => {
  return (
    <Tabs defaultValue={defaultValue || tabs[0].value} className={cn("w-full", className)}>
      <TabsList className="w-full max-w-md mx-auto mb-6 overflow-x-auto flex-nowrap">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="min-w-[120px] whitespace-nowrap"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="animate-fade-in">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsSection;

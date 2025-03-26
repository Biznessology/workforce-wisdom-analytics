
import DashboardLayout from "@/components/DashboardLayout";
import TabsSection from "@/components/TabsSection";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { Briefcase, DollarSign, Activity, Users, BarChart as BarChartIcon } from "lucide-react";

// Mock data
const resourceAllocationData = [
  { name: "UiPath", value: 65, color: "#3b82f6" },
  { name: "Direct Clients", value: 35, color: "#8b5cf6" },
];

const utilizationRateData = [
  { name: "Jan", uipath: 85, direct: 90 },
  { name: "Feb", uipath: 87, direct: 88 },
  { name: "Mar", uipath: 90, direct: 85 },
  { name: "Apr", uipath: 92, direct: 82 },
  { name: "May", uipath: 91, direct: 84 },
  { name: "Jun", uipath: 93, direct: 86 },
  { name: "Jul", uipath: 94, direct: 88 },
  { name: "Aug", uipath: 95, direct: 90 },
];

const billingRateData = [
  { name: "Software Dev", uipath: 115, direct: 135 },
  { name: "Product", uipath: 125, direct: 145 }, 
  { name: "Data Science", uipath: 120, direct: 140 },
  { name: "DevOps", uipath: 110, direct: 130 },
  { name: "QA", uipath: 95, direct: 115 },
];

const profitabilityData = [
  { name: "Jan", profit: 2200, cost: 4800 },
  { name: "Feb", profit: 2400, cost: 4800 },
  { name: "Mar", profit: 2700, cost: 4800 },
  { name: "Apr", profit: 3000, cost: 4900 },
  { name: "May", profit: 3300, cost: 4900 },
  { name: "Jun", profit: 3500, cost: 4900 },
  { name: "Jul", profit: 3800, cost: 5000 },
  { name: "Aug", profit: 4100, cost: 5000 },
];

const profitabilityByEmployeeTypeData = [
  { name: "UiPath Deployed", value: 42, color: "#3b82f6" },
  { name: "Direct Clients", value: 58, color: "#8b5cf6" },
];

const Profitability = () => {
  return (
    <DashboardLayout 
      title="Employee Revenue & Profitability" 
      subtitle="Analyze resource allocation, utilization, and profit margins"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in">
        <StatCard
          title="Total Employees"
          value="142"
          icon={Users}
          trend={{ value: 12, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Avg. Utilization Rate"
          value="93%"
          icon={Activity}
          trend={{ value: 3, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Avg. Billable Rate"
          value="$125/hr"
          icon={DollarSign}
          trend={{ value: 5, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Avg. Profit Margin"
          value="42%"
          icon={BarChartIcon}
          trend={{ value: 7, positive: true, label: "vs last quarter" }}
        />
      </div>

      <TabsSection
        tabs={[
          {
            value: "allocation",
            label: "Resource Allocation",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Employee Allocation" 
                    subtitle="UiPath vs. Direct Clients"
                  >
                    <PieChart
                      data={resourceAllocationData}
                      valueFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Utilization Rates" 
                    subtitle="Monthly utilization percentage"
                  >
                    <LineChart
                      data={utilizationRateData}
                      lines={[
                        { key: "uipath", label: "UiPath", color: "#3b82f6" },
                        { key: "direct", label: "Direct", color: "#8b5cf6" },
                      ]}
                      yAxisFormatter={(value) => `${value}%`}
                      tooltipFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Avg. Billing Rate by Role" 
                    subtitle="UiPath vs. Direct Clients ($/hour)"
                  >
                    <BarChart
                      data={billingRateData}
                      bars={[
                        { key: "uipath", label: "UiPath", color: "#3b82f6" },
                        { key: "direct", label: "Direct", color: "#8b5cf6" },
                      ]}
                      yAxisFormatter={(value) => `$${value}`}
                      tooltipFormatter={(value) => `$${value}/hour`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Monthly Revenue by Employee" 
                    subtitle="Average per employee"
                  >
                    <LineChart
                      data={[
                        { name: "Jan", uipath: 16000, direct: 21000 },
                        { name: "Feb", uipath: 16500, direct: 21500 },
                        { name: "Mar", uipath: 17000, direct: 22000 },
                        { name: "Apr", uipath: 17500, direct: 22500 },
                        { name: "May", uipath: 18000, direct: 23000 },
                        { name: "Jun", uipath: 18500, direct: 23500 },
                        { name: "Jul", uipath: 19000, direct: 24000 },
                        { name: "Aug", uipath: 19500, direct: 24500 },
                      ]}
                      lines={[
                        { key: "uipath", label: "UiPath", color: "#3b82f6" },
                        { key: "direct", label: "Direct", color: "#8b5cf6" },
                      ]}
                      yAxisFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      tooltipFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                  </ChartCard>
                </div>
              </div>
            ),
          },
          {
            value: "profitability",
            label: "Profitability Analysis",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard
                    title="Avg. Gross Margin"
                    value="$4,050"
                    description="Per employee per month"
                    trend={{ value: 8, positive: true, label: "vs target" }}
                  />
                  <StatCard
                    title="ROI Timeline"
                    value="4.2 months"
                    description="Until employee becomes profitable"
                    trend={{ value: 12, positive: true, label: "vs target" }}
                  />
                  <StatCard
                    title="Profit per Billable Hour"
                    value="$52"
                    description="Average across all roles"
                    trend={{ value: 5, positive: true, label: "vs target" }}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Employee Profitability" 
                    subtitle="Monthly profit vs. cost per employee"
                  >
                    <BarChart
                      data={profitabilityData}
                      bars={[
                        { key: "profit", label: "Profit", color: "#10b981" },
                        { key: "cost", label: "Cost", color: "#94a3b8" },
                      ]}
                      yAxisFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                      tooltipFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Profitability by Employee Type" 
                    subtitle="UiPath vs. Direct Client deployment"
                  >
                    <PieChart
                      data={profitabilityByEmployeeTypeData}
                      valueFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                </div>

                <ChartCard 
                  title="Employee Performance vs. Billing Rate" 
                  subtitle="Correlation analysis"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {[
                        { role: "Sr. Developer", performance: 9.2, rate: "$135/hr", margin: "45%" },
                        { role: "Mid Developer", performance: 8.5, rate: "$115/hr", margin: "40%" },
                        { role: "Jr. Developer", performance: 7.8, rate: "$95/hr", margin: "35%" },
                        { role: "Product Manager", performance: 9.0, rate: "$125/hr", margin: "43%" },
                        { role: "UX Designer", performance: 8.7, rate: "$110/hr", margin: "38%" },
                      ].map((item, index) => (
                        <div key={index} className="stat-card">
                          <div>
                            <h4 className="font-medium">{item.role}</h4>
                            <div className="flex items-center mt-2">
                              <div className="w-full bg-secondary rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${(item.performance / 10) * 100}%` }} 
                                />
                              </div>
                              <span className="ml-2 text-sm">{item.performance}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-sm text-muted-foreground">Rate:</span>
                            <span className="font-medium">{item.rate}</span>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-muted-foreground">Margin:</span>
                            <span className="font-medium">{item.margin}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ChartCard>
              </div>
            ),
          },
        ]}
        defaultValue="allocation"
      />
    </DashboardLayout>
  );
};

export default Profitability;

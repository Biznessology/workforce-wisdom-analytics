
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import BarChart from "@/components/charts/BarChart";
import { Users, DollarSign, Clock, Briefcase, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const timeToHireData = [
  { name: "Jan", value: 45 },
  { name: "Feb", value: 42 },
  { name: "Mar", value: 35 },
  { name: "Apr", value: 32 },
  { name: "May", value: 28 },
  { name: "Jun", value: 25 },
  { name: "Jul", value: 23 },
  { name: "Aug", value: 22 },
];

const employeeProfitabilityData = [
  { name: "Jan", revenue: 72000, cost: 52000 },
  { name: "Feb", revenue: 75000, cost: 53000 },
  { name: "Mar", revenue: 82000, cost: 54000 },
  { name: "Apr", revenue: 87000, cost: 55000 },
  { name: "May", revenue: 93000, cost: 56000 },
  { name: "Jun", revenue: 98000, cost: 57000 },
  { name: "Jul", revenue: 103000, cost: 58000 },
  { name: "Aug", revenue: 109000, cost: 59000 },
];

const marketingROIData = [
  { name: "Content Marketing", value: 32, color: "#3b82f6" },
  { name: "Paid Search", value: 25, color: "#8b5cf6" },
  { name: "Social Media", value: 18, color: "#ec4899" },
  { name: "Referrals", value: 15, color: "#10b981" },
  { name: "Email", value: 10, color: "#f97316" },
];

const recruitmentSourceData = [
  { name: "LinkedIn", hired: 38, interviewed: 65 },
  { name: "Referrals", hired: 25, interviewed: 40 },
  { name: "Job Boards", hired: 20, interviewed: 60 },
  { name: "University", hired: 12, interviewed: 30 },
  { name: "Events", hired: 5, interviewed: 15 },
];

const Dashboard = () => {
  return (
    <DashboardLayout 
      title="Executive Dashboard" 
      subtitle="Overview of key performance metrics across all departments"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in">
        <StatCard
          title="Current Employees"
          value="142"
          icon={Users}
          trend={{ value: 12, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Avg. Revenue per Employee"
          value="$8,540"
          icon={DollarSign}
          trend={{ value: 8.2, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Time to Hire"
          value="22 days"
          icon={Clock}
          trend={{ value: 15, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Clients"
          value="38"
          icon={Briefcase}
          trend={{ value: 5, positive: true, label: "vs last quarter" }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 animate-slide-in">
        <ChartCard 
          title="Average Time to Hire (Days)" 
          subtitle="Trending down showing process improvement"
        >
          <LineChart
            data={timeToHireData}
            lines={[
              { key: "value", label: "Days", color: "#3b82f6" },
            ]}
            yAxisFormatter={(value) => `${value}`}
            tooltipFormatter={(value) => `${value} days`}
          />
        </ChartCard>
        
        <ChartCard 
          title="Employee Revenue vs. Cost" 
          subtitle="Monthly average per employee"
        >
          <LineChart
            data={employeeProfitabilityData}
            lines={[
              { key: "revenue", label: "Revenue", color: "#10b981" },
              { key: "cost", label: "Cost", color: "#f97316" },
            ]}
            yAxisFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            tooltipFormatter={(value) => `$${value.toLocaleString()}`}
          />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 animate-slide-in">
        <ChartCard 
          title="Recruitment Source Effectiveness" 
          subtitle="Interviewed vs. Hired by source"
        >
          <BarChart
            data={recruitmentSourceData}
            bars={[
              { key: "interviewed", label: "Interviewed", color: "#8b5cf6" },
              { key: "hired", label: "Hired", color: "#3b82f6" },
            ]}
            yAxisFormatter={(value) => `${value}`}
            tooltipFormatter={(value) => `${value}`}
          />
        </ChartCard>
        
        <ChartCard 
          title="Marketing ROI by Channel"
          subtitle="Distribution of lead acquisition sources"
        >
          <PieChart
            data={marketingROIData}
            valueFormatter={(value) => `${value}%`}
          />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-scale-in">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Client Acquisition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">This Quarter</span>
              </div>
              <div className="text-2xl font-bold">12</div>
            </div>
            <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }} />
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Target: 15</span>
              <span>80% complete</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">UiPath Resource Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Utilization</span>
              </div>
              <div className="text-2xl font-bold">93%</div>
            </div>
            <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "93%" }} />
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Target: 90%</span>
              <span>Exceeding target</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">YoY Growth</span>
              </div>
              <div className="text-2xl font-bold">28%</div>
            </div>
            <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div className="bg-primary h-2 rounded-full" style={{ width: "140%" }} />
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Target: 20%</span>
              <span>Exceeding target</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

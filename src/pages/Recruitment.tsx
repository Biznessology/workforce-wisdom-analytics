
import DashboardLayout from "@/components/DashboardLayout";
import TabsSection from "@/components/TabsSection";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { Users, DollarSign, Clock, ArrowUp, ArrowDown } from "lucide-react";

// Mock data
const candidatePipelineData = [
  { name: "Jan", sourced: 120, interviewed: 45, hired: 12 },
  { name: "Feb", sourced: 135, interviewed: 52, hired: 15 },
  { name: "Mar", sourced: 150, interviewed: 60, hired: 18 },
  { name: "Apr", sourced: 145, interviewed: 55, hired: 16 },
  { name: "May", sourced: 160, interviewed: 65, hired: 20 },
  { name: "Jun", sourced: 175, interviewed: 70, hired: 22 },
  { name: "Jul", sourced: 190, interviewed: 75, hired: 25 },
  { name: "Aug", sourced: 185, interviewed: 72, hired: 23 },
];

const timeToHireByRoleData = [
  { name: "Software Engineer", value: 32 },
  { name: "Product Manager", value: 28 },
  { name: "UX Designer", value: 24 },
  { name: "Data Scientist", value: 35 },
  { name: "DevOps Engineer", value: 30 },
  { name: "QA Engineer", value: 22 },
];

const sourceEffectivenessData = [
  { name: "LinkedIn", value: 42, color: "#3b82f6" },
  { name: "Referrals", value: 25, color: "#8b5cf6" },
  { name: "Job Boards", value: 18, color: "#ec4899" },
  { name: "University", value: 10, color: "#10b981" },
  { name: "Events", value: 5, color: "#f97316" },
];

const interviewPassRateData = [
  { name: "Technical", passed: 65, failed: 35 },
  { name: "Cultural", passed: 82, failed: 18 },
  { name: "Design", passed: 72, failed: 28 },
  { name: "Leadership", passed: 58, failed: 42 },
];

const hiringCostBreakdownData = [
  { name: "Job Postings", value: 15, color: "#3b82f6" },
  { name: "Recruiter Time", value: 35, color: "#8b5cf6" },
  { name: "Tool Subscriptions", value: 10, color: "#ec4899" },
  { name: "Interview Time", value: 25, color: "#10b981" },
  { name: "Onboarding", value: 15, color: "#f97316" },
];

const Recruitment = () => {
  return (
    <DashboardLayout 
      title="Recruitment & Hiring Analytics" 
      subtitle="Track candidate pipelines, hiring efficiency, and recruitment costs"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in">
        <StatCard
          title="Open Positions"
          value="24"
          icon={Users}
          trend={{ value: 8, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Time to Hire"
          value="22 days"
          icon={Clock}
          trend={{ value: 15, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Cost per Hire"
          value="$4,280"
          icon={DollarSign}
          trend={{ value: 5, positive: false, label: "vs last quarter" }}
        />
        <StatCard
          title="Offer Acceptance Rate"
          value="85%"
          icon={ArrowUp}
          trend={{ value: 3, positive: true, label: "vs last quarter" }}
        />
      </div>

      <TabsSection
        tabs={[
          {
            value: "pipeline",
            label: "Candidate Pipeline",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Candidate Pipeline Stages" 
                    subtitle="Monthly progression through pipeline stages"
                  >
                    <LineChart
                      data={candidatePipelineData}
                      lines={[
                        { key: "sourced", label: "Sourced", color: "#94a3b8" },
                        { key: "interviewed", label: "Interviewed", color: "#8b5cf6" },
                        { key: "hired", label: "Hired", color: "#3b82f6" },
                      ]}
                      yAxisFormatter={(value) => `${value}`}
                      tooltipFormatter={(value) => `${value}`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Time to Hire by Role" 
                    subtitle="Average days to fill position by role"
                  >
                    <BarChart
                      data={timeToHireByRoleData}
                      bars={[
                        { key: "value", label: "Days", color: "#3b82f6" },
                      ]}
                      yAxisFormatter={(value) => `${value}`}
                      tooltipFormatter={(value) => `${value} days`}
                      vertical={true}
                    />
                  </ChartCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Source Effectiveness" 
                    subtitle="Percentage of successful hires by source"
                  >
                    <PieChart
                      data={sourceEffectivenessData}
                      valueFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Interview Pass/Fail Ratios" 
                    subtitle="By interview stage"
                  >
                    <BarChart
                      data={interviewPassRateData}
                      bars={[
                        { key: "passed", label: "Passed", color: "#10b981" },
                        { key: "failed", label: "Failed", color: "#ef4444" },
                      ]}
                      yAxisFormatter={(value) => `${value}%`}
                      tooltipFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                </div>
              </div>
            ),
          },
          {
            value: "costs",
            label: "Hiring Costs",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard
                    title="Average Cost per Hire"
                    value="$4,280"
                    description="Total recruitment expense / number of hires"
                    trend={{ value: 5, positive: false, label: "vs target" }}
                  />
                  <StatCard
                    title="Recruiter Efficiency"
                    value="18.5"
                    description="Average hires per recruiter per quarter"
                    trend={{ value: 12, positive: true, label: "vs target" }}
                  />
                  <StatCard
                    title="Onboarding Cost"
                    value="$1,250"
                    description="Per employee"
                    trend={{ value: 8, positive: false, label: "vs target" }}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Hiring Cost Breakdown" 
                    subtitle="Percentage by category"
                  >
                    <PieChart
                      data={hiringCostBreakdownData}
                      valueFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Cost per Hire Trend" 
                    subtitle="Monthly average over time"
                  >
                    <LineChart
                      data={[
                        { name: "Jan", value: 4500 },
                        { name: "Feb", value: 4450 },
                        { name: "Mar", value: 4400 },
                        { name: "Apr", value: 4350 },
                        { name: "May", value: 4320 },
                        { name: "Jun", value: 4300 },
                        { name: "Jul", value: 4280 },
                        { name: "Aug", value: 4250 },
                      ]}
                      lines={[
                        { key: "value", label: "Cost", color: "#3b82f6" },
                      ]}
                      yAxisFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                      tooltipFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                  </ChartCard>
                </div>
              </div>
            ),
          },
        ]}
        defaultValue="pipeline"
      />
    </DashboardLayout>
  );
};

export default Recruitment;

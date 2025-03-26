
import DashboardLayout from "@/components/DashboardLayout";
import TabsSection from "@/components/TabsSection";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { Target, TrendingUp, Clock, DollarSign, Briefcase } from "lucide-react";

// Mock data
const marketingSpendData = [
  { name: "Content", value: 35, color: "#3b82f6" },
  { name: "Paid Search", value: 25, color: "#8b5cf6" },
  { name: "Social", value: 20, color: "#ec4899" },
  { name: "Events", value: 12, color: "#10b981" },
  { name: "Referrals", value: 8, color: "#f97316" },
];

const conversionRateData = [
  { name: "Awareness", value: 100 },
  { name: "Interest", value: 48 },
  { name: "Consideration", value: 32 },
  { name: "Intent", value: 18 },
  { name: "Evaluation", value: 12 },
  { name: "Purchase", value: 8 },
];

const clientRevenueData = [
  { name: "Jan", revenue: 125000, target: 120000 },
  { name: "Feb", revenue: 128000, target: 125000 },
  { name: "Mar", revenue: 135000, target: 130000 },
  { name: "Apr", revenue: 140000, target: 135000 },
  { name: "May", revenue: 148000, target: 140000 },
  { name: "Jun", revenue: 155000, target: 145000 },
  { name: "Jul", revenue: 160000, target: 150000 },
  { name: "Aug", revenue: 168000, target: 155000 },
];

const clientAcquisitionCostData = [
  { name: "Q1 2022", value: 7500 },
  { name: "Q2 2022", value: 7200 },
  { name: "Q3 2022", value: 6800 },
  { name: "Q4 2022", value: 6500 },
  { name: "Q1 2023", value: 6300 },
  { name: "Q2 2023", value: 6100 },
  { name: "Q3 2023", value: 5800 },
  { name: "Q4 2023", value: 5500 },
];

const clientProfitabilityData = [
  { name: "Enterprise", value: 65, color: "#3b82f6" },
  { name: "Mid-Market", value: 25, color: "#8b5cf6" },
  { name: "SMB", value: 10, color: "#ec4899" },
];

const ClientAcquisition = () => {
  return (
    <DashboardLayout 
      title="Client Acquisition & Marketing ROI" 
      subtitle="Track marketing effectiveness, lead conversion, and client revenue metrics"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in">
        <StatCard
          title="Marketing ROI"
          value="385%"
          icon={TrendingUp}
          trend={{ value: 15, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Client Acquisition Cost"
          value="$5,500"
          icon={DollarSign}
          trend={{ value: 12, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Sales Cycle Length"
          value="45 days"
          icon={Clock}
          trend={{ value: 8, positive: true, label: "vs last quarter" }}
        />
        <StatCard
          title="Active Clients"
          value="38"
          icon={Briefcase}
          trend={{ value: 5, positive: true, label: "vs last quarter" }}
        />
      </div>

      <TabsSection
        tabs={[
          {
            value: "marketing",
            label: "Marketing Effectiveness",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Marketing Spend by Channel" 
                    subtitle="Percentage allocation of marketing budget"
                  >
                    <PieChart
                      data={marketingSpendData}
                      valueFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Conversion Funnel" 
                    subtitle="Progression through sales funnel stages"
                  >
                    <BarChart
                      data={conversionRateData}
                      bars={[
                        { key: "value", label: "Prospects", color: "#3b82f6" },
                      ]}
                      yAxisFormatter={(value) => `${value}`}
                      tooltipFormatter={(value) => `${value}`}
                      vertical={true}
                    />
                  </ChartCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Cost per Lead by Channel" 
                    subtitle="Average cost to acquire a qualified lead"
                  >
                    <BarChart
                      data={[
                        { name: "Content", value: 120 },
                        { name: "Paid Search", value: 280 },
                        { name: "Social", value: 220 },
                        { name: "Events", value: 350 },
                        { name: "Referrals", value: 85 },
                      ]}
                      bars={[
                        { key: "value", label: "Cost", color: "#3b82f6" },
                      ]}
                      yAxisFormatter={(value) => `$${value}`}
                      tooltipFormatter={(value) => `$${value}`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Lead to Client Conversion Rate" 
                    subtitle="Monthly percentage of leads converted"
                  >
                    <LineChart
                      data={[
                        { name: "Jan", value: 5.2 },
                        { name: "Feb", value: 5.4 },
                        { name: "Mar", value: 5.8 },
                        { name: "Apr", value: 6.2 },
                        { name: "May", value: 6.5 },
                        { name: "Jun", value: 6.8 },
                        { name: "Jul", value: 7.2 },
                        { name: "Aug", value: 7.5 },
                      ]}
                      lines={[
                        { key: "value", label: "Conversion %", color: "#3b82f6" },
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
            value: "revenue",
            label: "Client Revenue",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard
                    title="Average Contract Value"
                    value="$85,000"
                    description="Per client annually"
                    trend={{ value: 8, positive: true, label: "vs target" }}
                  />
                  <StatCard
                    title="Client Lifetime Value"
                    value="$280,000"
                    description="Average total revenue per client"
                    trend={{ value: 5, positive: true, label: "vs target" }}
                  />
                  <StatCard
                    title="Retention Rate"
                    value="92%"
                    description="Annual client retention"
                    trend={{ value: 3, positive: true, label: "vs target" }}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Monthly Revenue vs Target" 
                    subtitle="Actual performance against goals"
                  >
                    <LineChart
                      data={clientRevenueData}
                      lines={[
                        { key: "revenue", label: "Revenue", color: "#3b82f6" },
                        { key: "target", label: "Target", color: "#94a3b8" },
                      ]}
                      yAxisFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      tooltipFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Client Acquisition Cost Trend" 
                    subtitle="Average CAC over time"
                  >
                    <LineChart
                      data={clientAcquisitionCostData}
                      lines={[
                        { key: "value", label: "CAC", color: "#3b82f6" },
                      ]}
                      yAxisFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                      tooltipFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                  </ChartCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Project Profitability by Client Type" 
                    subtitle="Percentage of total profit by segment"
                  >
                    <PieChart
                      data={clientProfitabilityData}
                      valueFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                  
                  <ChartCard 
                    title="Revenue Growth from Existing Clients" 
                    subtitle="Expansion revenue quarter-over-quarter"
                  >
                    <BarChart
                      data={[
                        { name: "Q1 2023", value: 8 },
                        { name: "Q2 2023", value: 10 },
                        { name: "Q3 2023", value: 12 },
                        { name: "Q4 2023", value: 15 },
                      ]}
                      bars={[
                        { key: "value", label: "Growth", color: "#10b981" },
                      ]}
                      yAxisFormatter={(value) => `${value}%`}
                      tooltipFormatter={(value) => `${value}%`}
                    />
                  </ChartCard>
                </div>
              </div>
            ),
          },
        ]}
        defaultValue="marketing"
      />
    </DashboardLayout>
  );
};

export default ClientAcquisition;

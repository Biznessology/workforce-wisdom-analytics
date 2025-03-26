
import { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: any;
}

interface PieChartProps {
  data: DataPoint[];
  valueFormatter?: (value: number) => string;
  height?: number;
  showLegend?: boolean;
}

const PieChart = ({
  data,
  valueFormatter = (value) => `${value}`,
  height = 300,
  showLegend = true,
}: PieChartProps) => {
  const formattedData = useMemo(() => {
    return data.map((item) => ({
      ...item,
    }));
  }, [data]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RechartsPieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <Pie
            data={formattedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {showLegend && (
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={10}
            />
          )}
          <Tooltip
            formatter={valueFormatter}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "none",
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;

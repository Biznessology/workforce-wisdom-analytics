
import { useMemo } from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataPoint {
  name: string;
  [key: string]: any;
}

interface BarChartProps {
  data: DataPoint[];
  bars: {
    key: string;
    label: string;
    color: string;
  }[];
  xAxisDataKey?: string;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => string;
  height?: number;
  vertical?: boolean;
}

const BarChart = ({
  data,
  bars,
  xAxisDataKey = "name",
  yAxisFormatter = (value) => `${value}`,
  tooltipFormatter = (value) => `${value}`,
  height = 300,
  vertical = false,
}: BarChartProps) => {
  const formattedData = useMemo(() => {
    return data.map((item) => ({
      ...item,
    }));
  }, [data]);

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RechartsBarChart
          data={formattedData}
          layout={vertical ? "vertical" : "horizontal"}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis
            dataKey={vertical ? undefined : xAxisDataKey}
            type={vertical ? "number" : "category"}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis
            dataKey={vertical ? xAxisDataKey : undefined}
            type={vertical ? "category" : "number"}
            tickFormatter={vertical ? undefined : yAxisFormatter}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            dx={-10}
          />
          <Tooltip
            formatter={tooltipFormatter}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "none",
            }}
          />
          {bars.map((bar) => (
            <Bar
              key={bar.key}
              dataKey={bar.key}
              name={bar.label}
              fill={bar.color}
              radius={4}
              barSize={vertical ? 15 : 30}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;

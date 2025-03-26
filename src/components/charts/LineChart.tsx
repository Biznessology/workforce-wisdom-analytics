
import { useMemo } from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataPoint {
  name: string;
  [key: string]: any;
}

interface LineChartProps {
  data: DataPoint[];
  lines: {
    key: string;
    label: string;
    color: string;
  }[];
  xAxisDataKey?: string;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => string;
  height?: number;
}

const LineChart = ({
  data,
  lines,
  xAxisDataKey = "name",
  yAxisFormatter = (value) => `${value}`,
  tooltipFormatter = (value) => `${value}`,
  height = 300,
}: LineChartProps) => {
  const formattedData = useMemo(() => {
    return data.map((item) => ({
      ...item,
    }));
  }, [data]);

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RechartsLineChart
          data={formattedData}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis
            dataKey={xAxisDataKey}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis
            tickFormatter={yAxisFormatter}
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
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.label}
              stroke={line.color}
              strokeWidth={2}
              dot={{ r: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;

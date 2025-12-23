import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

interface GraphicData {
  day: string;
  appointments: number;
}

interface SimpleLineChartProps {
  graphic_data: GraphicData[];
}

export default function SimpleLineChartGraphicCompoent({
  graphic_data,
}: SimpleLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={graphic_data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="appointments"
          stroke="#2563eb"
          fill="url(#colorGradient)"
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
}

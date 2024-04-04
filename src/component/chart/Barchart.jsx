import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 40,
    pv: 24,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 30,
    pv: 13,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 20,
    pv: 98,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 27,
    pv: 39,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 18,
    pv: 48,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 23,
    pv: 38,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 34,
    pv: 43,
    amt: 2100,
  },
];

const Barchart = () => {
  return (
    <div className="rounded-borderRedius p-2 shadow-md bg-white text-textColor border">
      <div className="flex justify-between p-2 ">
        <h1 className="text-textColor font-semibold p-1 px-2  rounded-borderRedius">Bar Chart</h1>
        <MoreVertIcon/>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Legend/>
          <XAxis dataKey="name" />
          <YAxis />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

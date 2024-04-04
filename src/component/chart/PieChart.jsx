import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  // XAxis,
  // YAxis,
  // Tooltip,
  // Area,
  // Legend,
} from "recharts";
const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];
const Barchart = () => {
  return (
    <div className="rounded-borderRedius p-2 shadow-md bg-white text-textColor border">
      <div className="flex justify-between p-2 ">
        <h1 className="text-textColor font-semibold p-1 px-2  rounded-borderRedius">Bar Chart</h1>
        <MoreVertIcon/>
      </div>
      <ResponsiveContainer width="100%" height={250}>
      <PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#9B59B6" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#2980B9" label />
</PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

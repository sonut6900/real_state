import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const OverView = ({ name }) => {
  return (
    <div
      className={`rounded-borderRedius p-3 lg:h-48 xl:h-auto shadow-md  hover:mt-1 text-textColor bg-white hover:text-white border duration-500 hover:bg-yellow-600 group`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`text-white bg-yellow-600 bg-opacity-90 p-3 rounded-borderRedius w-min`}
        >
          <PeopleOutlinedIcon />
        </div>
        <div
          className={`flex items-center gap-2  text-xs text-green-500 group-hover:text-white w-min py-1 px-2 rounded-borderRedius `}
        >
          <ArrowUpwardOutlinedIcon fontSize="small" />
          <p className="">52%</p>
        </div>
      </div>
      <p className="font-semibold py-1 ">{name}</p>
      <h1 className="text-3xl mb-1 font-semibold text-appColor">5000</h1>
      <div
        className={`flex items-center gap-2 text-xs w-min py-1 rounded-borderRedius `}
      >
        <ScatterPlotIcon fontSize="small" />
        <p className="">Availabe</p>
      </div>
    </div>
  );
};

export default OverView;

import Notebar from "../../component/card/Notebar";
import OverView from "../../component/card/OverView";
import Barchart from "../../component/chart/Barchart";
import PieChart from "../../component/chart/PieChart";


const Dashboard = () => {
  return (
    <>
      <div className="w-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4  ">
        <div className="col-span-2">
          <OverView name="Total Tenet" classname="bg-red-400" />
        </div>
        <div className="col-span-2">
          <OverView name="Total Properties" classname="bg-red-400" />
        </div>
        <div className="col-span-2">
        <OverView name="Total Maintenance" classname="bg-red-400" />
        </div>
        <div className="col-span-2">
        <OverView name="Total Payments" classname="bg-red-400" />
        </div>
        <div className=" col-span-4">
          <Notebar />
        </div>
        <div className="col-span-4 lg:col-span-6">
          <Barchart />
        </div>
        <div className="col-span-3">
          <PieChart/>
        </div>
        <div className="col-span-3">
          <Barchart />
        </div>{" "}
        <div className="col-span-4">
          <Barchart />
        </div>{" "}
        <div className="col-span-4">
          <Barchart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import PathRoute from "../../router/PathRoute";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handelSidebar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={handelSidebar}
        className="text-white p-1 m-3 rounded-full fixed top-0 md:hidden z-30 "
      >
        {isOpen ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div
        className={`md:w-52 lg:w-64 w-64 h-screen fixed z-20 bg-appColor bg-BgsvgBuilding bg-contain bg-no-repeat bg-left-bottom  md:block ${
          isOpen
            ? "hidden"
            : "block duration-300 delay-400"
        }`}
      >
        <div className=" text-center text-2xl text-white font-semibold m-8  ">
          <WidgetsOutlinedIcon />
          <h1>Real Estate</h1>
        </div>
        <div onClick={handelSidebar} className="pl-5">
          <Link
            to="/"
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-300 ease-in-out"
          >
            <DashboardOutlinedIcon fontSize="small" />
            <h1 className="">Dashboard</h1>
          </Link>
          <Link
            to={PathRoute.Property}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <AddHomeWorkOutlinedIcon fontSize="small" />
            <h1 className="">Properties</h1>
          </Link>
          <Link
            to={PathRoute.Tenant}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <PeopleOutlineOutlinedIcon fontSize="small" />
            <h1 className=""> Tenants</h1>
          </Link>
          <Link
            to={PathRoute.Maintenance}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <ConstructionOutlinedIcon fontSize="small" />
            <h1 className="">Maintenance</h1>
          </Link>
          <Link
            to={PathRoute.PaymentInterface}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <CreditScoreOutlinedIcon fontSize="small" />
            <h1 className="">Payments</h1>
          </Link>
          <Link
            to={PathRoute.Report}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <AssessmentOutlinedIcon fontSize="small" />
            <h1 className="">Reports</h1>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <SensorOccupiedOutlinedIcon fontSize="small" />
            <h1 className="">Communication</h1>
          </Link>
          <Link
            to={PathRoute.SettingPage}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <TuneOutlinedIcon fontSize="small" />
            <h1 className="">Settings</h1>
          </Link>
          <Link
            to={PathRoute.Notification}
            className="flex items-center gap-4  hover:bg-appBgColor p-2 hover:text-appColor text-white  hover:text-primeryBgColor hover:font-semibold  rounded-l-2xl translate-x-0 duration-100 ease-out"
          >
            <NotificationsNoneOutlinedIcon fontSize="small" />
            <h1 className="">Notifications</h1>
          </Link>
          <div className=" bg-yellow-600 p-3 rounded-l-borderRedius text-white mt-4">
            <p className="p-1">Lorem, ipsum dolor.</p>
            <button
              type="button"
              className="bg-white px-3 py-1 rounded-borderRedius text-textColor"
            >
              Add+
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;

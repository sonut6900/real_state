import { BackButton } from "../../component/props/Buttons";
import DynamicTable from "../../component/table/DynamicTable";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import System from "./System";
import Preference from "./Preference";

const SettingPage = () => {
  const tableHead = ["user Name", "Address", "contact", "Action"];

  const tableData = [
    {
      item1: "Name 01",
      item2: "Address",
      item3: "01478966523",
      view: <VisibilityOutlinedIcon />,
      delete: <DeleteIcon />,
    },
    {
      item1: "Name 01",
      item2: "Address",
      item3: "0147852369",
      view: <VisibilityOutlinedIcon />,
      delete: <DeleteIcon />,
    },
  ];

  const [showSystem, setShowSystem] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [showPreference, setShowPreference] = useState(false);

  const handleSystem = () => {
    setShowSystem(true);
    setShowUser(false);
    setShowPreference(false);
  };
  const handleUser = () => {
    setShowSystem(false);
    setShowUser(true);
    setShowPreference(false);

  };
  const handlePreference = () => {
    setShowSystem(false);
    setShowUser(false)
    setShowPreference(true);

  };
  return (
    <div>
      <BackButton name="Setting" />
      <div className="w-full flex gap-4 container mx-auto py-4 cursor-pointer">
        <div
          onClick={handleSystem}
          className={`w-full hover:bg-appColor hover:text-white shadow-md rounded-md p-6 ${showSystem ? "bg-appColor text-white" : 'bg-white'}`}
        >
          <h2 className="text-lg font-semibold mb-4">System Settings</h2>
          <p>Customize system settings here.</p>
          {/* Add system settings options */}
        </div>
        <div onClick={handleUser} 
          className={`w-full hover:bg-appColor hover:text-white shadow-md rounded-md p-6 ${showUser ? "bg-appColor text-white" : 'bg-white'}`}
          >
          <h2 className="text-lg font-semibold mb-4">User Accounts</h2>
          <p>Customize User Account settings here.</p>
          {/* Add system settings options */}
        </div>
        <div 
        onClick={handlePreference}
          className={`w-full hover:bg-appColor hover:text-white shadow-md rounded-md p-6 ${showPreference ? "bg-appColor text-white" : 'bg-white'}`}
          >
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <p>Customize preferences settings here.</p>
          {/* Add system settings options */}
        </div>
      </div>
      <div>
        {showSystem && (
            <System/>
        )}
        {showUser && (
          <DynamicTable tableHead={tableHead} tableData={tableData} />
        )}
        {showPreference && (
            <Preference/>
        )}
      </div>
    </div>
  );
};

export default SettingPage;

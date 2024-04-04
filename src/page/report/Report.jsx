import { useState } from "react";
import { BackButton } from "../../component/props/Buttons";
import Occupancy from "./Occupancy";
import RentRoll from "./RentRoll";
import MaintenanceActivity from "./MaintenanceActivity";
import TenantLedger from "./TenantLedger";
import LeaseExpiration from "./LeaseExpiration";

const Report = () => {
    const [showOccupancy, setShowOccupancy] = useState(true);
    const [showRentRoll, setShowRentRoll] = useState(false);
    const [showMaintain, setShowMaintain] = useState(false);
    const [showTenant, setShowTenant] = useState(false);
    const [showLease, setShowLease] = useState(false);




    const handleToggleOccupancy = () => {
        setShowOccupancy(true);
        setShowRentRoll(false);
        setShowMaintain(false);
        setShowTenant(false);
        setShowLease(false);

    };

    const handleToggleRentRoll = () => {
        setShowOccupancy(false);
        setShowRentRoll(true);
        setShowMaintain(false);
        setShowTenant(false);
        setShowLease(false);

    };
    const handleToggleMaintane = () => {
        setShowOccupancy(false);
        setShowRentRoll(false);
        setShowMaintain(true);
        setShowTenant(false);
        setShowLease(false);

    };
    const handleToggleTenant = () => {
        setShowTenant(true);
        setShowOccupancy(false);
        setShowRentRoll(false);
        setShowMaintain(false);
        setShowLease(false);


    };
    const handleToggleLease = () => {
        setShowTenant(false);
        setShowOccupancy(false);
        setShowRentRoll(false);
        setShowMaintain(false);
        setShowLease(true);


    };

    return (
        <div>
            <div>
                <BackButton name="Report" />
                <div className="flex flex-wrap w-full mt-2 cursor-pointer rounded-primeryBRedius bg-purple-800 text-white justify-center">
                    <button onClick={handleToggleOccupancy} className={`p-3 font-semibold   hover:bg-blue-200 hover:shadow-md ${showOccupancy ? 'bg-white text-purple-700 shadow-lg' : ''}`}>Occupancy</button>
                    <button onClick={handleToggleRentRoll} className={`p-3 font-semibold   hover:bg-blue-200 hover:shadow-md ${showRentRoll ? 'bg-white text-purple-700 shadow-lg' : ''}`}>Rent Roll</button>
                    <button onClick={handleToggleMaintane} className={`p-3 font-semibold   hover:bg-blue-200 hover:shadow-md ${showMaintain ? 'bg-white text-purple-700 shadow-lg' : ''}`}>Maintenance Activity</button>
                    <button onClick={handleToggleTenant} className={`p-3 font-semibold   hover:bg-blue-200 hover:shadow-md ${showTenant ? 'bg-white text-purple-700 shadow-lg' : ''}`}>Tenant Ledger</button>
                    <button onClick={handleToggleLease} className={`p-3 font-semibold   hover:bg-blue-200 hover:shadow-md ${showLease ? 'bg-white text-purple-700 shadow-lg' : ''}`}>Lease Report</button>


                </div>
            </div>
            <div>
                {showOccupancy && <Occupancy />}
                {showRentRoll && <RentRoll />}
                {showMaintain && <MaintenanceActivity/>}
                {showTenant && <TenantLedger/>}
                {showLease && <LeaseExpiration/>}


            </div>
        </div>
    );
};

export default Report;

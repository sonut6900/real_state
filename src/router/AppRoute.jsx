import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PathRoute from "../router/PathRoute";
import Navbar from "../component/base/Navbar";
import Dashboard from "../page/dashboard/Dashboard";
import Sidebar from "../component/base/Sidebar";
import Property from "../page/properties/Property";
import AddProperty from "../page/properties/AddProperty";
import Tenant from "../page/tenants/Tenant";
import AddTenant from "../page/tenants/AddTenant";
import Maintenance from "../page/maintenance/Maintenance";
import AddMaintenance from "../page/maintenance/AddMaintenance";
import TrackMaintenance from "../page/maintenance/TrackMaintenance";
import Report from "../page/report/Report";
import Notification from "../page/notificarion/Notification";
import Registration from "../page/auth/Registration";
import { useState } from "react";
import Login from "../page/auth/Login";
import PaymentInterface from "../page/payment/PaymentInterface";
import SettingPage from "../page/setting/SettingPage";

const AppRoute = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <>
      {isLogged ? (
        <>
          <Router>
            <div className="bg-appBgColor flex ">
              <div className=" top-0 h-screen">
                <Sidebar />
              </div>
              <div className="w-full lg:ml-64 md:ml-52">
                <div className="">
                  <Navbar />
                </div>
                <div className="px-3 py-6 mt-11">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* properties */}
                    <Route
                      path={PathRoute.Property}
                      element={<Property />}
                    ></Route>
                    <Route
                      path={PathRoute.AddProperty}
                      element={<AddProperty />}
                    ></Route>
                    {/* Tenants */}
                    <Route path={PathRoute.Tenant} element={<Tenant />}></Route>
                    <Route
                      path={PathRoute.AddTenant}
                      element={<AddTenant />}
                    ></Route>
                    {/* Maintenance */}
                    <Route
                      path={PathRoute.Maintenance}
                      element={<Maintenance />}
                    ></Route>
                    <Route
                      path={PathRoute.AddMaintenance}
                      element={<AddMaintenance />}
                    ></Route>
                    <Route
                      path={PathRoute.TrackMaintenance}
                      element={<TrackMaintenance />}
                    ></Route>
                    {/* Notification */}
                    <Route
                      path={PathRoute.Notification}
                      element={<Notification/>}
                    ></Route>
                    {/* Report */}
                    <Route
                      path={PathRoute.Report}
                      element={<Report/>}
                    ></Route>
                    {/* Payment */}
                    <Route
                      path={PathRoute.PaymentInterface}
                      element={<PaymentInterface/>}
                    ></Route>
                    {/* Setting */}
                    <Route
                      path={PathRoute.SettingPage}
                      element={<SettingPage/>}
                    ></Route>

                  </Routes>
                </div>
              </div>
            </div>
          </Router>
        </>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Registration />}
            ></Route>
             {/* <Route
              path="/"
              element={<Login/>}
            ></Route> */}
          </Routes>
        </Router>
      )}
    </>
  );
};

export default AppRoute;

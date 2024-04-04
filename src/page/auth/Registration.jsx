import welcome from "../../img/welcome.svg";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

const Registration = () => {
  return (
    <div>
        <img src={welcome} alt="" className=" absolute right-0 bottom-0 pr-2 hidden md:block "/>
      <div className="md:flex justify-center md:px-4 lg:px-32 md:mt-20">
        <div className="relative bg-gradient-to-tr from-purple-700 to-violet-800 w-full md:rounded-l-primeryBRedius shadow-lg border">
        <div className=" items-center text-2xl text-white font-semibold m-8  ">
          <WidgetsOutlinedIcon />
          <h1>Real Estate</h1>
        </div>
            <div className="text-white px-12 z-20">
              <h2 className="text-5xl font-semibold mb-2">Welcome...</h2>
              <p className="mb-4 mr-5">
                Welcome to our registration page! Please fill out the form below
                to register.
              </p>
            </div>
            <img src={welcome} alt="welcom" className="w-1/2 pr-2 absolute bottom-0 right-0" />
        </div>
        <div className="w-full rounded-r-primeryBRedius shadow-lg z-10  bg-white border">
          <form className="lg:px-24 md:px-10 px-6 py-12">
            <div className="text-center pb-10">
            <h2 className=" text-3xl font-semibold text-purple-800 mb-4">Register</h2>
              <p>Please Register Yourself</p>
            </div>
            <div className="mb-4">
              <label
                className="block text-textColor text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                 Name
              </label>
              <input
                className=" bg-transparent border-b-2  shadow-md border-purple-800 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ring-1 ring-purple-800 "
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" bg-transparent border-b-2  shadow-md border-purple-800 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ring-1 ring-purple-800 "
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" bg-transparent border-b-2  shadow-md border-purple-800 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ring-1 ring-purple-800 "
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className=" bg-transparent border-b-2  shadow-md border-purple-800 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ring-1 ring-purple-800 "
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-primeryBRedius focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

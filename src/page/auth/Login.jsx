import welcome from "../../img/welcome.svg";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

const Login = () => {
  return (
    <div>
        <img src={welcome} alt="" className=" absolute right-0 bottom-0 pr-2 hidden lg:block "/>
      <div className="md:flex justify-center md:px-2 lg:px-32  md:mt-12">
        <div className="relative  bg-gradient-to-tr from-purple-700 to-violet-800 w-full md:rounded-l-primeryBRedius shadow-lg border">
        <div className=" items-center text-2xl text-white font-semibold m-8  ">
          <WidgetsOutlinedIcon />
          <h1>Real Estate</h1>
        </div>
            <div className="text-white px-12">
              <h2 className="text-5xl font-semibold mb-2">Login</h2>
              <p className="mb-4">
                Welcome to our registration page! Please fill out the form below
                to register.
              </p>
            </div>
            <img src={welcome} alt="welcom" className="w-1/2 pr-2 absolute bottom-0 right-0" />
        </div>
        <div className="w-full rounded-r-primeryBRedius shadow-lg z-10  bg-white border">
          <form className="md:px-24 px-5 py-12 mb-24">
            <div className="text-center md:pb-10 md:mb-24">
            <h2 className=" text-3xl font-semibold text-purple-800 mb-4">Login</h2>
              <p>Login Here</p>
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
            
            <div className="flex  items-center justify-end">
              <button
                className="bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-primeryBRedius focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

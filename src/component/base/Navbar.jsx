import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import profile from "../../img/profile.png";

const Navbar = () => {
  return (
    <>
      <nav className="fixed md:rounded-t-xl w-full top-0 right-0 z-10 bg-appColor rounded-b-3xl p-2 shadow-md">
        <div className="flex justify-end gap-3 items-center text-white">
          <SearchIcon />
          <form action="search" className="hidden md:block">
            <input type="search" className="p-1 rounded-borderRedius" />
          </form>
          <div>
            <NotificationsOutlinedIcon />
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-white font-semibold px-2 hidden md:block">
              David Arnold
            </h1>
            <div className=" text-2xl text-textColor">
              <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

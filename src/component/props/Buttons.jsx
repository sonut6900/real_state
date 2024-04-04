/* eslint-disable react/prop-types */
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Link, useNavigate } from "react-router-dom";

export const AddButton = ({ name,href }) => {
  return (
    <div>
      <Link to={href}>
        <button
          type="button"
          className="bg-appColor hover:bg-blue-950 text-white px-4 py-2 rounded-borderRedius shadow-md cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-appColor to-blue-700 leading-pro "
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export const FormButton = ({ name, className="bg-violet-800" }) => {
  return (
    <div>
      <button
        type="button"
        className={`${className}  hover:bg-opacity-80 active:ring-2 text-white text-sm font-semibold px-4 py-2 rounded-borderRedius shadow-md cursor-pointer active:opacity-85 hover:shadow-soft-xs `}
      >
        {name}
      </button>
    </div>
  );
};

export const BackButton = ({name}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-4 text-xl font-semibold text-left " onClick={() => navigate(-1)}>
          <div className="hover:opacity-50 rounded-full pb-1 px-2 text-center">
            <KeyboardBackspaceOutlinedIcon />
          </div>
          <h1>{name}</h1>
      </div>
    </div>
  );
};
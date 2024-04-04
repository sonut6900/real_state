/* eslint-disable react/prop-types */
// import PathRoute from "../../router/PathRoute";
import { AddButton, BackButton } from "../../component/props/Buttons";

const TableCard = ({tableName,href}) => {
  return (
    <div>
      <div className="flex justify-between items-center shadow-md rounded-borderRedius bg-white p-1">
        <div className="flex items-center justify-center   rounded-borderRedius px-2">
          <BackButton/>
          <h1 className=" text-xl p-3 font-semibold ">
            {tableName}
          </h1>
        </div>
        <div className='mx-2'>
            <AddButton name="+ Add" href={href}/>
        </div>
      </div>
    </div>
  );
};

export default TableCard;

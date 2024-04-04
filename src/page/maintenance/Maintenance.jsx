import PathRoute from "../../router/PathRoute"
import TableCard from "../../component/card/TableCard";
import DynamicTable from "../../component/table/DynamicTable";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import TimelineIcon from '@mui/icons-material/Timeline';


const Maintenance = () => {
  const tableHead =["Property Name","Address","Status","Rental Income","Action"]

  const tableData=[{
    item1: "Name 01",
    item2: "Address",
    item3: "Status",
    item4: "9999",
    view: <VisibilityOutlinedIcon/>,
    delete:<DeleteIcon/>,
    track: <TimelineIcon/>
  },
  {
    item1: "Name 01",
    item2: "Address",
    item3: "Status",
    item4: "9999",
    view: <VisibilityOutlinedIcon/>,
    delete:<DeleteIcon/>,
    track: <TimelineIcon/>
  },
  
]
  return (
    <div>
      <div className="mb-4">
        <TableCard tableName="Maintenance" href={PathRoute.AddMaintenance}/>
      </div>
      <DynamicTable tableHead={tableHead} tableData={tableData} track={PathRoute.TrackMaintenance}/>
    </div>
  );
};

export default Maintenance;

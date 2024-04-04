import PathRoute from "../../router/PathRoute"
import TableCard from "../../component/card/TableCard";
import DynamicTable from "../../component/table/DynamicTable";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const Property = () => {
  const tableHead =["Property Name","Address","Status","Rental Income","Action"]

  const tableData=[
    {
    item1: "Name 01",
    item2: "Address",
    item3: "Status",
    item4: "9999",
    view: <VisibilityOutlinedIcon/>,
    delete:<DeleteIcon/>
  },
  {
    item1: "Name 01",
    item2: "Address",
    item3: "Status",
    item4: "9999",
    view: <VisibilityOutlinedIcon/>,
    delete:<DeleteIcon/>
  },
  {
    item1: "Name 01",
    item2: "Address",
    item3: "Status",
    item4: "9999",
    view: <VisibilityOutlinedIcon/>,
    delete:<DeleteIcon/>
  },
]
  return (
    <div>
      <div className="mb-4">
        <TableCard tableName="Properties" href={PathRoute.AddProperty}/>
      </div>
      <DynamicTable tableHead={tableHead} tableData={tableData} />
    </div>
  );
};

export default Property;

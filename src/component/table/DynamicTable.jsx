import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DynamicTable = ({ tableHead, tableData,track }) => {
  console.log("tableData", tableData.item1);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md rounded-borderRedius">
        <table className="w-full text-sm text-left rtl:text-right text-textColor">
          <caption className="p-5 text-xl font-semibold text-left rtl:text-right text-white bg-gradient-to-tr from-blue-800 to-purple-700">
            Our Properties
            <h2 className="text-sm">Total - 100</h2>
            <p className="mt-1 text-sm font-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab
              tenetur minus minima dolorum exercitationem accusamus quaerat
              voluptates sunt molestias?
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-white border-b-2 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No.
              </th>
              {Object.entries(tableHead).map(([key, value]) => (
                <th scope="col" key={key} className="px-6 py-3">
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="bg-white border-b-2">
                <td className="px-6 py-2">{index + 1}</td>
                {data.item1 ? (
                  <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                    {data.item1}
                  </td>
                ) : null}
                {data.item2 ? (
                  <td className="px-6 py-2">{data.item2}</td>
                ) : null}
                {data.item3 ? (
                  <td className="px-6 py-2">{data.item3}</td>
                ) : null}
                {data.item4 ? (
                  <td className="px-6 py-2">&#163; {data.item4}</td>
                ) : null}
                {data.view ? (
                  <td className="px-6 py-2">
                    <div className="flex gap-2" >
                      {data.view ? (
                        <Link to={track}>
                        <div
                          className="hover:text-slate-400"
                          title="View"
                        >
                          {data.view}
                        </div>
                      </Link>
                      ) : null}
                      {data.track ? (
                        <Link to={track}>
                        <div
                          className="hover:text-slate-400"
                          title="Track"
                        >
                          {data.track}
                        </div>
                      </Link>
                      ) : null}
                      {data.delete ? (
                        <Link to={track}>
                        <div
                          className="hover:text-slate-400"
                          title="Delete"
                        >
                          {data.delete}
                        </div>
                      </Link>
                      ) : null}
                      
                    </div>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;

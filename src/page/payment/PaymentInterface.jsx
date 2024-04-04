import { useState } from "react";
import TableCard from "../../component/card/TableCard";

const PaymentInterface = () => {
    const [selectedProperty, setSelectedProperty] = useState('');
    const [pendingDues, setPendingDues] = useState([]);

    const handlePropertySelect = (property) => {
        setSelectedProperty(property);

        const samplePendingDues = [
            { id: 1, name: 'Rent', amount: 1000 },
            { id: 2, name: 'Maintenance', amount: 500 },
            // Add more pending dues as needed
        ];
        setPendingDues(samplePendingDues);
    };

    const handlePaymentEntry = (due) => {
        console.log(`Payment entry for ${due.name} (${due.amount})`);
    };

  return (
    <div>
        <div className="container mx-auto ">
            <TableCard tableName="Payment Entry"/>
            {/* <BackButton name="Payment Entry"/> */}
            <div className="grid  gap-4 mt-4">
                {/* Property selection section */}
                <div className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-2">Select Property</h2>
                    <select
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={selectedProperty}
                        onChange={(e) => handlePropertySelect(e.target.value)}
                    >
                        <option value="">Select Property</option>
                        <option value="Property A">Property A</option>
                        <option value="Property B">Property B</option>
                    </select>
                </div>

                {/* Pending dues section */}
                <div className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-2">Pending Dues</h2>
                    {pendingDues.length > 0 ? (
                        <ul>
                            {pendingDues.map((due) => (
                                <li key={due.id} className="flex justify-between items-center py-2 border-b border-gray-300">
                                    <span>{due.name}</span>
                                    <span>&#163;{due.amount}</span>
                                    <button
                                        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                                        onClick={() => handlePaymentEntry(due)}
                                    >
                                        Pay
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No pending dues for the selected property</p>
                    )}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default PaymentInterface;

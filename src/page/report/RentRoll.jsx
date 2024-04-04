
const RentRoll = () => {
    const tenants = [
        {
            id: 1,
            name: 'John Doe',
            property: 'Property A',
            unit: 'Unit 101',
            rentAmount: 1000,
            paymentStatus: 'Paid',
            dueDate: '2024-03-01'
        },
        {
            id: 2,
            name: 'Jane Smith',
            property: 'Property B',
            unit: 'Unit 202',
            rentAmount: 1200,
            paymentStatus: 'Late',
            dueDate: '2024-03-01'
        },
        {
            id: 2,
            name: 'Jane Smith',
            property: 'Property B',
            unit: 'Unit 202',
            rentAmount: 1200,
            paymentStatus: 'Late',
            dueDate: '2024-03-01'
        },
        {
            id: 2,
            name: 'Jane Smith',
            property: 'Property B',
            unit: 'Unit 202',
            rentAmount: 1200,
            paymentStatus: 'Late',
            dueDate: '2024-03-01'
        },
    ];
  return (
    <div className="container mx-auto py-8">
    <div className="overflow-x-auto  bg-white rounded-xl">
        <table className="min-w-full border-collapse border border-gray-200 ">
            <thead>
                <tr className="bg-violet-700 text-white border-b">
                    <th className="px-4 py-2">Tenant Name</th>
                    <th className="px-4 py-2">Property/Unit Rented</th>
                    <th className="px-4 py-2">Rent Amount</th>
                    <th className="px-4 py-2">Payment Status</th>
                    <th className="px-4 py-2">Due Date</th>
                </tr>
            </thead>
            <tbody>
                {tenants.map(tenant => (
                    <tr key={tenant.id} className="border-b text-center border-gray-200">
                        <td className="px-4 py-2">{tenant.name}</td>
                        <td className="px-4 py-2">{tenant.property} - {tenant.unit}</td>
                        <td className="px-4 py-2">&#163;{tenant.rentAmount}</td>
                        <td className={`px-4 py-2 ${tenant.paymentStatus === 'Late' ? 'text-red-500' : 'text-green-500'}`}>
                            {tenant.paymentStatus}
                        </td>
                        <td className="px-4 py-2">{tenant.dueDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default RentRoll

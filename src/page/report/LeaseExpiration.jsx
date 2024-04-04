
const LeaseExpiration = () => {
    const leases = [
        {
            id: 1,
            tenantName: 'John Doe',
            property: 'Property A',
            unit: 'Unit 101',
            leaseEndDate: '2024-04-30',
            renewalOptions: ['Renew for 1 year', 'Renew for 6 months', 'Do not renew']
        },
        {
            id: 1,
            tenantName: 'John Doe',
            property: 'Property A',
            unit: 'Unit 101',
            leaseEndDate: '2024-04-30',
            renewalOptions: ['Renew for 1 year', 'Renew for 6 months', 'Do not renew']
        },
        {
            id: 1,
            tenantName: 'John Doe',
            property: 'Property A',
            unit: 'Unit 101',
            leaseEndDate: '2024-04-30',
            renewalOptions: ['Renew for 1 year', 'Renew for 6 months', 'Do not renew']
        },
        {
            id: 2,
            tenantName: 'Jane Smith',
            property: 'Property B',
            unit: 'Unit 202',
            leaseEndDate: '2024-05-15',
            renewalOptions: ['Renew for 1 year', 'Renew for 2 years', 'Do not renew']
        },
        // Add more leases as needed
    ];
  return (
    <div>
         <div className="container mx-auto py-8">
            <div className="overflow-x-auto bg-white rounded-xl">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-violet-700 text-white border-b">
                            <th className="px-4 py-2">Tenant Name</th>
                            <th className="px-4 py-2">Property/Unit Leased</th>
                            <th className="px-4 py-2">Lease End Date</th>
                            <th className="px-4 py-2">Renewal Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leases.map(lease => (
                            <tr key={lease.id} className="border-b text-center border-gray-200">
                                <td className="px-4 py-2">{lease.tenantName}</td>
                                <td className="px-4 py-2">{lease.property} - {lease.unit}</td>
                                <td className="px-4 py-2">{lease.leaseEndDate}</td>
                                <td className="px-4 py-2">
                                    <ul>
                                        {lease.renewalOptions.map(option => (
                                            <li key={option}>{option}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default LeaseExpiration

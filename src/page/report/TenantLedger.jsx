
const TenantLedger = () => {
    const tenantLedger = [
        {
            tenantId: 1,
            tenantName: 'John Doe',
            rentPayments: [
                { id: 1, date: '2024-03-01', amount: 1000 },
                { id: 2, date: '2024-02-01', amount: 1000 }
            ],
            lateFees: [
                { id: 1, date: '2024-03-15', amount: 50 }
            ],
            securityDeposit: 1000,
            otherCharges: [
                { id: 1, description: 'Maintenance Fee', amount: 50 }
            ],
            credits: [
                { id: 1, description: 'Discount', amount: 100 }
            ]
        },
        {
            tenantId: 2,
            tenantName: 'Jane Smith',
            rentPayments: [
                { id: 1, date: '2024-03-01', amount: 1200 },
                { id: 2, date: '2024-02-01', amount: 1200 }
            ],
            lateFees: [],
            securityDeposit: 1500,
            otherCharges: [
                { id: 1, description: 'Utility Charge', amount: 75 }
            ],
            credits: []
        }
    ];
  return (
    <div className="container mx-auto py-8">
            {tenantLedger.map(tenant => (
                <div key={tenant.tenantId} className="bg-white shadow-md rounded-md mb-6 md:p-6 p-3 border-2">
                    <h2 className="text-lg font-semibold mb-2 text-white bg-purple-600 p-2 rounded-xl">{tenant.tenantName}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Rent Payments</h3>
                            <ul>
                                {tenant.rentPayments.map(payment => (
                                    <li key={payment.id}>{payment.date}: &#163;{payment.amount}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Late Fees</h3>
                            <ul>
                                {tenant.lateFees.length > 0 ?
                                    tenant.lateFees.map(fee => (
                                        <li key={fee.id}>{fee.date}: &#163;{fee.amount}</li>
                                    )) :
                                    <li>No late fees</li>
                                }
                            </ul>
                        </div>
                        <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Security Deposit</h3>
                        <p>&#163;{tenant.securityDeposit}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Other Charges</h3>
                        <ul>
                            {tenant.otherCharges.map(charge => (
                                <li key={charge.id}>{charge.description}: &#163;{charge.amount}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Credits</h3>
                        <ul>
                            {tenant.credits.map(credit => (
                                <li key={credit.id}>{credit.description}: &#163;{credit.amount}</li>
                            ))}
                        </ul>
                    </div>
                    </div>
                    
                </div>
            ))}
        </div>
  )
}

export default TenantLedger

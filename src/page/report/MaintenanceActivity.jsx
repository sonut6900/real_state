
const MaintenanceActivity = () => {
    const maintenanceData = {
        totalRequests: 20,
        tasksPerformed: [
            { id: 1, type: 'Plumbing Repair', count: 8 },
            { id: 2, type: 'Electrical Maintenance', count: 5 },
            { id: 3, type: 'Appliance Replacement', count: 4 },
            { id: 4, type: 'Painting', count: 3 }
        ],
        requestStatus: {
            open: 5,
            pending: 10,
            resolved: 5
        },
        totalCost: 5000
    };

  return (
    <div>
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border-t-4 border-purple-700 rounded-primeryBRedius shadow-md p-4">
                    <h2 className="text-lg font-semibold mb-2">Summary</h2>
                    <p>Total Maintenance Requests: {maintenanceData.totalRequests}</p>
                    <p>Total Cost: &#163;{maintenanceData.totalCost}</p>
                </div>

                <div className="bg-white border-t-4 border-purple-700 rounded-primeryBRedius shadow-md p-4">
                    <h2 className="text-lg font-semibold mb-2">Maintenance Tasks</h2>
                    <ul>
                        {maintenanceData.tasksPerformed.map(task => (
                            <li key={task.id}>{task.type}: {task.count}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2">Request Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(maintenanceData.requestStatus).map(([status, count]) => (
                        <div key={status} className="bg-white border-2 border-purple-700 shadow-md rounded-primeryBRedius p-4">
                            <p className="font-semibold text-blue-700">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
                            <p >{count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default MaintenanceActivity

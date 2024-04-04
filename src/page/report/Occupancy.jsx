
const Occupancy = () => {
    const properties = [
        {
            id: 1,
            name: 'Property A',
            totalUnits: 20,
            vacantUnits: 5,
            occupiedUnits: 15,
            upcomingVacancies: 3
        },
        {
            id: 2,
            name: 'Property B',
            totalUnits: 30,
            vacantUnits: 10,
            occupiedUnits: 20,
            upcomingVacancies: 2
        },
        {
            id: 2,
            name: 'Property B',
            totalUnits: 30,
            vacantUnits: 10,
            occupiedUnits: 20,
            upcomingVacancies: 2
        },
    ];
  return (
    <div>
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.map(property => (
                    <div key={property.id} className="bg-white shadow-md rounded-md p-4">
                        <h2 className="text-lg font-semibold mb-2">{property.name}</h2>
                        <p>Total Units: {property.totalUnits}</p>
                        <p>Vacant Units: {property.vacantUnits}</p>
                        <p>Occupied Units: {property.occupiedUnits}</p>
                        <p>Upcoming Vacancies: {property.upcomingVacancies}</p>
                        <button className=" w-full bg-purple-800 p-1 rounded-md mt-3 text-white">view</button>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Occupancy

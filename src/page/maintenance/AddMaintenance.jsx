import { FormButton } from "../../component/props/Buttons";
import FormHead from "../../component/card/FormHead";

const AddMaintenance = () => {
  return (
    <div className="bg-Bgsociety bg-left-bottom bg-fixed bg-repeat-x bg-blue-50 py-10">
      <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
        <FormHead formName="Maintenance Request Details" />
        <form className="max-w-lg mx-auto p-4">
          {/* Description of maintenance work */}
          <div className="mb-4">
            <label
              htmlFor="maintenanceDescription"
              className="block text-textColor font-bold mb-2"
            >
              Description of Maintenance Work:
            </label>
            <textarea
              id="maintenanceDescription"
              name="maintenanceDescription"
              rows="4"
              className="form-textarea rounded-md p-1 shadow-sm w-full"
              placeholder="Enter description of maintenance work"
              required
            ></textarea>
          </div>
          {/* Property/unit affected by maintenance */}
          <div className="mb-4">
            <label
              htmlFor="propertyAffected"
              className="block text-textColor font-bold mb-2"
            >
              Property/Unit Affected:
            </label>
            {/* You can replace this input with a lookup for active properties */}
            <input
              type="text"
              id="propertyAffected"
              name="propertyAffected"
              className="form-input rounded-md p-1 shadow-sm w-full"
              placeholder="Enter affected property/unit"
              required
            />
          </div>
          {/* Priority level */}
          <div className="mb-4">
            <label
              htmlFor="priorityLevel"
              className="block text-textColor font-bold mb-2"
            >
              Priority Level:
            </label>
            <select
              id="priorityLevel"
              name="priorityLevel"
              className="form-select rounded-md p-1 shadow-sm w-full"
              required
            >
              <option value="">Select</option>
              <option value="urgent">Urgent</option>
              <option value="routine">Routine</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* Estimated cost */}
          <div className="mb-4">
            <label
              htmlFor="estimatedCost"
              className="block text-textColor font-bold mb-2"
            >
              Estimated Cost:
            </label>
            <input
              type="number"
              id="estimatedCost"
              name="estimatedCost"
              className="form-input rounded-md p-1 shadow-sm w-full"
              placeholder="Enter estimated cost"
              required
            />
          </div>
          {/* Due date */}
          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="block text-textColor font-bold mb-2"
            >
              Due Date:
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="form-input rounded-md p-1 shadow-sm w-full"
              required
            />
          </div>
          {/* Status */}
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-textColor font-bold mb-2"
            >
              Status:
            </label>
            <select
              id="status"
              name="status"
              className="form-select rounded-md p-1 shadow-sm w-full"
              required
            >
              <option value="">Select</option>
              <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/* Previous and Next Buttons */}
          <div className="flex justify-between mt-6">
            <div>
              <FormButton name="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMaintenance;

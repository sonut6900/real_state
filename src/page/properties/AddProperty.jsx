import { useState } from "react";
import { FormButton } from "../../component/props/Buttons";
import FormHead from "../../component/card/FormHead";
import FormStepper from "../../component/props/FormStepper";

const AddProperty = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize your form data here
    propertyDetails: {},
    amenities: {},
    rentalInformation: {},
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handlePropertyDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      propertyDetails: {
        ...prevData.propertyDetails,
        [name]: value,
      },
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        [name]: value,
      },
    }));
  };

  const handleRentalInformationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      rentalInformation: {
        ...prevData.rentalInformation,
        [name]: value,
      },
    }));
  };

  return (
    <div className="">
      <FormStepper />
      <div className="bg-Bgsociety bg-left-bottom bg-fixed h-screen bg-repeat-x bg-blue-50 p-5">
        {step === 1 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Properties Address" />
            <form className="px-5 py-5">
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block text-textColor font-semibold mb-2"
                >
                  Street Address:
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-textColor  font-semibold mb-2"
                >
                  City/Town:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="county"
                  className="block text-textColor  font-semibold mb-2"
                >
                  County:
                </label>
                <input
                  type="text"
                  id="county"
                  name="county"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="postcode"
                  className="block text-textColor  font-semibold mb-2"
                >
                  Postcode:
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              <div className=" flex justify-end mt-6">
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="md:p-5 max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md">
            <FormHead formName="Properties Details" />
            <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
              {/* Property Type */}
              <div className="mb-4">
                <label
                  htmlFor="propertyType"
                  className="block text-textColor font-semibold mb-2"
                >
                  Property Type:
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  className="form-select rounded-md p-1 shadow-sm w-full"
                >
                  <option value="">Select</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              {/* Number of Bedrooms */}
              <div className="mb-4">
                <label
                  htmlFor="bedrooms"
                  className="block text-textColor font-semibold mb-2"
                >
                  Number of Bedrooms:
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Number of Bathrooms */}
              <div className="mb-4">
                <label
                  htmlFor="bathrooms"
                  className="block text-textColor font-semibold mb-2"
                >
                  Number of Bathrooms:
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Floor Area */}
              <div className="mb-4">
                <label
                  htmlFor="floorArea"
                  className="block text-textColor font-semibold mb-2"
                >
                  Floor Area (sqft/sqm):
                </label>
                <input
                  type="number"
                  id="floorArea"
                  name="floorArea"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Furnishing */}
              <div className="mb-4">
                <label
                  htmlFor="furnishing"
                  className="block text-textColor font-semibold mb-2"
                >
                  Furnishing:
                </label>
                <select
                  id="furnishing"
                  name="furnishing"
                  className="form-select rounded-md p-1 shadow-sm w-full"
                >
                  <option value="">Select</option>
                  <option value="furnished">Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                  <option value="partFurnished">Part-furnished</option>
                </select>
              </div>
              {/* EPC Rating */}
              <div className="mb-4">
                <label
                  htmlFor="epcRating"
                  className="block text-textColor font-semibold mb-2"
                >
                  Energy Performance Certificate (EPC) Rating:
                </label>
                <input
                  type="text"
                  id="epcRating"
                  name="epcRating"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Submit Button */}
              <div className=" flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" className="bg-purple-800"/>
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Amenities" />
            <form className="max-w-lg mx-auto p-4">
              {/* Heating Type */}
              <div className="mb-4">
                <label
                  htmlFor="heatingType"
                  className="block text-textColor font-semibold mb-2"
                >
                  Heating Type:
                </label>
                <select
                  id="heatingType"
                  name="heatingType"
                  className="form-select rounded-md p-1 shadow-sm w-full"
                >
                  <option value="">Select</option>
                  <option value="centralHeating">Central Heating</option>
                  <option value="electricHeating">Electric Heating</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {/* Parking Availability */}
              <div className="mb-4">
                <label
                  htmlFor="parkingAvailability"
                  className="block text-textColor font-semibold mb-2"
                >
                  Parking Availability:
                </label>
                <select
                  id="parkingAvailability"
                  name="parkingAvailability"
                  className="form-select rounded-md p-1 shadow-sm w-full"
                >
                  <option value="">Select</option>
                  <option value="onStreet">On-street</option>
                  <option value="offStreet">Off-street</option>
                  <option value="garage">Garage</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {/* Garden/Yard */}
              <div className="mb-4">
                <label
                  htmlFor="gardenYard"
                  className="block text-textColor font-semibold mb-2"
                >
                  Garden/Yard:
                </label>
                <select
                  id="gardenYard"
                  name="gardenYard"
                  className="form-select rounded-md p-1 shadow-sm w-full"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {/* Additional Features */}
              <div className="mb-4">
                <label
                  htmlFor="additionalFeatures"
                  className="block text-textColor font-semibold mb-2"
                >
                  Additional Features:
                </label>
                <input
                  type="text"
                  id="additionalFeatures"
                  name="additionalFeatures"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Previous and Next Buttons */}
              <div className=" flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Description and Notes" />
            <form className="max-w-lg mx-auto p-4">
              {/* Property Description */}
              <div className="mb-4">
                <label
                  htmlFor="propertyDescription"
                  className="block text-textColor font-semibold mb-2"
                >
                  Property Description:
                </label>
                <textarea
                  id="propertyDescription"
                  name="propertyDescription"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter a brief overview highlighting key features"
                ></textarea>
              </div>
              {/* Specific Notes or Instructions */}
              <div className="mb-4">
                <label
                  htmlFor="specificNotes"
                  className="block text-textColor font-semibold mb-2"
                >
                  Specific Notes or Instructions:
                </label>
                <textarea
                  id="specificNotes"
                  name="specificNotes"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter any specific notes or instructions for tenants"
                ></textarea>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 5 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Property Images" />
            <form className="max-w-lg mx-auto p-4">
              {/* Living Room Images */}
              <div className="mb-4">
                <label
                  htmlFor="livingRoomImages"
                  className="block text-textColor font-semibold mb-2"
                >
                  Living Room Images:
                </label>
                <input
                  type="file"
                  id="livingRoomImages"
                  name="livingRoomImages"
                  accept="image/*"
                  multiple
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Kitchen Images */}
              <div className="mb-4">
                <label
                  htmlFor="kitchenImages"
                  className="block text-textColor font-semibold mb-2"
                >
                  Kitchen Images:
                </label>
                <input
                  type="file"
                  id="kitchenImages"
                  name="kitchenImages"
                  accept="image/*"
                  multiple
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Bedroom Images */}
              <div className="mb-4">
                <label
                  htmlFor="bedroomImages"
                  className="block text-textColor font-semibold mb-2"
                >
                  Bedroom Images:
                </label>
                <input
                  type="file"
                  id="bedroomImages"
                  name="bedroomImages"
                  accept="image/*"
                  multiple
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Additional Areas Images */}
              <div className="mb-4">
                <label
                  htmlFor="additionalAreasImages"
                  className="block text-textColor font-semibold mb-2"
                >
                  Additional Areas Images:
                </label>
                <input
                  type="file"
                  id="additionalAreasImages"
                  name="additionalAreasImages"
                  accept="image/*"
                  multiple
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 6 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Rental Information" />
            <form className="max-w-lg mx-auto p-4">
              {/* Monthly Rent Amount */}
              <div className="mb-4">
                <label
                  htmlFor="monthlyRentAmount"
                  className="block text-textColor font-semibold mb-2"
                >
                  Monthly Rent Amount:
                </label>
                <input
                  type="number"
                  id="monthlyRentAmount"
                  name="monthlyRentAmount"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter monthly rent amount"
                />
              </div>
              {/* Rent Payment Frequency */}
              <div className="mb-4">
                <label
                  htmlFor="rentPaymentFrequency"
                  className="block text-textColor font-semibold mb-2"
                >
                  Rent Payment Frequency:
                </label>
                <select
                  id="rentPaymentFrequency"
                  name="rentPaymentFrequency"
                  className="form-select rounded-md p-1 shadow-sm w-full"
                >
                  <option value="">Select</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {/* Security Deposit Amount */}
              <div className="mb-4">
                <label
                  htmlFor="securityDepositAmount"
                  className="block text-textColor font-semibold mb-2"
                >
                  Security Deposit Amount:
                </label>
                <input
                  type="number"
                  id="securityDepositAmount"
                  name="securityDepositAmount"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter security deposit amount"
                />
              </div>
              {/* Minimum Rental Period */}
              <div className="mb-4">
                <label
                  htmlFor="minimumRentalPeriod"
                  className="block text-textColor font-semibold mb-2"
                >
                  Minimum Rental Period:
                </label>
                <input
                  type="number"
                  id="minimumRentalPeriod"
                  name="minimumRentalPeriod"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter minimum rental period (if applicable)"
                />
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 7 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Availability" />
            <form className="max-w-lg mx-auto p-4">
              {/* Availability Date */}
              <div className="mb-4">
                <label
                  htmlFor="availabilityDate"
                  className="block text-textColor font-semibold mb-2"
                >
                  Availability Date:
                </label>
                <input
                  type="date"
                  id="availabilityDate"
                  name="availabilityDate"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Duration of Availability */}
              <div className="mb-4">
                <label
                  htmlFor="durationOfAvailability"
                  className="block text-textColor font-semibold mb-2"
                >
                  Duration of Availability (if known):
                </label>
                <input
                  type="text"
                  id="durationOfAvailability"
                  name="durationOfAvailability"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter duration of availability (if known)"
                />
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 8 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Legal Compliance" />
            <form className="max-w-lg mx-auto p-4">
              {/* Gas Safety Certificate Expiry Date */}
              <div className="mb-4">
                <label
                  htmlFor="gasSafetyCertificateExpiryDate"
                  className="block text-textColor font-semibold mb-2"
                >
                  Gas Safety Certificate Expiry Date:
                </label>
                <input
                  type="date"
                  id="gasSafetyCertificateExpiryDate"
                  name="gasSafetyCertificateExpiryDate"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Electrical Safety Certificate Expiry Date */}
              <div className="mb-4">
                <label
                  htmlFor="electricalSafetyCertificateExpiryDate"
                  className="block text-textColor font-semibold mb-2"
                >
                  Electrical Safety Certificate Expiry Date:
                </label>
                <input
                  type="date"
                  id="electricalSafetyCertificateExpiryDate"
                  name="electricalSafetyCertificateExpiryDate"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Smoke and Carbon Monoxide Alarm Compliance */}
              <div className="mb-4">
                <label className="block text-textColor font-semibold mb-2">
                  Smoke and Carbon Monoxide Alarm Compliance:
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="smokeAlarm"
                    name="smokeAlarm"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <label
                    htmlFor="smokeAlarm"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Smoke Alarm Installed and Working
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="carbonMonoxideAlarm"
                    name="carbonMonoxideAlarm"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <label
                    htmlFor="carbonMonoxideAlarm"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Carbon Monoxide Alarm Installed and Working
                  </label>
                </div>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 9 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Additional Details" />
            <form className="max-w-lg mx-auto p-4">
              {/* Council Tax Band */}
              <div className="mb-4">
                <label
                  htmlFor="councilTaxBand"
                  className="block text-textColor font-semibold mb-2"
                >
                  Council Tax Band:
                </label>
                <input
                  type="text"
                  id="councilTaxBand"
                  name="councilTaxBand"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter council tax band"
                />
              </div>
              {/* Nearest Transport Links */}
              <div className="mb-4">
                <label
                  htmlFor="nearestTransportLinks"
                  className="block text-textColor font-semibold mb-2"
                >
                  Nearest Transport Links:
                </label>
                <textarea
                  id="nearestTransportLinks"
                  name="nearestTransportLinks"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter nearest transport links (bus stops, train stations)"
                ></textarea>
              </div>
              {/* Local Amenities */}
              <div className="mb-4">
                <label
                  htmlFor="localAmenities"
                  className="block text-textColor font-semibold mb-2"
                >
                  Local Amenities:
                </label>
                <textarea
                  id="localAmenities"
                  name="localAmenities"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter local amenities (schools, shops, parks)"
                ></textarea>
              </div>
              {/* EEC */}
              <div className="mb-4">
                <label
                  htmlFor="eec"
                  className="block text-textColor font-semibold mb-2"
                >
                  EEC (Energy Efficiency Category):
                </label>
                <input
                  type="text"
                  id="eec"
                  name="eec"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter EEC"
                />
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 10 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Owner/Agent Details" />
            <form className="max-w-lg mx-auto p-4">
              {/* Name of Property Owner or Managing Agent */}
              <div className="mb-4">
                <label
                  htmlFor="ownerAgentName"
                  className="block text-textColor font-semibold mb-2"
                >
                  Name of Property Owner or Managing Agent:
                </label>
                <input
                  type="text"
                  id="ownerAgentName"
                  name="ownerAgentName"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter name of property owner or managing agent"
                />
              </div>
              {/* Contact Information */}
              <div className="mb-4">
                <label
                  htmlFor="contactInformation"
                  className="block text-textColor font-semibold mb-2"
                >
                  Contact Information:
                </label>
                <div className="flex">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded mr-2"
                    placeholder="Phone Number"
                  />
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 11 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Other Expenses" />
            <form className="max-w-lg mx-auto p-4">
              {/* Service Charge */}
              <div className="mb-4">
                <label
                  htmlFor="serviceCharge"
                  className="block text-textColor font-semibold mb-2"
                >
                  Service Charge (if applicable):
                </label>
                <input
                  type="number"
                  id="serviceCharge"
                  name="serviceCharge"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter service charge amount"
                />
              </div>
              {/* Ground Rent */}
              <div className="mb-4">
                <label
                  htmlFor="groundRent"
                  className="block text-textColor font-semibold mb-2"
                >
                  Ground Rent (if applicable):
                </label>
                <input
                  type="number"
                  id="groundRent"
                  name="groundRent"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter ground rent amount"
                />
              </div>
              {/* Other Recurring Expenses */}
              <div className="mb-4">
                <label
                  htmlFor="otherExpenses"
                  className="block text-textColor font-semibold mb-2"
                >
                  Any other recurring expenses related to the property:
                </label>
                <textarea
                  id="otherExpenses"
                  name="otherExpenses"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter any other recurring expenses related to the property"
                ></textarea>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 12 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Tenant Preferences (Optional)" />
            <form className="max-w-lg mx-auto p-4">
              {/* Ideal Tenant Profile */}
              <div className="mb-4">
                <label
                  htmlFor="idealTenantProfile"
                  className="block text-textColor font-semibold mb-2"
                >
                  Ideal Tenant Profile:
                </label>
                <textarea
                  id="idealTenantProfile"
                  name="idealTenantProfile"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter ideal tenant profile (e.g., professionals, students, families)"
                ></textarea>
              </div>
              {/* Specific Requirements or Restrictions */}
              <div className="mb-4">
                <label
                  htmlFor="specificRequirements"
                  className="block text-textColor font-semibold mb-2"
                >
                  Specific Requirements or Restrictions for Prospective Tenants:
                </label>
                <textarea
                  id="specificRequirements"
                  name="specificRequirements"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter any specific requirements or restrictions for prospective tenants"
                ></textarea>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 13 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Accessibility Features" />
            <form className="max-w-lg mx-auto p-4">
              {/* Information about Accessibility Features */}
              <div className="mb-4">
                <label className="block text-textColor font-semibold mb-2">
                  Information about Accessibility Features:
                </label>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="wheelchairAccess"
                    name="accessibilityFeatures"
                    value="Wheelchair access"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <label
                    htmlFor="wheelchairAccess"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Wheelchair Access
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="elevators"
                    name="accessibilityFeatures"
                    value="Elevators"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <label
                    htmlFor="elevators"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Elevators
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="ramps"
                    name="accessibilityFeatures"
                    value="Ramps"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <label
                    htmlFor="ramps"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Ramps
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="other"
                    name="accessibilityFeatures"
                    value="Other"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <label
                    htmlFor="other"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Other (Please specify)
                  </label>
                </div>
              </div>
              {/* Additional Information */}
              <div className="mb-4">
                <label
                  htmlFor="additionalAccessibilityInfo"
                  className="block text-textColor font-semibold mb-2"
                >
                  Additional Information:
                </label>
                <textarea
                  id="additionalAccessibilityInfo"
                  name="additionalAccessibilityInfo"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter additional information about accessibility features if needed"
                ></textarea>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}

        {step === 14 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Insurance Details" />
            <form className="max-w-lg mx-auto p-4">
              {/* Policy Number */}
              <div className="mb-4">
                <label
                  htmlFor="policyNumber"
                  className="block text-textColor font-semibold mb-2"
                >
                  Policy Number:
                </label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter policy number"
                />
              </div>
              {/* Expiry Date */}
              <div className="mb-4">
                <label
                  htmlFor="expiryDate"
                  className="block text-textColor font-semibold mb-2"
                >
                  Expiry Date:
                </label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                />
              </div>
              {/* Insurer Contact Information */}
              <div className="mb-4">
                <label
                  htmlFor="insurerContact"
                  className="block text-textColor font-semibold mb-2"
                >
                  Insurer Contact Information:
                </label>
                <textarea
                  id="insurerContact"
                  name="insurerContact"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter insurer contact information"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="legalDocuments"
                  className="block text-textColor font-semibold mb-2"
                >
                  Upload Legal Documents:
                </label>
                <input
                  type="file"
                  id="legalDocuments"
                  name="legalDocuments"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  accept=".pdf,.doc,.docx"
                  multiple
                />
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleNext}>
                  <FormButton name="Next" />
                </div>
              </div>
            </form>
          </div>
        )}
        {step === 15 && (
          <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
            <FormHead formName="Property History" />
            <form className="max-w-lg mx-auto p-4">
              {/* Previous Tenants */}
              <div className="mb-4">
                <label
                  htmlFor="previousTenants"
                  className="block text-textColor font-semibold mb-2"
                >
                  Previous Tenants:
                </label>
                <input
                  type="text"
                  id="previousTenants"
                  name="previousTenants"
                  className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
                  placeholder="Enter previous tenants"
                />
              </div>
              {/* Rental History */}
              <div className="mb-4">
                <label
                  htmlFor="rentalHistory"
                  className="block text-textColor font-semibold mb-2"
                >
                  Rental History:
                </label>
                <textarea
                  id="rentalHistory"
                  name="rentalHistory"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter rental history"
                ></textarea>
              </div>
              {/* Notable Events */}
              <div className="mb-4">
                <label
                  htmlFor="notableEvents"
                  className="block text-textColor font-semibold mb-2"
                >
                  Notable Events:
                </label>
                <textarea
                  id="notableEvents"
                  name="notableEvents"
                  className="form-textarea rounded-md p-1 shadow-sm w-full"
                  rows="4"
                  placeholder="Enter notable events related to the property"
                ></textarea>
              </div>
              {/* Previous and Next Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <div onClick={handlePrevious}>
                  <FormButton name="Previous" />
                </div>
                <div onClick={handleSubmit}>
                  <FormButton name="Submit" />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProperty;

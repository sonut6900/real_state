import { useState } from "react";
import { FormButton } from "../../component/props/Buttons";
import FormHead from "../../component/card/FormHead";
import FormStepper from "../../component/props/FormStepper";

const AddTenant = () => {
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
    <div className="bg-Bgsociety h-screen bg-left-bottom bg-fixed bg-repeat-x bg-blue-50">
      <FormStepper/>
      {step === 1 && (
        <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius border-2 border-appBgColor backdrop-blur-sm bg-white/40 shadow-md ">
        <FormHead formName="Personal Information" />
        <form className="max-w-lg mx-auto p-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-violet-700 font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-purple-800 font-bold mb-2">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nationality" className="block text-violet-700 font-bold mb-2">
              Nationality:
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              className="form-input p-1 w-full outline-none border-b-2  focus:ring-1 ring-purple-500 text-textColor rounded border-1 border-gray-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="occupation" className="block text-violet-700 font-bold mb-2">
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-violet-700 font-bold mb-2">
              Contact Information:
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded "
              placeholder="Phone number, email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="emergencyContact" className="block text-violet-700 font-bold mb-2">
              Emergency Contact Details:
            </label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded "
              placeholder="Emergency contact name, phone number"
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
       <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
       <FormHead formName="Residential Address" />
       <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
         {/* Current Address */}
         <div className="mb-4">
           <label htmlFor="currentAddress" className="block text-violet-700 font-bold mb-2">
             Current Address:
           </label>
           <input
             type="text"
             id="currentAddress"
             name="currentAddress"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Street Address"
           />
         </div>
         {/* City, State, and Pincode */}
         <div className="grid grid-cols-2 gap-4 mb-4">
           <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
             <label htmlFor="city" className="block text-violet-700 font-bold mb-2">
               City/Town:
             </label>
             <input
               type="text"
               id="city"
               name="city"
               className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
               placeholder="City/Town"
             />
           </div>
           <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
             <label htmlFor="state" className="block text-violet-700 font-bold mb-2">
               State:
             </label>
             <input
               type="text"
               id="state"
               name="state"
               className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
               placeholder="State"
             />
           </div>
           <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
             <label htmlFor="pincode" className="block text-violet-700 font-bold mb-2">
               Pincode:
             </label>
             <input
               type="text"
               id="pincode"
               name="pincode"
               className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
               placeholder="Pincode"
             />
           </div>
         </div>
         {/* Previous Address */}
         <div className="mb-4">
           <label htmlFor="previousAddress" className="block text-violet-700 font-bold mb-2">
             Previous Address (if applicable):
           </label>
           <input
             type="text"
             id="previousAddress"
             name="previousAddress"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Previous Address"
           />
         </div>
         {/* Previous and Next Buttons */}
         <div className=" flex justify-between mt-6">
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
      {step === 3 && (
        <div className="md:p-5  max-w-xl mx-auto mt-6 rounded-borderRedius backdrop-blur-sm bg-white/50 shadow-md ">
        <FormHead formName="Company Information" />
        <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-violet-700 font-bold mb-2">
              Company Name:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter company name"
            />
          </div>
          {/* Business Registration Number */}
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-violet-700 font-bold mb-2">
              Business Registration Number:
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter registration number"
            />
          </div>
          {/* Registered Address */}
          <div className="mb-4">
            <label htmlFor="registeredAddress" className="block text-violet-700 font-bold mb-2">
              Registered Address:
            </label>
            <input
              type="text"
              id="registeredAddress"
              name="registeredAddress"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter registered address"
            />
          </div>
          {/* Company Contact Information */}
          <div className="mb-4">
            <label htmlFor="companyContact" className="block text-violet-700 font-bold mb-2">
              Company Contact Information:
            </label>
            <input
              type="text"
              id="companyContact"
              name="companyContact"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter company contact information"
            />
          </div>
          {/* Previous and Next Buttons */}
          <div className=" flex justify-between mt-6">
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
       <FormHead formName="Financial Information" />
       <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
         {/* Bank Details for Rent Payments */}
         <div className="mb-4">
           <label htmlFor="accountHolderName" className="block text-violet-700 font-bold mb-2">
             Account Holder Name:
           </label>
           <input
             type="text"
             id="accountHolderName"
             name="accountHolderName"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Enter account holder name"
           />
         </div>
         {/* Account Number */}
         <div className="mb-4">
           <label htmlFor="accountNumber" className="block text-violet-700 font-bold mb-2">
             Account Number:
           </label>
           <input
             type="text"
             id="accountNumber"
             name="accountNumber"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Enter account number"
           />
         </div>
         {/* IFSC Code */}
         <div className="mb-4">
           <label htmlFor="ifscCode" className="block text-violet-700 font-bold mb-2">
             IFSC Code:
           </label>
           <input
             type="text"
             id="ifscCode"
             name="ifscCode"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Enter IFSC code"
           />
         </div>
         {/* Credit Check Authorization */}
         <div className="mb-4">
           <label htmlFor="creditCheckAuthorization" className="block text-violet-700 font-bold mb-2">
             Credit Check Authorization (if applicable):
           </label>
           <input
             type="text"
             id="creditCheckAuthorization"
             name="creditCheckAuthorization"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Enter credit check authorization details"
           />
         </div>
         {/* Guarantor Details */}
         <div className="mb-4">
           <label htmlFor="guarantorDetails" className="block text-violet-700 font-bold mb-2">
             Guarantor Details (if required):
           </label>
           <input
             type="text"
             id="guarantorDetails"
             name="guarantorDetails"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             placeholder="Enter guarantor details if required"
           />
         </div>
         {/* Previous and Next Buttons */}
         <div className=" flex justify-between mt-6">
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
        <FormHead formName="Lease Details" />
        <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
          {/* Type of Lease */}
          <div className="mb-4">
            <label htmlFor="leaseType" className="block text-violet-700 font-bold mb-2">
              Type of Lease:
            </label>
            <select
              id="leaseType"
              name="leaseType"
              className="form-select rounded-md p-1 shadow-sm w-full"
            >
              <option value="">Select</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          {/* Property Leased */}
          <div className="mb-4">
            <label htmlFor="propertyLeased" className="block text-violet-700 font-bold mb-2">
              Property Leased:
            </label>
            <select
              id="propertyLeased"
              name="propertyLeased"
              className="form-select rounded-md p-1 shadow-sm w-full"
            >
              {/* Populate this dropdown with options from the onboarded property list */}
              {/* Example: */}
              {/* <option value="property1">Property 1</option> */}
              {/* <option value="property2">Property 2</option> */}
            </select>
          </div>
          {/* Lease Start Date */}
          <div className="mb-4">
            <label htmlFor="leaseStartDate" className="block text-violet-700 font-bold mb-2">
              Lease Start Date:
            </label>
            <input
              type="date"
              id="leaseStartDate"
              name="leaseStartDate"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
            />
          </div>
          {/* Lease End Date */}
          <div className="mb-4">
            <label htmlFor="leaseEndDate" className="block text-violet-700 font-bold mb-2">
              Lease End Date:
            </label>
            <input
              type="date"
              id="leaseEndDate"
              name="leaseEndDate"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
            />
          </div>
          {/* Rent Amount */}
          <div className="mb-4">
            <label htmlFor="rentAmount" className="block text-violet-700 font-bold mb-2">
              Rent Amount:
            </label>
            <input
              type="number"
              id="rentAmount"
              name="rentAmount"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter rent amount"
            />
          </div>
          {/* Rent Payment Frequency */}
          <div className="mb-4">
            <label htmlFor="rentPaymentFrequency" className="block text-violet-700 font-bold mb-2">
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
          {/* Rent Payment Method */}
          <div className="mb-4">
            <label htmlFor="rentPaymentMethod" className="block text-violet-700 font-bold mb-2">
              Rent Payment Method:
            </label>
            <input
              type="text"
              id="rentPaymentMethod"
              name="rentPaymentMethod"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter rent payment method"
            />
          </div>
          {/* Deposit Amount */}
          <div className="mb-4">
            <label htmlFor="depositAmount" className="block text-violet-700 font-bold mb-2">
              Deposit Amount:
            </label>
            <input
              type="number"
              id="depositAmount"
              name="depositAmount"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter deposit amount"
            />
          </div>
          {/* Deposit Protection Scheme */}
          <div className="mb-4">
            <label htmlFor="depositProtectionScheme" className="block text-violet-700 font-bold mb-2">
              Deposit Protection Scheme (if applicable):
            </label>
            <input
              type="text"
              id="depositProtectionScheme"
              name="depositProtectionScheme"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter deposit protection scheme details if applicable"
            />
          </div>
          {/* Previous and Next Buttons */}
          <div className=" flex justify-between mt-6">
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
       <FormHead formName="Legal Documents" />
       <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
         {/* Tenancy Agreement or Lease Contract */}
         <div className="mb-4">
           <label htmlFor="tenancyAgreement" className="block text-violet-700 font-bold mb-2">
             Tenancy Agreement or Lease Contract:
           </label>
           <input
             type="file"
             id="tenancyAgreement"
             name="tenancyAgreement"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             accept=".pdf,.doc,.docx"
           />
         </div>
         {/* Copy of ID */}
         <div className="mb-4">
           <label htmlFor="idCopy" className="block text-violet-700 font-bold mb-2">
             Copy of ID (e.g., Passport, Driving License):
           </label>
           <input
             type="file"
             id="idCopy"
             name="idCopy"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             accept=".pdf,.jpg,.jpeg,.png"
           />
         </div>
         {/* Proof of Right to Rent */}
         <div className="mb-4">
           <label htmlFor="rightToRentProof" className="block text-violet-700 font-bold mb-2">
             Proof of Right to Rent (for residential tenancies):
           </label>
           <input
             type="file"
             id="rightToRentProof"
             name="rightToRentProof"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             accept=".pdf,.jpg,.jpeg,.png"
           />
         </div>
         {/* Business License or Proof of Incorporation */}
         <div className="mb-4">
           <label htmlFor="businessLicense" className="block text-violet-700 font-bold mb-2">
             Business License or Proof of Incorporation (for commercial tenancies):
           </label>
           <input
             type="file"
             id="businessLicense"
             name="businessLicense"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             accept=".pdf,.jpg,.jpeg,.png"
           />
         </div>
         {/* Previous and Next Buttons */}
         <div className="flex justify-between mt-6">
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
        <FormHead formName="Insurance Details" />
        <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
          {/* Tenant's Insurance Policy Information */}
          <div className="mb-4">
            <label htmlFor="insurancePolicyInfo" className="block text-violet-700 font-bold mb-2">
              Tenants Insurance Policy Information (if required by the lease):
            </label>
            <input
              type="text"
              id="insurancePolicyInfo"
              name="insurancePolicyInfo"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter insurance policy information"
            />
          </div>
          {/* Payment Method */}
          <div className="mb-4">
            <label className="block text-violet-700 font-bold mb-2">
              Payment Method:
            </label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="netBanking"
                name="paymentMethod"
                value="netBanking"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="netBanking" className="ml-2 block text-sm text-gray-900">
                Net Banking
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="upi"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="upi" className="ml-2 block text-sm text-gray-900">
                UPI
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="check"
                name="paymentMethod"
                value="check"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="check" className="ml-2 block text-sm text-gray-900">
                Check
              </label>
            </div>
          </div>
          {/* Payment Frequency */}
          <div className="mb-4">
            <label htmlFor="paymentFrequency" className="block text-violet-700 font-bold mb-2">
              Payment Frequency:
            </label>
            <input
              type="text"
              id="paymentFrequency"
              name="paymentFrequency"
              className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
              placeholder="Enter payment frequency"
            />
          </div>
          <div className="mb-4">
            <label className="block text-violet-700 font-bold mb-2">
              Categorization of tenants:
            </label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="residential"
                name="tenantCategory"
                value="residential"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="residential" className="ml-2 block text-sm text-gray-900">
                Residential
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="commercial"
                name="tenantCategory"
                value="commercial"
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <label htmlFor="commercial" className="ml-2 block text-sm text-gray-900">
                Commercial
              </label>
            </div>
          </div>
          {/* Previous and Next Buttons */}
          <div className="flex justify-between mt-6">
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
       <FormHead formName="Notices and Communications" />
       <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
         {/* Preference for receiving notices and communications */}
         <div className="mb-4">
           <label className="block text-violet-700 font-bold mb-2">
             Preference for receiving notices and communications:
           </label>
           <div className="flex items-center mb-2">
             <input
               type="checkbox"
               id="email"
               name="communicationPreference"
               value="email"
               className="form-checkbox h-5 w-5 text-indigo-600"
             />
             <label htmlFor="email" className="ml-2 block text-sm text-gray-900">
               Email
             </label>
           </div>
           <div className="flex items-center mb-2">
             <input
               type="checkbox"
               id="post"
               name="communicationPreference"
               value="post"
               className="form-checkbox h-5 w-5 text-indigo-600"
             />
             <label htmlFor="post" className="ml-2 block text-sm text-gray-900">
               Post
             </label>
           </div>
           {/* Add more options as needed */}
         </div>
         {/* Consent for electronic communication */}
         <div className="mb-4">
           <label className="block text-violet-700 font-bold mb-2">
             Consent for electronic communication (if applicable):
           </label>
           <div className="flex items-center">
             <input
               type="checkbox"
               id="electronicCommunicationConsent"
               name="electronicCommunicationConsent"
               className="form-checkbox h-5 w-5 text-indigo-600"
             />
             <label htmlFor="electronicCommunicationConsent" className="ml-2 block text-sm text-gray-900">
               I consent to receive communications electronically.
             </label>
           </div>
         </div>
         {/* Previous and Next Buttons */}
         <div className="flex justify-between mt-6">
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
       <FormHead formName="Additional Notes and Documents" />
       <form className="max-w-lg mx-auto p-4" onSubmit={handleNext}>
         {/* Additional Notes */}
         <div className="mb-4">
           <label htmlFor="additionalNotes" className="block text-violet-700 font-bold mb-2">
             Additional Notes:
           </label>
           <textarea
             id="additionalNotes"
             name="additionalNotes"
             rows="4"
             className="form-textarea rounded-md p-1 shadow-sm w-full"
             placeholder="Enter any additional information or special arrangements"
           ></textarea>
         </div>
         {/* Compliance Confirmation */}
         <div className="mb-4">
           <label className="block text-violet-700 font-bold mb-2">
             Confirmation of compliance with relevant regulations:
           </label>
           <div className="flex items-center mb-2">
             <input
               type="checkbox"
               id="tenantFeesAct"
               name="complianceCheck"
               value="tenantFeesAct"
               className="form-checkbox h-5 w-5 text-indigo-600"
             />
             <label htmlFor="tenantFeesAct" className="ml-2 block text-sm text-gray-900">
               Compliance with Tenant Fees Act (for residential leases)
             </label>
           </div>
           <div className="flex items-center">
             <input
               type="checkbox"
               id="landlordTenantAct"
               name="complianceCheck"
               value="landlordTenantAct"
               className="form-checkbox h-5 w-5 text-indigo-600"
             />
             <label htmlFor="landlordTenantAct" className="ml-2 block text-sm text-gray-900">
               Compliance with Landlord and Tenant Act (for commercial leases)
             </label>
           </div>
         </div>
         {/* Document Upload */}
         <div className="mb-4">
           <label htmlFor="additionalDocuments" className="block text-violet-700 font-bold mb-2">
             Additional Documents:
           </label>
           <input
             type="file"
             id="additionalDocuments"
             name="additionalDocuments"
             className="form-input p-1 w-full outline-none border-b-2 border-purple-600 focus:ring-1 ring-purple-500 text-textColor rounded"
             accept=".pdf,.doc,.docx"
             multiple
           />
         </div>
         {/* Previous and Next Buttons */}
         <div className="flex justify-between mt-6">
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
  );
};

export default AddTenant;

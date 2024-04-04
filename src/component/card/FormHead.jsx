/* eslint-disable react/prop-types */
const FormHead = ({formName}) => {
  return (
    <>
      <div className="py-5 px-3 rounded-borderRedius ">
        <div>
        <h1 className="text-2xl text-purple-600 font-semibold ">{formName}</h1>
        </div>
        <div className="w-full bg-gradient-to-r from-purple-600 to-pink-400 p-[1px] mt-3"></div>
      </div>
    </>
  );
};

export default FormHead;

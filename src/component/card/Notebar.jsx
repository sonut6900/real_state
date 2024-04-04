import building from "../../img/building.jpg";
const Notebar = () => {
  return (
    <div className=" rounded-borderRedius p-3 shadow-md bg-white  text-textColor border translate-x-1 duration-500">
      <h1 className="text-yellow-500 text-lg font-semibold">
        Hello... <span className=" animate-spin ">👋</span>
      </h1>
      <div className="flex justify-between">
        <p className=" text-left text-sm py-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        </p>
        <img src={building} alt="buildign" className="w-32" />
      </div>
      <button className=" p-1 text-sm rounded-borderRedius">View More</button>
    </div>
  );
};

export default Notebar;

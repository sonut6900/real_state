import { BackButton } from "../../component/props/Buttons";
import profile from "../../img/profile.png";


const Notification = () => {
  return (
    <div className="">
        <BackButton name="Notification"/>
        <div className="mt-2">
            <h1 className="text-lg text-textColor py-3">Setting</h1>
            <div className="flex gap-4 bg-white border p-4 mb-1 rounded-primeryBRedius cursor-pointer hover:shadow-lg hover:mx-1">
            <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
              <h2 className=" font-semibold text-blue-700">User Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate fugit sint asperiores. Debitis ut vitae, repellendus excepturi ea similique.</p>
              </div>
               
            </div> 
            <div className="flex gap-4 bg-white border p-4 mb-1 rounded-primeryBRedius cursor-pointer hover:shadow-lg hover:mx-1">
            <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
              <h2 className=" font-semibold text-blue-700">User Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate fugit sint asperiores. Debitis ut vitae, repellendus excepturi ea similique.</p>
              </div>
               
            </div>            
            
        </div>
        <div className="mt-2">
            <h1 className="text-lg text-textColor py-3">Reminder</h1>
            <div className="flex gap-4 bg-white border p-4 mb-1 rounded-primeryBRedius cursor-pointer hover:shadow-lg hover:mx-1">
            <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
              <h2 className=" font-semibold text-green-700">User Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate fugit sint asperiores. Debitis ut vitae, repellendus excepturi ea similique.</p>
              </div>
               
            </div> 
            <div className="flex gap-4 bg-white border p-4 mb-1 rounded-primeryBRedius cursor-pointer hover:shadow-lg hover:mx-1">
            <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
              <h2 className=" font-semibold text-green-700">User Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate fugit sint asperiores. Debitis ut vitae, repellendus excepturi ea similique.</p>
              </div>
               
            </div>            
            
        </div>
        <div className="mt-2">
            <h1 className="text-lg text-textColor py-3">Maintenance</h1>
            <div className="flex gap-4 bg-white border p-4 mb-1 rounded-primeryBRedius cursor-pointer hover:shadow-lg hover:mx-1">
            <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
              <h2 className=" font-semibold text-yellow-700">User Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate fugit sint asperiores. Debitis ut vitae, repellendus excepturi ea similique.</p>
              </div>
               
            </div> 
            <div className="flex gap-4 bg-white border p-4 mb-1 rounded-primeryBRedius cursor-pointer hover:shadow-lg hover:mx-1">
            <img
                src={profile}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
              <h2 className=" font-semibold text-yellow-700">User Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate fugit sint asperiores. Debitis ut vitae, repellendus excepturi ea similique.</p>
              </div>
               
            </div>            
            
        </div>
    </div>
  )
}

export default Notification

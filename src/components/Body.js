import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <div className="flex  h-[88vh] overflow-y-auto " >
            <div className="px-2  m-2" >
                <Sidebar/>
            </div> 
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Body;
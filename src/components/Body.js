import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <div className="flex " >
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
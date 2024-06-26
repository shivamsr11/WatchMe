import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
    return (
        <>
        <Header />
        <div className="flex  h-[87vh] overflow-y-auto " >
            <div  >
                <Sidebar/>
            </div> 
            <div>
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default Body;
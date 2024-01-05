import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>{
const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

if(!isMenuOpen) return null;

    return(
        <div className="text-center">
            <div className="pt-1 w-[14rem] sm:w-[14rem] md:w-[14rem] lg:w-[14rem] xl:w-[14rem] 2xl:w-[14rem]">
                <ul className="border border-gray-100  shadow-lg p-4"> 
                    <li><Link to = "/app">Home</Link></li>
                    <li>Shorts</li>
                    <li>Subscription</li>
                </ul>
            </div>
            <div>
            <ul className="border border-gray-100  shadow-lg p-4"> 
                    <li>Library</li>
                    <li>History</li>
                    <li>Watch Later</li>
                    <li>Liked Videos</li>
                </ul>
            </div>
            <div className="border border-gray-100  shadow-lg p-4">
                <h1 className="font-bold">Subscriptions</h1>
            </div>
            <div className="border border-gray-100 shadow-lg p-4" >
                <h1 className="font-bold ">Explore</h1>
                <ul> 
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                </ul>
            </div>
            <div>
            <ul className="border border-gray-100  shadow-lg p-4"> 
                    <li>Setting</li>
                    <li>Report History</li>
                    <li>Help</li>
                    <li>Send feedback</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
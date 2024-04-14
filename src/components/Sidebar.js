import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>{
const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

if(!isMenuOpen) return null;

    return(
        <div className="text-center">
            <div className="pt-[1vh] w-[26vw] sm:w-[26vw] md:w-[21vw] lg:w-[21vw] xl:w-[16vw] 2xl:w-[16vw]">
                <ul className="border border-gray-100   shadow-lg p-[2vh]"> 
                    <li className="font-bold bg-gray-200 hover:bg-gray-300 rounded-lg py-[1vh]">
                        <Link to = "/app">Home</Link></li>
                    <li className="py-[0.5vh]" >Shorts</li>
                    <li className="py-[0.5vh]">Subscription</li>
                </ul>
            
            <div>
            <ul className="border border-gray-100  shadow-lg p-[2vh]"> 
                    <li className="py-[0.5vh]">Library</li>
                    <li className="py-[0.5vh]">History</li>
                    <li className="py-[0.5vh]">Watch Later</li>
                    <li className="py-[0.5vh]">Liked Videos</li>
                </ul>
            </div>
            <div className="border border-gray-100  shadow-lg p-[2vh]">
                <h1 className="font-bold py-[0.5vh]">Subscriptions</h1>
            </div>
            <div className="border border-gray-100 shadow-lg " >
                <ul className="p-[2vh]"> 
                <li className="py-[0.5vh]">Explore</li>
                    <li className="py-[0.5vh]">Trending</li>
                    <li className="py-[0.5vh]">Shopping</li>
                    <li className="py-[0.5vh]">Music</li>
                    <li className="py-[0.5vh]">Movies</li>
                    <li className="py-[0.5vh]">Live</li>
                    <li className="py-[0.5vh]">Gaming</li>
                </ul>
            </div>
            <div>
            <ul className="border border-gray-100  shadow-lg p-[2vh]"> 
                    <li className="py-[0.5vh] font-bold" >Setting</li>
                    <li className="py-[0.5vh]">Report History</li>
                    <li className="py-[0.5vh]" >Help</li>
                    <li className="py-[0.5vh]">Send feedback</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Sidebar;
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { HEADER_DROPDOWN, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () =>{
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const dispatch = useDispatch();
    const searchCache = useSelector((store) => store.search)

    useEffect(()=>{
    const timer = setTimeout(()=>{
        if (searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }else{
            getSearchSuggestions()
        }
    } , 200)
    return () =>{
        clearTimeout(timer);
    }
    },[searchQuery]);

    const getSearchSuggestions = async () =>{
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
    return(
        <div className=" flex justify-between p-2 mx-4 shadow-lg">
            <div className="flex ">
                <img onClick ={ () => toggleMenuHandler()} className = "h-14 cursor-pointer" alt = "menu" 
                    src = {HEADER_DROPDOWN} />
                <img className = "h-14 mx-2" alt = "youtube-logo" src = {YOUTUBE_LOGO} />
            </div>
            <div className="  pt-2">
                <div>
                <input className = "pl-4 w-[15.25rem] sm:w-[15.25rem] md:w-[24.25rem] lg:w-[24.25rem] xl:w-[24.25rem] 2xl:w-[24.25rem] text-md border border-gray-400 p-1 rounded-l-full" 
                type = "text"
                value = {searchQuery}  placeholder="Search"  onChange={(e)=>{
                    setSearchQuery(e.target.value)
                }}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                />
                <button className="border border-gray-400 p-1 px-2 rounded-r-full bg-gray-100"> 🔍 </button>
                </div>
            {showSuggestions && 
                <div className="absolute bg-white py-1 px-3 shadow-lg rounded-lg w-[25rem]">
                    <ul>{suggestions.map((s)=>(
                        <li key = {s} className="px-1 p-2 hover:bg-gray-100 shadow-sm">🔍 {s} </li>))}
                    </ul>
                </div>}
            </div>
            <div className="pt-2">
                <img className = "h-8  ml-4 " alt = "user-logo" src = {USER_ICON} />
            </div>
        </div>
    )
}

export default Header;
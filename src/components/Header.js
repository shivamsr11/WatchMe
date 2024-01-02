import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () =>{
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
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
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
    return(
        <div className=" grid grid-flow-col p-2 mx-4 shadow-lg">
            <div className="flex col-span-2">
                <img onClick ={ () => toggleMenuHandler()} className = "h-14 cursor-pointer" alt = "menu" src = "https://cdn0.iconfinder.com/data/icons/action-glyph/100/1-48-512.png" />
                <img className = "h-14 mx-2" alt = "youtube-logo" src = "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" />
            </div>
            <div className="col-span-9 ml-28 pt-2">
                <div>
                <input className = "pl-5 w-1/2 border border-gray-400 p-1 rounded-l-full" type = "text"
                value = {searchQuery}    onChange={(e)=>{
                    setSearchQuery(e.target.value)
                }}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                />
                <button className="border border-gray-400 p-1 px-2 rounded-r-full bg-gray-100"> 
🔍 </button>
</div>
{showSuggestions && <div className="absolute bg-white py-1 px-3 shadow-lg rounded-lg w-[25rem]">
    <ul>
        {suggestions.map((s)=>(<li key = {s} className="px-1 p-2 hover:bg-gray-100 shadow-sm">🔍 {s} </li>))}
        
    </ul>
</div>}
            </div>
            <div className="pt-2">
                <img className = "h-8 col-span-1 ml-4 " alt = "user-logo" src = "https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png" />
            </div>
        </div>
    )
}

export default Header;
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { HEADER_DROPDOWN, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from '../utils/userSlice';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";


const Header = () =>{
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const navigate = useNavigate();
    const user = useSelector(store => store?.user)
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
    const auth = getAuth();


    const handleSignout = () => {
        signOut(auth).then(() => {
          console.log("signout")
          navigate("/")
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            navigate("/app")
          } else {
            dispatch(removeUser())
            navigate("/")
            // User is signed out
          }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe();
      }, [])

    return(
        <div className=" flex justify-between p-[1vh] mx-[1vw] shadow-lg">
            <div className="flex ">
                <img onClick ={ () => toggleMenuHandler()} className = "h-[9vh] cursor-pointer" alt = "menu" 
                    src = {HEADER_DROPDOWN} />
                <img className = "h-[9vh] mx-[1vw]" alt = "youtube-logo" src = {YOUTUBE_LOGO} />
            </div>
            <div className="  pt-[1vh]">
                <div>
                <input className = "pl-[2vw] md:pl-[1vw] justify-center w-[40vw] sm:w-[40vw] md:w-[35vw] lg:w-[26vw] xl:w-[26vw] 2xl:w-[26vw] text-md border border-gray-400 p-1 rounded-l-full" 
                type = "text"
                value = {searchQuery}  placeholder="Search"  onChange={(e)=>{
                    setSearchQuery(e.target.value)
                }}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                />
                <button className="border border-gray-400 p-[0.6vh] px-[0.8vw] rounded-r-full bg-gray-100"> 🔍 </button>
                </div>
            {showSuggestions && 
                <div className="absolute bg-white shadow-lg rounded-lg w-[40vw] sm:w-[40vw] md:w-[35vw] lg:w-[26vw]
                 xl:w-[26vw] 2xl:w-[26vw]">
                    <ul>{suggestions.map((s)=>(
                        <li key = {s} className="px-[1vw] p-[1vh] hover:bg-gray-100 shadow-sm">🔍 {s} </li>))}
                    </ul>
                </div>}
            </div>
            <div className="">
                <img className = "h-[6vh] mt-[1vh] ml-[1vw] cursor-pointer " alt = "user-logo" onClick = {handleSignout}
                 src = {USER_ICON} />
            </div>
        </div>
    )
}

export default Header;
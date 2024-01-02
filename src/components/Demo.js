import {  useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () =>{
    const [text, setText] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const prime =  useMemo(() =>findPrime(text),[text])
     

    console.log(text)
    return(
        <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")}>
             <div>
                    <button className="bg-blue-400 p-2 m-6 text-red" 
                    onClick = {()=> setIsDarkTheme(!isDarkTheme)}>
                    Toggle</button></div>
            <div>
                <input className = "border border-black"  type = "number" value = {text} onChange={(e)=>{
                    setText(e.target.value)
                }}/> </div>
                <div> nth : {prime}</div>
        </div>
    )
}

export default Demo;
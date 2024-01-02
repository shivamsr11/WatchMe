import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () =>{
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(()=>{
     const i = setInterval(()=>{

            dispatch(addMessage({
                name : generateRandomName(),
                message : generateRandomMessage(15)
            }))
        },2000)
        return ()=>clearInterval(i);
    })

    return(
        <>
        <div className="p-2 h-[400px] w-[450px] m-2  border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
            {
                ChatMessages.map((c, index) => 
                <ChatMessage key = {index} name = {c.name} message = {c.message}/>
                )
            }
        </div>
        <form className="w-full ml-2" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name : "Shivam ",
                message : liveMessage
            }))
            setLiveMessage("")
            console.log("subitted",liveMessage)
        }}>
            <input className=" border border-black pl-2 w-96 rounded-lg" type = "text" value = {liveMessage} onChange={(e)=>{
                setLiveMessage(e.target.value)
            }}></input>
            <button className="p-1 ml-2 bg-black text-white rounded-lg">Send</button>
        </form>
        </>
    )
}

export default LiveChat;
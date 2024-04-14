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
        <div className="inline-block mt-[1vh] ">
        <div className="p-[1vh]  h-[74vh] w-[40vw] sm:h-[74vh] sm:w-[40vw] md:h-[74vh] md:w-[40vw] lg:h-[74vh] 
                        lg:w-[28vw] xl:h-[74vh] xl:w-[28vw] 2xl:h-[74vh] 2xl:w-[28vw] m-2  border border-black
                        bg-slate-100 overflow-y-scroll flex flex-col-reverse">
            {
                ChatMessages.map((c, index) => 
                <ChatMessage key = {index} name = {c.name} message = {c.message}/>
                )
            }
        </div>
        <form className=" ml-[1vw]" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name : "Shivam ",
                message : liveMessage
            }))
            setLiveMessage("")
            console.log("subitted",liveMessage)
        }}>
            <input className=" border border-black pl-[1vw] py-[0.3vh]  w-[32vw] sm:w-[32vw] md:w-[32vw] 
                                lg:w-[22vw] xl:w-[23vw] 2xl:w-[23vw] rounded-lg" type = "text" 
                   value = {liveMessage} onChange={(e)=>{
                        setLiveMessage(e.target.value)}}>
            </input>
            <button className="py-[1vh] px-[1vw] ml-[1vh] bg-black text-white rounded-lg">Send</button>
        </form>
        </div>
    )
}

export default LiveChat;
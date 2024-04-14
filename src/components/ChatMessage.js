import { USER_ICON } from "../utils/constants";

const ChatMessage = ({name, message}) =>{
    return(
        <div className="flex align-center my-[1.5vh]">
             <img className = "h-[4vh] col-span-1 px-[1vw] " alt = "user-logo" src = {USER_ICON} />
            <span className="font-bold">{name} : </span>
            <span className="px-[1vw]">{message}</span>
        </div>
    )
}

export default ChatMessage;
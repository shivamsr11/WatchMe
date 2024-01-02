import { USER_ICON } from "../utils/constants";

const ChatMessage = ({name, message}) =>{
    return(
        <div className="flex align-center my-2">
             <img className = "h-6 col-span-1 px-1 " alt = "user-logo" src = {USER_ICON} />
            <span className="font-bold">{name} : </span>
            <span className="px-1">{message}</span>
        </div>
    )
}

export default ChatMessage;
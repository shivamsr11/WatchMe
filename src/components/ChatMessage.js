const ChatMessage = ({name, message}) =>{
    return(
        <div className="flex align-center my-2">
             <img className = "h-6 col-span-1 px-1 " alt = "user-logo" src = "https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png" />
            <span className="font-bold">{name} : </span>
            <span className="px-1">{message}</span>
        </div>
    )
}

export default ChatMessage;
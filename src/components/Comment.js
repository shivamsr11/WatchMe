const Comment = ({data}) =>{
    const {name, text, reply} = data;
    return(
        <div className="flex bg-gray-100">
<div className="p-1">
<img className="w-6 h-6 " alt = "user" src= "https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png" />

</div>
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment;
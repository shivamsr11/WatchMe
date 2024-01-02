import { USER_ICON } from "../utils/constants";

const Comment = ({data}) =>{
    const {name, text, reply} = data;
    return(
        <div className="flex bg-gray-100">
        <div className="p-1">
            <img className="w-6 h-6 " alt = "user-logo" src= {USER_ICON} />
        </div>
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment;
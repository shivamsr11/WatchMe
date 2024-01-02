import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex">
        <div className="px-5 pt-2">
            <iframe width="800" height="400" src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player" frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe></div>
         <div>
            <LiveChat />
         </div>
         </div>
         <CommentsContainer />
         </div>
    )
}

export default WatchPage;

//dlC1tNsr-n8
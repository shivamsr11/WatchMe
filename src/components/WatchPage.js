import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ShimmerWatchPage from "./ShimmerWatchPage";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
 
    return (
        <div className="flex flex-col mt-3">
            <div className="flex">
            <div className="px-3 pt-2">
            { loading ? <ShimmerWatchPage /> : <></>  }
            <iframe onLoad={() => setLoading(false)} width="800" height="450"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}          
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                 web-share" title="YouTube video player" allowFullScreen></iframe>
            </div>
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
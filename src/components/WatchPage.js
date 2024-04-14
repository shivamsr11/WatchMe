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
        <div className="flex flex-col my-[1vh] mx-[1vw]">
            <div className="lg:flex">
            <div className="px-[1vw] mt-[1vh] pt-[1vh] xl:mb-[0vh] mb-[2vh] ">
            { loading ? <ShimmerWatchPage /> : <></>  }
            <iframe onLoad={() => setLoading(false)}   className="w-[93vw] h-[81vh] sm:w-[93vw] sm:h-[81vh] md:w-[93vw]
                                 md:h-[81vh] lg:w-[65vw] lg:h-[81vh] xl:w-[63vw] xl:h-[81vh] 2xl:w-[63vw] 2xl:h-[81vh]"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}          
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                 web-share" title="YouTube video player" allowFullScreen></iframe>
            </div>
            <div>
                <LiveChat />
            </div>
            </div>
                {/* <CommentsContainer /> */}
            </div>
        )
    }

export default WatchPage;

//dlC1tNsr-n8
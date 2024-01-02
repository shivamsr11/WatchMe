import  { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import  {YOUTUBE_VIDEOS_API} from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () =>{
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items)
    }

    if(videos.length === 0) return null

    return(
       
        <div className="flex flex-wrap">
            {videos.map((video) => (
            <Link key ={video?.id} to = {"/watch?v=" + video?.id}>
            <VideoCard   info={video}/></Link>)  )}
          
        </div>
    )
}

export default VideoContainer;
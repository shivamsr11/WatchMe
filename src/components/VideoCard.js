import React from "react";

const VideoCard = ({info}) =>{
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return(
       <div className="p-2 m-2 shadow-lg w-[340px] h-[300px]  bg-gray-100 cursor:pointer hover:bg-gray-300">
        <img alt = "thumbnail" className="rounnded-lg w-[310px] h-[165px] pl-2 pt-2 rounded-lg"
             src = {thumbnails?.medium?.url}/>
        <ul className="pl-2">
            <li className="font-bold pt-2">{channelTitle}</li>
            <li className="text-sm mt-[1px]">{title}</li>
            <li>{statistics?.viewCount} -views</li>
        </ul>        
       </div>
    )
}

export default VideoCard;
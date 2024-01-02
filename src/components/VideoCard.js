import React from "react";
const VideoCard = ({info}) =>{
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return(
       <div className="p-2 m-2 shadow-lg w-[330px] h-[300px] bg-gray-100 cursor:pointer hover:bg-gray-300">
        <img alt = "thumbnail" className="rounnded-lg w-[300px] pl-2 pt-1" src = {thumbnails?.medium?.url}/>
        <ul>
            <li className="font-bold pt-2">{channelTitle}</li>
            <li className="text-sm">{title}</li>
            <li>{statistics?.viewCount} -views</li>
        </ul>
        
       </div>
    )
}

export default VideoCard;
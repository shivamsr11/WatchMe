const Shimmer = () =>{
    return(
        <div className="flex flex-wrap">
            {Array(49).fill("").map((e,index)=>(
             <div key={index} className="p-2 m-2 shadow-lg w-[340px] h-[300px] bg-gray-100">
            <div className = "rounnded-lg w-[310px] h-[165px] mt-1 ml-2 pl-2 pt-2 bg-gray-300"></div>
        </div>
        )) }
        </div>
    )
}

export default Shimmer;
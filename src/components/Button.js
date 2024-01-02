const Button = () =>{
const btnList = ["All","Gaming","Live","Sports","Comedy","Music","Movies","Trending","Dance","Podcast",
                "Vlogs","Cooking"];
    return (
        <div className="flex mt-2 ">
          {btnList.map((ele) => 
            <div key = {ele}><button className="bg-gray-200 hover:bg-gray-400 px-[13px] py-1 m-2  rounded-lg">
              {ele}</button></div>
          )}
        </div>
    )
}

export default Button;
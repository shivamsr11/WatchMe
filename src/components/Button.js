const Button = () =>{
const btnList = ["All","Gaming","Live","Sports","Comedy","Music","Movies","Trending","Dance","Podcast",
                "Vlogs","Cooking"];
    return (
        <div className="flex mt-[2vh] flex-wrap">
          {btnList.map((ele) => 
            <div key = {ele}><button className="bg-gray-200 hover:bg-gray-400 px-[1vw] py-[1vh] m-[1vh]  rounded-lg">
              {ele}</button></div>
          )}
        </div>
    )
}

export default Button;
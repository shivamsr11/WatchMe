const Button = () =>{
const btnList = ["All","Gaming","Live","Sports","Comedy","Music","Movies","Trending","Dance","Podcast","Vlogs","Cooking"];
    return (
        <div className="flex ">
        {btnList.map((ele) => 
          <div key = {ele}><button className="bg-gray-200  px-3 py-1 m-2  rounded-lg">{ele}</button></div>
        )}
      </div>
    )
}

export default Button;